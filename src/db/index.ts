import { sequelize } from "./sequelize";

sequelize
  .sync({ alter: true })
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
