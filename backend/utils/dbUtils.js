import { pool } from "../config/db.js";

const userTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;

const followTableQuery = `CREATE TABLE IF NOT EXISTS follows (
  follower_id INT NOT NULL,
  following_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (follower_id, following_id),
  FOREIGN KEY (follower_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (following_id) REFERENCES users(id) ON DELETE CASCADE
);`;

const createTable = async (tableName, query) => {
  try {
    await pool.query(query);
    console.log(`${tableName} table created or already exists`);
  } catch (error) {
    console.log(`Error creating ${tableName}`, error);
  }
};
// const postTableQuery = `CREATE TABLE IF NOT EXISTS posts (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT NOT NULL,
//     title VARCHAR(255) NOT NULL,
//     content TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// );`;

/*
CREATE TABLE user_follows (
    id INT PRIMARY KEY AUTO_INCREMENT,
    follower_id INT NOT NULL,
    following_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_follow (follower_id, following_id),
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (following_id) REFERENCES users(id)
);
*/

const createAllTable = async () => {
  try {
    await createTable("Users", userTableQuery);
    await createTable("Follows", followTableQuery);
    console.log("All tables created successfully!!");
  } catch (error) {
    console.log("Error creating tables", error);
    throw error;
  }
};

export default createAllTable;
