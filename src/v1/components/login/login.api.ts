import bcrypt from "bcrypt";
import express from "express";
import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

import UserModel from "../users/users.model";
import { AuthRequest } from "../../../../interfaces/global";
import generateNewToken from "../../../../scripts/generateNewToken";
import isAuthenticated from "../../../../middlewares/isAuthenticated";

let userModel = new UserModel();
let loginRouter = express.Router();

loginRouter
  .route("/")

  .get(
    isAuthenticated(),
    async (req: AuthRequest, res: Response, next: NextFunction) => {
      try {
        res.status(200).json({
          data: req.user,
        });
      } catch (error: Error) {
        res.status(500).json({
          error: {
            message: error.message,
          },
        });
      }
    }
  )

  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      let email: string = req.body.email;
      let password: string = req.body.password;
      let hasEmail = email ? true : false;
      let hasPassword = password ? true : false;

      if (!hasEmail) throw Error("Missing email field.");
      if (!hasPassword) throw Error("Missing password field.");

      let user = await userModel
        .getModel()
        .findOne({ email: email })
        .select("+password");

      if (!user) throw Error("User not found.");

      let isPasswordMatching = false;
      isPasswordMatching = await bcrypt.compare(password, user.password);
      if (!isPasswordMatching) throw Error("Wrong password.");

      let payload = {
        email: user.email,
        identifier: user._id,
        username: user.username,
        database: user.database,
      };

      let token = generateNewToken(payload);

      res.status(200).json({
        data: {
          token: token,
        },
      });
    } catch (error: Error) {
      res.status(400).json({
        error: {
          message: error.message,
        },
      });
    }
  });

export default loginRouter;