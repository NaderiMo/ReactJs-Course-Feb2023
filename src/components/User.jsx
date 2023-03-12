import req from "../configs/requests";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function User() {
  const location = useLocation();
  console.log("location", location);
  const { item } = location.state;

  const [userState, setUserState] = useState(item);
  const [editState, setEditState] = useState(false);

  const deleteUser = (item) => {
    req
      .delete("/users/" + item.id)
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
    console.log("userState2", userState);
    setEditState(true);

    req
      .put("/users/" + item.id, { userName: userState.userName })
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
        {userState.id}
        <h1>{userState.name}</h1>

        <Form.Control
          type="text"
          id="userName"
          defaultValue={userState.userName}
          onChange={(event) => {
            onUserNameChange(event);
          }}
        />

        {/* <h1>{item.userName}</h1> */}
        <Button onClick={() => deleteUser(userState)}>Delete User</Button>
        <Button onClick={() => editUser(userState)}>Edit User</Button>
      </div>
    </>
  );
}
