import React, { useState } from 'react'
import Regi from './component/Regi'
import Card from './component/Card'
import "./App.css"
const App = () => {
  const [data, setdata] = useState([])
  function recivedata(value) {
   setdata(
     [...data,   // spread operator use hota hai ki purana daa bachana hai aur add karna naya data tab spread operator use hoga ok  issa leya form mai ye use kar rahaia 
     value]
   )
    console.log(value);
    console.log(data);
    
  }
  return (
    <>
    < Regi  recivedata = {recivedata} />
    <Card data = {data} />
    </>
  )
}

export default App