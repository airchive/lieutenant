
import express from "express";
import { Response } from "express";
import { NextFunction } from "express";

import ItemModel from "../items/items.model";
import { AuthRequest } from "../../../../interfaces/global";
import isAuthenticated from "../../../../middlewares/isAuthenticated.middleware";

let itemsRouter = express.Router();

itemsRouter
  .route("/")

  .get(
    isAuthenticated(),
    async (req: AuthRequest, res: Response, next: NextFunction) => {
      try {
        let itemModel = new ItemModel(req.user.database).getModel();
        let item = await itemModel.findOne({});

        res.status(200).json({
          data: {
            user: req.user,
            item: item,
          },
        });
      } catch (error: Error) {
        res.status(500).json({
          error: {
            message: error.message,
          },
        });
      }
    }
  );

export default itemsRouter;