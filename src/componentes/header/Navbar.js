 import React from "react";
 import CardWidget from "./CardWidget.js"
/*  import {Link,NavLink} from "react-router-dom" */
 import 'bootstrap/dist/css/bootstrap.min.css'

 
 const Navbar = ({links}) =>{

return(

  <header id="main-header" className="header">
    <div>
    <a className="navbar-brand" href="index.html">
      <img src="https://i.ibb.co/1RDMJgg/Logo-Index.jpg" width="70" height="70" alt="" className="header--color header__logo img-fluid"/>
    </a>
    </div>
      <nav className="navbar navbar-expand-lg navbar-light header--color">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse header--color" id="navbarScroll">
    <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll header--color">
        <li className="nav-item">
          <a className="nav-link header--color" href="./" >HOME</a>
        </li>
        <li className="nav-item">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle header--color" href="a" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
             PRODUCTOS
            </a>
            <ul className="dropdown-menu header--color" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item header--color" href="a">Salados</a></li>
              <li><a className="dropdown-item header--color" href="a">Dulces</a></li>
              <li><a className="dropdown-item header--color" href="a">Personalizados</a></li>
            </ul>
          </li>
        </li>
        <li className="nav-item">
          <a className="nav-link header--color" href= "a" >CONTACTO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link header--color" href= "a" >CARRITO</a>
        </li>
        <CardWidget/>
    </ul>
      <form className="d-flex">
          
      </form>

  </div>
  </nav>
  </header>
)
}

export default Navbar;



