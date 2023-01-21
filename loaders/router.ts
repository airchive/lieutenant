import express from "express";
import v1 from "../src/v1/router";

let router = express.Router();
router.use("/v1", v1);

export default router;