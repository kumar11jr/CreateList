import React from "react";
 


const Card = ({list,onDelete}) => {

  


  return (
    <>
    
    {/* <h4>{list.name}</h4> */}
    <div className="card "style={{width : "18rem"}}>
  <div className="card-header">
    
  </div>
  <div className="card-body">
    <h5 className="card-title">{list.name}</h5>
    <p className="card-text">{list.desc}</p>
    <button className="btn btn-danger" onClick={()=>{onDelete(list)}} >Delete</button>
  </div>
</div>
    
    </>
  );
};

export default Card;
