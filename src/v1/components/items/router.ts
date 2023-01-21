import express from "express";
import itemsApi from "./api";

let itemsRouter = express.Router();
itemsRouter.use("/", itemsApi);

export default itemsRouter;