import React, { useState } from 'react'

const Form = ({ propes }) => {
// console.log(propes);

  const [formdata, setformdata] = useState({
    name : "",
    age: ""
  })
  function changehandling (e) {
   console.log(e.target.value);
   
    setformdata(
      {
    ...formdata,
    [e.target.name] : e.target.value ,
    // 
  }

 )
  }
  function submittedhandling(e) {
   e.preventDefault();
   propes(formdata);
      setformdata(
      {
    ...formdata,
    name : "",
    age: ""
  } 
)
  }
  return (
    
    <div >
      <form onSubmit={submittedhandling} >
    <label htmlFor="name">
        Name : <input type="text" onChange={changehandling} placeholder='entre your name' name='name' value={formdata.name}  />
    </label>
       <label htmlFor="age">age <input type="text" onChange={changehandling} name='age' value={formdata.age} /></label>
      <button type='submit'>done</button>
      </form>
    </div>
  )
}

export default Form
