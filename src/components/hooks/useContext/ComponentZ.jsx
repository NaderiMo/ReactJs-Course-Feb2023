import { useContext } from "react";
import DataContext from "../../../context/DataContext";

export default function ComponentZ() {
    const [user, setUser] = useContext(DataContext)
    return (<>Z {user}
        <button onClick={() => setUser("Mohsen Naderi")}>Change Context data</button>
    </>)
}
