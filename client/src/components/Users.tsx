import { IUser } from "../interface/user";

interface IProps {
  users: IUser[];
}
const Users: React.FC<IProps> = ({ users }) => {
  const usersList = users.map((user: IUser) => {
    return (
      <tr key={user._id}>
        <td>{user.fName}</td>
        <td>{user.lName}</td>
        <td>{user.email}</td>
      </tr>
    );
  });

  return (
    <div>
      <h2>Users</h2>
      <table id="users">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>{usersList}</tbody>
      </table>
    </div>
  );
};

export default Users;
