import axios from "axios"
import { useState } from "react"

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleLogin = () => {
        setIsLoading(true)
        const config = {
            headers: {
                "Content-Type": " text/plain"
            },
            timeout: 3000,
        }
        axios.post(process.env.baseUrl + "login", loginData, config)
            .then((res) => { localStorage.setItem("id", JSON.stringify(res.data)) })
            .catch((err) => { alert("Error") })
            .finally(() => setIsLoading(false))
    }
    return (<>
        <input
            value={loginData.username}
            onChange={(e) => { setLoginData({ ...loginData, username: e.target.value }) }}
            type="text" />
        <input
            value={loginData.password}
            onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
            type="password" />
        <button onClick={() => handleLogin()}>Login</button>
    </>)
}