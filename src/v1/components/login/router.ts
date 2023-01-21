import express from "express";
import loginApi from "./api";

let loginRouter = express.Router();
loginRouter.use("/", loginApi);

export default loginRouter;