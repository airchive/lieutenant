import express from "express";
import itemsApi from "./items.api";

let itemsRouter = express.Router();
itemsRouter.use("/", itemsApi);

export default itemsRouter;