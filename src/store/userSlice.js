import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [
        { id: "1", name: "aaaaa", username: "Aa" },
        { id: "2", name: "bbbbb", username: "Bb" }
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            return state.filter((item, index) => item.id != action.payload)
        }

    }
})

export const { addUser, deleteUser } = userSlice.actions
export default userSlice.reducer