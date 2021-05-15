import { Document } from "mongoose";

export interface IUser extends Document {
  id?: string;
  fName: string;
  lName: string;
  email: string;
}
