import mongoose from "mongoose";

const USER_SCHEMA = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
  },

  surname: {
    trim: true,
    type: String,
  },

  username: {
    trim: true,
    type: String,
    unique: true,
    lowercase: true,
  },

  email: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true,
  },

  password: {
    trim: true,
    type: String,
    select: false,
    required: true,
  },

  database: {
    trim: true,
    type: String,
    required: true,
    lowercase: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
});

export default USER_SCHEMA;