import { useRouter } from "next/router"

export default function TodoEdit() {
    const router = useRouter()
    const { id } = router.query
    return (<>Todo  Edit {id}</>)
}