
import React from "react";
import Navbar from "./componentes/header/Navbar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



/* importar de un file css "import ./header.css" */

function App (stock) {

  
 /*    const [estado,setEstado] = useState(0)
    console.log(estado) */
    
    let [contador, setContador] = useState(0)

/*     let [lista, setLista] = useState([]) */

    const sumar = () =>{
        if (contador > stock){
            alert("no hay productos disponibles") /* esto cambiarlo despues */
        }
        else
        {
            setContador(contador+1)
        }
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const resetear = () => {
        setContador(0)
     /*    setLista() */
    }

    const links= [
        {href:"#", name:"home",id:1}, 
        {href:"#", name:"Productos",id:2}, 
        {href:"#", name:"Contactos",id:3}, 
        {href:"#", name:"Carrito",id:4} 
    ]

    return (
        <>
            <Navbar links = {links} stock = {0}/>
            <br/>
            <main>ECOMMERCE REINA COCINA</main>
            <p>Contador Actual:{contador}</p>
            <button onClick={sumar}> SUMAR</button>
            <button onClick={restar}> RESTAR</button>
            <button onClick={resetear}> RESETEAR</button>
            <ItemListContainer greeting= "Bienvenido a Reina Cocina"/>
        </>
    )
}

export default App; 
