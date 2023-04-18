import { useState } from "react";
import ComponentZ from "./ComponentZ";
import DataContext from "../../../context/DataContext";

export default function ComponentA(params) {
    const [user, setUser] = useState("Mohsen")
    // const data = "samle data";
    return (<>
        A
        <hr />
        <DataContext.Provider value={[user,setUser]}>
            <ComponentZ />
        </DataContext.Provider>
    </>)
}
