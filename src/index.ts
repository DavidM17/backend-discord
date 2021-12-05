import "./config/database";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { ItemsController } from "./modules/items/controller/items.controller";
import { UsersController } from "./modules/users/controller/users.controller";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/users", UsersController);
app.use("/items", ItemsController);

app.listen(PORT, () => {
  console.log("Server on port", PORT);
});

