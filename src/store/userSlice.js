import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: [
        { id: "1", name: "aaaa", username: "Aa" },
        { id: "2", name: "bbbb", username: "Bb" }
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            return state.filter(
                item => item.id !== action.payload)
        }
    }
})

export const { addUser, deleteUser } = userSlice.actions
export default userSlice.reducer