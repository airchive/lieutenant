import express from "express";

import loginRouter from "./components/login/login.router";
import itemsRouter from "./components/items/items.router";

let v1 = express.Router();
v1.use("/login", loginRouter);
v1.use("/items", itemsRouter);

export default v1;