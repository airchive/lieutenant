import mongoose from "mongoose";
import configs from "../.configs";

class Database {
  private _firstLane: mongoose.Connection;

  constructor() {
    this._setFirstLane();
    this._firstLane = this.getFirstLane();
  }

  public getFirstLane(): mongoose.Connection {
    return this._firstLane;
  }

  private _setFirstLane() {
    this._firstLane = mongoose.createConnection(configs.database.url, {
      poolSize: 250,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  }
}

let database = new Database();

let catalog = database
  .getFirstLane()
  .useDb(configs.database.catalog, { useCache: true });

function connectTo(tenant: string) {
  return database.getFirstLane().useDb(tenant, { useCache: true });
}

export default Database;
export { database, catalog, connectTo };