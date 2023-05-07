import { useState } from "react";
import { useForm } from "react-hook-form";

type Task = {
    id: number;
    state: boolean;
    title: string
}
type Params = {
    id: number;
    title?: string;
    tasks: Task[];
    onSubmit: () => void
}

export default function Login(params: Params) {
    const [state, setState] = useState<boolean>(true)

    const handleClick = (id: number) => {

    }

    const {
        register,
        handleSubmit,
        formState: { errors,isDirty,isLoading,isValid },
    } = useForm();

    return (<>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register('firstName')} {...params} />
            <input {...register('password', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
        </form>
    </>)
}