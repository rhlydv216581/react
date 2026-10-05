import React from 'react'

import "./Card.scss";
const Card = (propes) => {
  return (

    
        <div className="cards">
            const [first, setfirst] = useState(second)
            <div className="imgs">
                 <img src={propes.data.images[0]} alt="" />
            <img src={propes.data.images[1]} alt="" />
             
            <img src={propes.data.images[2]} alt="" /> 
            </div>
            <div className="info">
          <img 
               src={propes.data.profile}
                alt="" /> 
                <div className="name">

                <h1>{propes.data.username}</h1> 
                <h2>{propes.data.name}</h2>
                </div>
                
                <div className="para">
                <p>{propes.data.description}</p>
                <p>{propes.data.description2}</p>
                </div>
                
            </div>
            <div className="numericalinfo">
               <div className="post">   
                  <h1>{propes.data.post}</h1>
                     <h2>Post</h2>
         </div>
    <div className="follower">
        <h1>{propes.data.follower}</h1>
        <h2>Follower</h2>
    </div>
    <div className="following">
        <h1>{propes.data.following}</h1>
        <h2>Following</h2>
    </div>
            </div>
            </div>
    
    
  )
}

export default Card
