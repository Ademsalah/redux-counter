import { createSlice } from "@reduxjs/toolkit";

export const counterslice  = createSlice ({
    name:'counter',
    initialState:{
        counter : 10
    },

    reducers:{
        increment:(state,action)=>{
        state.counter += 1
        },
        decrement :(state,action)=>{
            state.counter -=1
        },
        reset:(state,action)=>{
            state.counter = 0
        },
        ajoutby10:(state,action)=>{
            state.counter += action.payload
        }
    }
})
export const {increment,decrement,reset,ajoutby10}= counterslice.actions

export default counterslice.reducer