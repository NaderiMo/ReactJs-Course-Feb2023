import React from "react";
import { useForm } from "react-hook-form";

export default function TestLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("firstName")} />
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input type="number" {...register("age")} />
      {errors.age && <p>age is required.</p>}
      <input type="submit" />
    </form>
  );
}
