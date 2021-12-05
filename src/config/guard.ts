import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const TOKEN = process.env.TOKEN || "";

export const verifyToken = (req: Request & { user?: string | JwtPayload }, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["Authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, TOKEN);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};