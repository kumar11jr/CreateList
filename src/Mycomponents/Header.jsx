import React from 'react'

const Header = (props) => {

    
  return (
    <>
    <center>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor:"rgb(189, 199, 15)"}} >
  <div className="container-fluid">
    <a href="#"><img src="list.png" alt="" width={20} /></a>
    <a className="navbar-brand my-1" href="#" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu</a>
        </li>
       
          
        
        <li className="nav-item">
          <a className="nav-link">Services</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</center>
    </>
  )
}

export default Header
