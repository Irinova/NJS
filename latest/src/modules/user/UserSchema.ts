import { Schema, Model, model } from "mongoose";
import { UserType } from "./UserType";

export const userSchema = new Schema<UserType, Model<UserType>>({
  name: String,
  password: String,
});

export const User = model("User", userSchema);
