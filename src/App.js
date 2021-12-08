
import React from "react";
import Navbar from "./componentes/header/Navbar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
import 'bootstrap/dist/css/bootstrap.min.css';



/* importar de un file css "import ./header.css" */

function App (greeting) {

    const links= [
        {href:"#", name:"home",id:1}, 
        {href:"#", name:"Productos",id:2}, 
        {href:"#", name:"Contactos",id:3}, 
        {href:"#", name:"Carrito",id:4} 

    ]

    
    
    return (
        <div>
            <Navbar links = {links}/>
            <br/>
            <main>ECOMMERCE REINA COCINA</main>
            <ItemListContainer greeting= "Bienvenido a Reina Cocina"/>
        </div>
    )
}

export default App; 
