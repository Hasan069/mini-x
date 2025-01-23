import { pool } from "../config/db.js";

// Follow a user
export async function followUser(followerId, followingId) {
  try {
    // Check if users exist
    const [users] = await pool.execute(
      "SELECT id FROM users WHERE id IN (?, ?)",
      [followerId, followingId]
    );

    if (users.length !== 2) {
      throw new Error("One or both users not found");
    }

    // Check if already following
    const [existing] = await pool.execute(
      "SELECT * FROM follows WHERE follower_id = ? AND following_id = ?",
      [followerId, followingId]
    );

    if (existing.length > 0) {
      throw new Error("Already following this user");
    }

    // Create follow relationship
    const [result] = await pool.execute(
      "INSERT INTO follows (follower_id, following_id) VALUES (?, ?)",
      [followerId, followingId]
    );

    return {
      success: true,
      message: "Successfully followed user",
      followId: result.insertId,
    };
  } catch (error) {
    throw {
      success: false,
      message: error.message || "Error following user",
      error: error,
    };
  }
}

// Unfollow a user
export async function unfollowUser(followerId, followingId) {
  try {
    // Check if follow relationship exists
    const [existing] = await pool.execute(
      "SELECT * FROM follows WHERE follower_id = ? AND following_id = ?",
      [followerId, followingId]
    );

    if (existing.length === 0) {
      throw new Error("Not following this user");
    }

    // Remove follow relationship
    await pool.execute(
      "DELETE FROM follows WHERE follower_id = ? AND following_id = ?",
      [followerId, followingId]
    );

    return {
      success: true,
      message: "Successfully unfollowed user",
    };
  } catch (error) {
    throw {
      success: false,
      message: error.message || "Error unfollowing user",
      error: error,
    };
  }
}

// Get followers of a user
export async function getFollowers(userId) {
  try {
    const [followers] = await pool.execute(
      `
      SELECT u.* FROM users u
      INNER JOIN follows f ON f.follower_id = u.id
      WHERE f.following_id = ?
    `,
      [userId]
    );

    return followers;
  } catch (error) {
    throw {
      success: false,
      message: "Error getting followers",
      error: error,
    };
  }
}

// Get users that a user is following
export async function getFollowing(userId) {
  try {
    const [following] = await pool.execute(
      `
      SELECT u.* FROM users u
      INNER JOIN follows f ON f.following_id = u.id
      WHERE f.follower_id = ?
    `,
      [userId]
    );

    return following;
  } catch (error) {
    throw {
      success: false,
      message: "Error getting following users",
      error: error,
    };
  }
}
