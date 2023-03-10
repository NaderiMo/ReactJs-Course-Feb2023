import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import User from "./User";

export default function Users() {
  const [usersState, setUsersState] = useState([]);

  const baseURL = "https://6408e3ead16b1f3ed6c5a495.mockapi.io";

  useEffect(() => {
    axios.get(baseURL + "/users").then((response) => {
      console.log(response.data);
      setUsersState(response.data);
    });
  }, []);

  // axios
  //   .get("https://6408e3ead16b1f3ed6c5a495.mockapi.io/users")
  //   .then((res) => {
  //     const user = res.data;
  //     const type = res.headers.get("Content-Type");
  //     console.log({ type });
  //     // res.Json();
  //     console.log("in then:", user);
  //     // console.log({ user1 });

  //     setResponseState({ user });
  //     console.log(responseState);
  //   })
  //   .catch((err) => {
  //     console.log(err.message);
  //     // setResponseSate(res);
  //   });

  if (!usersState) return null;

  const editHandlder = (props) => {
    console.log("props", props);
    // <Link to="/User"></Link>;
    <Link to="/User" state={{ props }}>
      Edit User
    </Link>;

    // <Route exact path="/User" render={(props) => <User {...props} />} />;
  };

  const listItems = usersState.map((item, index) => (
    <li key={index}>
      {item.id}
      <h1>{item.name}</h1>
      <h1>{item.userName}</h1>
      {/* <Button onClick={() => editHandlder(item)}>Edit User</Button> */}
      {/* <Link to="/User" state={{ item }}>
        Edit User
      </Link> */}
      <Button as={Link} to={"/User"} state={{ item }}>
        Edit User
      </Button>
    </li>
  ));
  return (
    <div>
      <div>
        <h1>Users:</h1>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}
