import React from "react";
import { useSelector , useDispatch } from "react-redux";
import {increment,decrement,reset,ajoutby10} from  './redux/counterslice'
const   Counter =() =>{

const {counter} = useSelector((state)=>state.counter)
console.log('counter',counter)
const Dispatch = useDispatch()
   return(
    <div>
      <h1>counter: {counter}</h1>
      <button onClick={()=>Dispatch(increment())}>increment</button>
      <button onClick={()=>Dispatch(decrement())}>decrement</button>
      <button onClick={()=>Dispatch(reset())}>reset</button>
      <button onClick={()=>Dispatch(ajoutby10(10))}>test</button>
    </div>
   )
}
export default Counter