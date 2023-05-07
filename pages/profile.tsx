import axios from "axios"
import { useEffect, useState } from "react"

export default function Profile() {
    useEffect(() => {
        const idObject = localStorage.getItem("id")
        const parsed = idObject && JSON.parse(idObject)
        parsed && alert(parsed?.id)
    }, [])

    return (<>

    </>)
}