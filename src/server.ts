import express from "express";
import { myDataSource } from "../ormconfig";
import { routes } from "./routes";
import "dotenv/config";

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Server is running"));