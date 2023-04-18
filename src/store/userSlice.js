import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [
        { id: "1", name: "aaaaa", username: "Aa" },
        { id: "2", name: "bbbbb", username: "Bb" }
    ],
    reducers: {
        //TODO: 
    }
})


export default userSlice.reducer