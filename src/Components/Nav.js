import { NavLink } from "react-router-dom";
import React, { useContext } from 'react';
import  context  from "./Conte";

function Nav(){
    const {Flag} = useContext(context);
    console.log(Flag);
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
  <div class="container-fluid" >
    <a class="navbar-brand" href="#" ></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item nav-link">
     {!Flag.Flag &&  <NavLink  exact to="/" >Login</NavLink>}
       {Flag.Flag  && <NavLink   to="/Logout">
             Logout
            </NavLink>
        }
       </li>
       
       
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Nav ;