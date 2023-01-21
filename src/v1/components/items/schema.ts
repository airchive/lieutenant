import mongoose from "mongoose";

const ITEM_SCHEMA = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    required: true,
  },

  description: {
    trim: true,
    type: String,
  },

  quantity: {
    default: 0,
    type: Number,
  },

  price: {
    type: Number,
  },
});

export default ITEM_SCHEMA;