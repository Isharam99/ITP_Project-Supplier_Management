import React from "react";
import {Link } from 'react-router-dom'

const Navbar = () => {

    return (
      <header>
        <div className="container" style={{ float: "right", width: "80%" }}>
          
        <div className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to = "/" className="navbar-brand" style={{color:"red"}}>Supplier Management </Link>
  
        <Link to = "/add" className="nav-link">Add Supplier </Link>
     
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </div>



</header>
    )
}

export default Navbar;