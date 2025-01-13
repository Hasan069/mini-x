import mysql2 from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql2.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 20,
  queueLimit: true,
});

const checkConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Connected to Database");
    connection.release();
  } catch (error) {
    console.log("Connection error", error);
  }
};

export { pool, checkConnection };
