import { useSelector } from "react-redux";

function UserManagement() {
    const items = useSelector((state) => state.users)
    console.log(items);

    return (
        <>
            <input type="text" />
            <ul>
                {items.map(user => <li>{user.name}</li>)}
            </ul>
        </>
    )
}
export default UserManagement;
