import { Sequelize } from "sequelize";
import { env } from "process";

console.log("Database URL:", process.env.DATABASE_URL, env.DATABASE_URL);

export const sequelize = new Sequelize(env.DATABASE_URL || "", {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // Neon requires SSL connections
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  },
  logging: console.log, // Enable logging to debug queries
});
