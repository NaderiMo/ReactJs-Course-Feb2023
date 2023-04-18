import { useContext } from "react"
import UserContext from "../../../context/UserContext"

export default function ComponentZ() {

    const [user, setUser] = useContext(UserContext)
    // const [user] = useContext(UserContext)


    return (<>Z {user}
        <button onClick={() => { setUser("updated user") }}>change context data</button>
    </>)
}