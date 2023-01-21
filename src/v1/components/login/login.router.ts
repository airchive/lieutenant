import express from "express";
import loginApi from "./login.api";

let loginRouter = express.Router();
loginRouter.use("/", loginApi);

export default loginRouter;