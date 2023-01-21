import jwt from "jsonwebtoken";
import configs from "../.configs";

interface TokenPayload {
  email: string;
  database: string;
  username: string;
  identifier: string;
}

function generateNewToken(payload: TokenPayload): string {
  return jwt.sign(payload, configs.application.token.secret, {
    expiresIn: configs.application.token.expirationTime,
  });
}

export default generateNewToken;