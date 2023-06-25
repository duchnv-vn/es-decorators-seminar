import { Request, Response } from "express";
import { baseService } from "../services";

export const HomeController = (req: Request, res: Response) => {
  const a = baseService.testDecorateFunc("123");
  res.send(a);
};
