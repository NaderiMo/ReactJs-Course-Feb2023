import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser } from "../store/userSlice";

function UserManagement() {
    const items = useSelector((state) => state.users)
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const dispatch = useDispatch()
    console.log(items);
    const handleClick = () => {
        dispatch(addUser({ id: "3", name, username }))
    }
    const handleDelete = (id) => {
        console.log(id,"id");
        dispatch(deleteUser(id))
    }
    return (
        <>
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />

            <button onClick={() => handleClick()}>Add user</button>
            <ul>
                {items.map((user, index) => <li>{user.name}
                    <span onClick={() => handleDelete(user.id)}>❌</span>
                    </li>)}
            </ul>

        </>
    )
}
export default UserManagement;
