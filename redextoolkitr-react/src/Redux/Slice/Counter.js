import { createSlice } from "@reduxjs/toolkit";
export const Counterslice =  createSlice({
    name: "counter",
    initialState: {
   value : 0,
},
    reducers:{
        increment : (state)=> {
            state.value += 1;
            console.log(state);
            
        },
        decrement : (state)=> {
            state.value -= 1;
        }
    }
})
export const { increment, decrement } = Counterslice.actions;