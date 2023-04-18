import { useState } from "react";
import UserContext from "../../../context/UserContext";
import ComponentZ from "./ComponentZ";

export default function ComponentA() {
    const [user, setUser] = useState("Roya")
    return (<>A
        <hr />
        {/* <UserContext.Provider value={user}> */}
        <UserContext.Provider value={[user, setUser]}>
            <ComponentZ />
        </UserContext.Provider>
    </>)
}