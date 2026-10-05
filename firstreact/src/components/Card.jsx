import React from 'react'
import "./Card.scss";
import "./Button"
// import App from '../App';
const Card = () => {
    let data = [{
        img:"https://images.unsplash.com/photo-1619417889956-c701044fed86?q=80&w=1076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,username:"Amazoe basic",despreaction : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit in, minima asperiores recusandae sed amet id possimus est, inventore voluptat"
    },
    {
        img: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username:"Joshua Rawson-Harris",
        despreaction:"  Bangkok, Thailand    Published on December 3, 2017shed on December 3, 2017NIKON CORPORATION, NIKON D7100 Free to use under the Unsplash License           "
    },
    {
        img : "https://images.unsplash.com/photo-1568739253582-afa48fbcea47?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username:"sobhan joodi",
        despreaction : "Published on September 17, 2019 "
    }
// https://cdn.dribbble.com/users/757683/screenshots/5369103/attachments/1164054/search_influencers.jpg
]
  return (
<div className="cards">
   { data.map((Element,index)=>
        <div key={index} className="card ">
      <div className="img">
        <img
          src={Element.img}
          alt="Amazon Basic product"
        />
      </div>
      <div className="cont ">
        <h1>{Element.username}</h1>
        <p>
         {Element.despreaction}
        </p>
      </div>
      <button   className="cta"><span class="hover-underline-animation"> Known MORE </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg> </button>
    </div>
   
    )}
</div>    // <h1>hello </h1>
  )
}

export default Card
     