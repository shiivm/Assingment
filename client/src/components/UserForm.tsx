import axios from "axios";
import React, { useState } from "react";
import { IUser } from "../interface/user";

interface IProps {
  user: IUser;
}
const UserForm: React.FC<IProps> = ({ user }) => {
  const [userDetails, setUserDetails] = useState<IUser>(user);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(`https://immense-forest-20042.herokuapp.com/user/add`, userDetails)
      .then((res) =>
        setUserDetails({
          fName: "",
          lName: "",
          email: "",
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="fName"
          value={userDetails.fName}
          onChange={handleChange}
        />{" "}
        <label>Last Name</label>
        <input
          type="text"
          name="lName"
          value={userDetails.lName}
          onChange={handleChange}
        />{" "}
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={userDetails.email}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UserForm;
