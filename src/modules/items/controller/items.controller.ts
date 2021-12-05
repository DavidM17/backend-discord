import { Router, Request, Response } from "express";
import { verifyToken } from "../../../config/guard";
import * as ItemsService from "../service/items.service";

export const ItemsController = Router();

ItemsController.use(verifyToken);

ItemsController.get("", async (req: Request, res: Response) => {
  const result = await ItemsService.showItems();
  return res.json(result);
});

ItemsController.post("", async (req: Request, res: Response) => {
  const result = await ItemsService.createItem(req.body);
  return res.json(result);
});