import { Router, Request, Response } from "express";
import { verifyToken } from "../../../config/guard";
import * as UsersService from "../service/users.service";

export const UsersController = Router();

UsersController.get("/auth", async (req: Request, res: Response) => {
  const result = await UsersService.userAuth(req.body);
  return res.json(result);
});

UsersController.get("", async (req: Request, res: Response) => {
  const result = await UsersService.saveUser(req.body);
  return res.json(result);
});
