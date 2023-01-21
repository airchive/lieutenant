import mongoose from "mongoose";

import ITEM_SCHEMA from "./items.schema";
import { connectTo } from "../../../../loaders/database";

class ItemModel {
  private _itemModel: mongoose.Model<any>;

  constructor(database: string) {
    console.log("Instance")
    this._setModel(database);
    this._itemModel = this.getModel();
  }

  public getModel(): mongoose.Model<any> {
    return this._itemModel;
  }

  private _setModel(database: string) {
    this._itemModel = connectTo(database).model("Item", ITEM_SCHEMA);
  }
}

export default ItemModel;