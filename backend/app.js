import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { checkConnection } from "./config/db.js";
import createAllTable from "./utils/dbUtils.js";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

dotenv.config();
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`"Server is running on the PORT ${PORT}"`);
  try {
    await checkConnection();
    await createAllTable();
  } catch (error) {
    console.log("Failed to connect to the database", error);
  }
});
