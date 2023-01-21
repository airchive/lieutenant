import jwt from "jsonwebtoken";
import { Response } from "express";
import { NextFunction } from "express";

import configs from "../.configs";
import { AuthRequest } from "../interfaces/global";

function isAuthenticated() {
  return async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      let token = req.headers["authorization"] || "";
      let hasToken = token ? true : false;
      if (!hasToken) throw Error("Missing authorization token.");

      jwt.verify(
        token,
        configs.application.token.secret as string,
        (error: Error, user: any) => {
          if (error) {
            throw Error("You're not authorized to access the resource.");
          }

          req.user = user;
        }
      );

      next();
    } catch (error: Error) {
      res.status(401).json({
        error: {
          message: error.message,
        },
      });
    }
  };
}

export default isAuthenticated;
