
import React from "react";
import Navbar from "./componentes/header/Navbar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
/* import { useState } from 'react' */
import 'bootstrap/dist/css/bootstrap.min.css';




function App () {

  
    const links= [
        {href:"#", name:"home",id:1}, 
        {href:"#", name:"Productos",id:2}, 
        {href:"#", name:"Contactos",id:3}, 
        {href:"#", name:"Carrito",id:4} 
    ]

    return (
        <>
            <Navbar links = {links} stock = {0} initial = {10}/>
            <br/>
            <main>ECOMMERCE REINA COCINA</main>
            <ItemListContainer greeting= "Bienvenido a Reina Cocina"/>
        </>
    )
}

export default App; 
