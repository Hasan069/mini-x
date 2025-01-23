import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { pool } from "../config/db.js";
import sendWelcomeEmail from "../services/emailService.js";
import userModel from "../model/userModel.js";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET; // Ensure this is set in your .env file

// Register User
export const registerUser = async (user) => {
  try {
    const [existingUser] = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [user.email]
    );
    if (existingUser.length > 0) {
      return { success: false, message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    const values = [user.username, user.email, hashedPassword];
    await pool.query(query, values);
    await sendWelcomeEmail(user.email, user.username);

    return { success: true, message: "User registered successfully" };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: "Registration failed. Error during registration.",
    };
  }
};

// Login User
export const loginUser = async (email, password) => {
  // console.log("Request body:", req.body);
  // const { email, password } = req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return { success: false, message: "email not found" };
    }

    const user = rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return { success: false, message: "Incorrect password" };
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "1h",
    });
    // const cookie = serialize("auth-token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "development",
    //   sameSite: "strict",
    //   maxAge: 3600,
    //   path: "/",
    // });

    // res.setHeader("Set-Cookie", cookie);
    console.log("Generated token:", token); // For debugging

    return {
      success: true,
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email, name: user.name },
    };
  } catch (error) {
    console.error("Login error:", error);
    return { success: false, message: "Login failed. Please try again later." };
  }
};

// Get User Details from Token
export const getUserFromToken = async (token) => {
  try {
    const trimmedToken = token.trim();
    console.log("Received token:", trimmedToken);

    // Verify token (no `await` needed here)
    const decoded = jwt.verify(trimmedToken, JWT_SECRET);
    console.log("Decoded token:", decoded);

    // Retrieve user details from the database
    const [rows] = await pool.query(
      "SELECT id, name, email FROM users WHERE id = ?",
      [decoded.id]
    );

    if (rows.length === 0) {
      return { success: false, message: "User not found" };
    }

    const user = rows[0];
    return { success: true, user };
  } catch (error) {
    console.error("Token verification error:", error);
    return { success: false, message: "Invalid or expired token" };
  }
};

// Function to follow a user
// export const followUser = async (followerId, followingId) => {
//   try {
//     // Check if users exist
//     const [users] = await pool.query(
//       "SELECT id FROM users WHERE id IN (?, ?)",
//       [followerId, followingId]
//     );

//     if (users.length !== 2) {
//       return { success: false, message: "One or both users not found" };
//     }

//     // Check if already following
//     const [existing] = await pool.query(
//       "SELECT * FROM user_follows WHERE follower_id = ? AND following_id = ?",
//       [followerId, followingId]
//     );

//     if (existing.length > 0) {
//       return { success: false, message: "Already following this user" };
//     }

//     // Create follow relationship
//     await pool.query(
//       "INSERT INTO user_follows (follower_id, following_id) VALUES (?, ?)",
//       [followerId, followingId]
//     );

//     return { success: true, message: "Successfully followed user" };
//   } catch (error) {
//     console.error("Follow error:", error);
//     return {
//       success: false,
//       message: "Failed to follow user. Please try again.",
//     };
//   }
// };

// // Function to unfollow a user
// export const unfollowUser = async (followerId, followingId) => {
//   try {
//     const [result] = await pool.query(
//       "DELETE FROM user_follows WHERE follower_id = ? AND following_id = ?",
//       [followerId, followingId]
//     );

//     if (result.affectedRows === 0) {
//       return { success: false, message: "Not following this user" };
//     }

//     return { success: true, message: "Successfully unfollowed user" };
//   } catch (error) {
//     console.error("Unfollow error:", error);
//     return {
//       success: false,
//       message: "Failed to unfollow user. Please try again.",
//     };
//   }
// };

// // Function to get followers of a user
// export const getFollowers = async (userId) => {
//   try {
//     const [followers] = await pool.query(
//       `SELECT u.id, u.name, u.email
//            FROM users u
//            INNER JOIN user_follows f ON u.id = f.follower_id
//            WHERE f.following_id = ?`,
//       [userId]
//     );

//     return { success: true, followers };
//   } catch (error) {
//     console.error("Get followers error:", error);
//     return { success: false, message: "Failed to get followers" };
//   }
// };

// // Function to get users being followed
// export const getFollowing = async (userId) => {
//   try {
//     const [following] = await pool.query(
//       `SELECT u.id, u.name, u.email
//            FROM users u
//            INNER JOIN user_follows f ON u.id = f.following_id
//            WHERE f.follower_id = ?`,
//       [userId]
//     );

//     return { success: true, following };
//   } catch (error) {
//     console.error("Get following error:", error);
//     return { success: false, message: "Failed to get following list" };
//   }
// };
