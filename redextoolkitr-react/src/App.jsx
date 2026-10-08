import React from 'react'
import "./App.css"
import { increment } from "./Redux/Slice/Counter";
import { decrement } from "./Redux/Slice/Counter";
import { useDispatch, useSelector } from 'react-redux'
const App = () => {
  const Dispath = useDispatch();
  const counter = useSelector((state)=> state.counter.value)
  return (
    <div className='counter-page'>
      <h1>{counter}</h1>
      <button onClick={ ()=>{Dispath(increment())}} >increment</button>
      <button onClick={ ()=> {Dispath(decrement())}}>decremet</button>
      {/* impt documnation link https://atlantic-jellyfish-c1f.notion.site/Redux-Toolkit-Complete-Beginner-Documentation-320b5aac78f780ee9b55db9ba6592cfe */}
    </div>
  )
}

export default App
