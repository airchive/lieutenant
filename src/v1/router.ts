import express from "express";

import loginRouter from "./components/login/router";
import itemsRouter from "./components/items/router";

let v1 = express.Router();
v1.use("/login", loginRouter);
v1.use("/items", itemsRouter);

export default v1;