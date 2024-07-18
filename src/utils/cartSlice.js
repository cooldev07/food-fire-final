import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        items2:"hello",
        order:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items=[...state.items,action.payload];
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((val)=>val.dish.id !==action.payload);
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
        placeOrder:(state,action)=>{
            state.order=action.payload;
        }
    }
})
export const {addItem,removeItem,clearCart,placeOrder}=cartSlice.actions;
export default cartSlice.reducer;