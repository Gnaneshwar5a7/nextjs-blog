import { sequelize } from "./sequelize";
import "./models/user";
import "./models/blog";

sequelize
  .sync({ alter: true, force: true })
  .then(() => {
    console.log("Database has been synced");
  })
  .catch((error) => {
    console.error("Unable to sync database", error);
  });

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
