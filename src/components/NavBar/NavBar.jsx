import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'
export const NavBar =()=> {
  return (
    <>
   <div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/categoria/parafina'>Velas de parafina</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to='/categoria/especiales'>Velas Especiales</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/cart'><CartWidget/></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
   </div>
    </>
  );
}
export default NavBar;