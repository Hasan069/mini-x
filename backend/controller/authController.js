import userModel from "../model/userModel.js";
import { registerUser } from "../services/authServices.js";

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
  } catch (error) {}
};
