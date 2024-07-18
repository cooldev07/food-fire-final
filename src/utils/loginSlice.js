import { createSlice } from "@reduxjs/toolkit";

const loginSlice=createSlice({
    name:"login",
    initialState:{
        username:"",
    },
    reducers:{
        addUserName:(state,action)=>{
            state.username=action.payload;
        },
        logout:(state)=>{
            state.username="";
        }
    }
})
export const {addUserName,logout}=loginSlice.actions;
export default loginSlice.reducer;