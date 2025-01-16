import { Sequelize } from "sequelize";
import sqlite3 from "sqlite3";
import fs from "fs";
const databasePath =
  process.env.NODE_ENV === "production"
    ? "/tmp/blog.sqlite"
    : "./tmp/blog.sqlite";

console.log(`Database path: ${databasePath}`);
console.log("Writable directories:", fs.readdirSync("/tmp"));

export const sequelize = new Sequelize({
  dialect: "sqlite",
  dialectModule: sqlite3,
  storage: databasePath,
});
