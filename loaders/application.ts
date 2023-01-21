import express from "express";

import router from "./router";
import configs from "../.configs";
import pingServer from "../middlewares/pingServer";

class Application {
  private _application: express.Application;

  constructor() {
    const application = express();
    this._application = this._setApplication(application);
  }

  public getApplication() {
    return this._application;
  }

  private _setApplication(
    application: express.Application
  ): express.Application {
    application.use(express.json());

    application.get("/ping", pingServer());
    application.use("/api", router);
    application.listen(configs.application.port);

    console.info(
      `Lieutenant is up and running on port: ${configs.application.port}`
    );

    return application;
  }
}

export default Application;