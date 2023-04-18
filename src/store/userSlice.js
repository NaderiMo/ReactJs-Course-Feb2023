import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:[
        {id:"1", name:"aaaa", username:"Aa"},
        {id:"2", name:"bbbb", username:"Bb"}
    ],
    reducers:{
        //todo
    }
})

export default userSlice.reducer