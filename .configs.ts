import dotenv from "dotenv";
dotenv.config();

export default {
  application: {
    environment: process.env.NODE_ENV || "development",
    port: process.env.PORT || process.env.SERVER_PORT || 5000,

    token: {
      expirationTime: "3600000",
      secret: process.env.TOKEN_SECRET || "lieutenant",
    },
  },

  database: {
    catalog: "catalog",
    url: "mongodb://mongo_black:27017,mongo_grey:27018,mongo_white:27019/",
  },
};
