import express from "express";
import { register } from "../controller/authController.js";

const router = express.Router();

router.post("./register-user", register);
export default router;
