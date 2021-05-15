import axios from "axios";
import { useState } from "react";
import { IUser } from "../interface/user";
import UserForm from "./UserForm";
import Users from "./Users";
const User = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<IUser[]>([]);

  const showUserHandler = () => {
    axios.get(`https://immense-forest-20042.herokuapp.com/user`).then((res) => {
      const data: IUser[] = res.data || [];
      setUserDetails(data);
      setShowUser(!showUser);
    });
  };
  const user: IUser = {
    fName: "",
    lName: "",
    email: "",
  };
  return (
    <div className="container">
     {!showUser && <UserForm user={user} />}
      <div>
        <button onClick={showUserHandler}>{showUser ? 'Add' : 'Show'} Users</button>
      </div>
      {showUser && <Users users={userDetails} />}
    </div>
  );
};

export default User;
