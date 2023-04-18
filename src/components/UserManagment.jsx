import { useSelector } from "react-redux";

function UserManagement(){
    const items=useSelector((state)=>state)
    return (<div>
        {items.map(user=><li>{user.name}</li>)}
        </div>)
}
export default UserManagement;