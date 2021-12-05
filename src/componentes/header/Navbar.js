 import React from "react";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Button from 'react-bootstrap/Button';
 
 const Navbar = () =>{

return(
    <nav className="navbar navbar-expand-lg navbar-light header--color">
    <a className="navbar-brand" href="index.html">
      <img src="https://i.ibb.co/1RDMJgg/Logo-Index.jpg" width="70" height="70" alt="" className="header--color header__logo img-fluid"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse header--color" id="navbarScroll">
      <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll header--color" /* style={"max-height: 100px"} */>
        <li className="nav-item">
          <a className="nav-link header--color" href="index.html" >HOME</a>
        </li>
        <li className="nav-item">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle header--color" href="./sections/productos.html" id="navbarScrollingDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
             PRODUCTOS
            </a>
            <ul className="dropdown-menu header--color" aria-labelledby="navbarScrollingDropdown">
              <li><a className="dropdown-item header--color" href="./sections/productos.html">Salados</a></li>
              <li><a className="dropdown-item header--color" href="./sections/productos.html">Dulces</a></li>
              <li><a className="dropdown-item header--color" href="./sections/productos.html">Personalizados</a></li>
            </ul>
          </li>
        </li>
        <li className="nav-item">
          <a className="nav-link header--color" href="./sections/contacto.html" >CONTACTO</a>
        </li>
    </ul>
      <form className="d-flex">
          
        <input className="form-control mr-2 " type="search" placeholder="Search" aria-label="Search"/> 
        <button className="btn btn-outline-success header--color" type="submit">Search</button>
        <br/>
        <Button variant = "primary"> Prueba</Button>
      </form>

    </div>
  </nav>
)
}

export default Navbar;



