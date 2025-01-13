import userModel from "../model/userModel.js";
import { registerUser, loginUser } from "../services/authServices.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "User must fill all the feilds" });
  }

  const user = new userModel({ username, email, password });
  try {
    const response = await registerUser(user);
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json(response);
    }
  } catch (error) {
    return { success: false, message: "Registration failed" };
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Email and password are required" });
  }

  try {
    // Call loginUser function from auth service
    const response = await loginUser(email, password);

    if (response.success) {
      return res.status(200).json(response); // Login successful
    } else {
      return res.status(401).json(response); // Unauthorized
    }
  } catch (error) {
    console.error("Error in user login:", error);
    return res.status(500).json({
      success: false,
      message: "Login failed. Please try again later.",
    });
  }
};
