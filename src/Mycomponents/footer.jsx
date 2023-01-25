import React from 'react'


const Footer = () => {
    let year = new Date().getFullYear();
  return (
    <div>
        <div className="container" style={{
            position: "fixed",
            left: "0",
            bottom: "0",
            marginRight:"0",
            // width:" 100%",
            backgroundColor: "black",
            color:" white",
            textAlign: "center",
            height:"3rem"
        }
    }>
        Copyright {year}
    </div>
    </div>
  )
}

export default Footer