import { Sequelize } from "sequelize";
import sqlite3 from "sqlite3";

const databasePath =
  process.env.NODE_ENV === "production"
    ? "/tmp/blog.sqlite"
    : "./tmp/blog.sqlite";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  dialectModule: sqlite3,
  storage: databasePath,
});
