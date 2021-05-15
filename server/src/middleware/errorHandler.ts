import {IHttpException} from "../interface/httpException";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  error: IHttpException,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const status = error.statusCode || error.status || 500;

  response.status(status).send(error);
};