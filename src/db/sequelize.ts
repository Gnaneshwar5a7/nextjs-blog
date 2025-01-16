import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://username:password@host:port/database",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // Neon requires SSL connections
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    },
    logging: console.log, // Enable logging to debug queries
  }
);
