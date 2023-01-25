import React from 'react'
import Card from "./Card";


const Display = (props) => {
  return (
    <>
    <h3 style={{padding:"2rem"}}>Cart</h3>
   <div className="container d-flex my-6 mx-3">
    {props.list.length===0 ? "No Items in Your Cart":
    props.list.map((curr) =>{
       return <Card list={curr} key={curr.sno} onDelete={props.onDelete}/>
    })}
    
   </div>
   </>
  )
}

export default Display;
