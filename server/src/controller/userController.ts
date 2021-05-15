import { Request, Response } from "express";
import { IUser } from "../interface/user";
import User from "../model/userModel";

export const addUser = async (req: Request, res: Response) => {
  const { fName, lName, email }: IUser = req.body;

  try {
    const user = await User.findOne({ email });
    if (user)
      return res.status(400).json({ errorMsg: "User already exists!!" });

    const newUser: IUser = new User({ fName, lName, email });
    const savedUser = await newUser.save();
    if (!savedUser) throw Error("Something went wrong saving the user");
    res.status(200).json({
      user: {
        id: savedUser.id,
        fName: savedUser.fName,
        lName: savedUser.lName,
        email: savedUser.email,
      },
    });
  } catch (error) {
    res.status(400).json({ errorMsg: error });
  }
};

export const fetchUser = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await User.find();
    if (!users || (users && users.length == 0)) throw Error("No items");

    res.status(200).json(users);
  } catch (e) {
    res.status(400).json({ errorMsg: e.message });
  }
};
