import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
 function clickedhandle() {
  console.log("you clicked");
  
 }
 const api = "https://dummyjson.com/recipes";
  function getdata() {
  console.log("youclicked");

  try {
    const res =  axios.get(api);
    console.log(res.data
);
  } catch (error) {
    console.log(error);
  }
}
 
  return ( 
 <div className="hii">
<button onClick={getdata
} >
  get add
</button>
 
 {/* {produts.length > 0 products.map(p = > <li>prodtcname</li>: loading)} */}
 </div>
 
  )
}

export default App
