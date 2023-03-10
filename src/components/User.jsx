import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function User() {
  const location = useLocation();
  console.log("location", location);
  const { item } = location.state;

  const baseURL = "https://6408e3ead16b1f3ed6c5a495.mockapi.io";

  const [userState, setUserState] = useState(item);
  const [editState, setEditState] = useState(false);

  const deleteUser = (item) => {
    axios
      .delete(baseURL + "/users/" + item.id)
      .then((response) => {
        console.log(response.data);
        alert(item.userName + "  deleted!");
        setUserState(null);
      })
      .catch((error) => {
        alert("No user!");
        setUserState(null);
      });
  };

  const editUser = (item) => {
    setEditState(true);
    axios
      .put(baseURL + "/users/" + item.id, { userName: userState.userName })
      .then((response) => {
        console.log(response.data);
        alert(userState.userName + "  edited!");
        setUserState(response.data);
      })
      .catch((error) => {
        alert("No user!");
        setUserState(null);
      });
  };

  const onUserNameChange = (event) => {
    setUserState({ ...userState, userName: event.target.value });
    console.log("userState", userState);
  };

  if (!userState) return "No user!";

  return (
    <>
      <div>
        <p>User is :</p>
        {item.id}
        <h1>{item.name}</h1>

        <Form.Control
          type="text"
          id="userName"
          defaultValue={item.userName}
          onChange={(event) => {
            onUserNameChange(event);
          }}
        />

        {/* <h1>{item.userName}</h1> */}
        <Button onClick={() => deleteUser(item)}>Delete User</Button>
        <Button onClick={() => editUser(item)}>Edit User</Button>
      </div>
    </>
  );
}
