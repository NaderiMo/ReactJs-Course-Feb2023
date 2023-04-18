import { useSelector } from "react-redux"

export default function UserManagement() {
    const items = useSelector((state) => state.users)
    console.log(items);
    return (
        <>
            {/* <input type="text"></input> */}
            <ul>
                {items.map(user => <li>{user.name}</li>)}
            </ul>
        </>
    )
}