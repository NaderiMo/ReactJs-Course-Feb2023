import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../store/userSlice";

export default function UserManagement() {
  const items = useSelector((state) => state.users);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(addUser({ id: "3", name, username }));
  };

  const handeleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>

      <button onClick={() => handleOnClick()}>add user</button>
      <ul>
        {items.map((user, index) => (
          <li>
            {user.name}
            <span onClick={() => handeleDelete(user.id)}>❌</span>
          </li>
        ))}
      </ul>
    </>
  );
}
