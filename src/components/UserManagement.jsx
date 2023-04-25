import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addUser, deleteUser } from "../store/userSlice"

export default function UserManagement() {
    const items = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const handleClick = () => {
        dispatch(addUser(
            { id: "3", name, userName }
        ))
    }
    const handleDelete = (id) => {
        debugger;
        dispatch(deleteUser(id))
    }
    console.log(items);
    return (
        <>
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="userName" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={() => handleClick()} >Add User</button>
            <ul>
                {items.map((user, index) => <li>
                    {user.name}
                    <span style={{ cursor: "pointer" }} onClick={() => handleDelete(user.id)}>❌</span>
                </li>)}

            </ul>
        </>
    )
}