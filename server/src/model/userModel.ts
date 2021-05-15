import { model, Schema, Model } from "mongoose";
import { IUser } from "../interface/user";

const UserSchema: Schema = new Schema({
  fName: { type: String, required: true },
  lName: { type: String, required: true },
  email: { type: String, required: true },
});

const User: Model<IUser> = model('User', UserSchema);

export default User;
