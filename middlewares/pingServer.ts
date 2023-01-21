import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

function pingServer() {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).send("pong");
    } catch (error: Error) {
      res.status(500).json({
        error: {
          message: error.message,
        },
      });
    }
  };
}

export default pingServer;