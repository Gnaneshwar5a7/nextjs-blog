import { Sequelize } from "sequelize";
import { env } from "process";
import pg from 'pg';

export const sequelize = new Sequelize(env.DATABASE_URL || "postgres://neondb_owner:f50LOohIKMRy@ep-yellow-heart-a5ziyv3v-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require", {
  dialect: "postgres",
  dialectModule: pg,
  dialectOptions: {
    ssl: {
      require: true, // Neon requires SSL connections
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  },
  logging: console.log, // Enable logging to debug queries
});
