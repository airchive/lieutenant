import mongoose from "mongoose";

import USER_SCHEMA from "./schema";
import { catalog } from "../../../../loaders/database";

class UserModel {
  private _userModel: mongoose.Model<any>;

  constructor() {
    this._setModel();
    this._userModel = this.getModel();
  }

  public getModel(): mongoose.Model<any> {
    return this._userModel;
  }

  private _setModel() {
    this._userModel = catalog.model("User", USER_SCHEMA);
  }
}

export default UserModel;