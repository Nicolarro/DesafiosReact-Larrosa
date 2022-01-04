 import { useState } from "react";
import React from "react";
import ItemCount from "./ItemCount"
import {unidad} from "./ItemDetailContainer"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from "react-router-dom";



const ItemDetail = ({unidad,producto}) =>{


    const [estado, setEstado] =useState(true)


    function onAdd (cantidad) {
        console.log("Agregado al carrito");
        setEstado(false)
        
    }

    console.log(unidad)

    if (estado===true){
   
    return (      
        <div>
            <h2>PRODUCTO</h2>
       
        
        {unidad.map((prod)=>{

        return <> <h2>Nombre: {prod.title}</h2>
        <img src={prod.pictureUrl} alt={prod.title} ></img>

        <span>Descripcion:{prod.description}</span>
        <ItemCount stock= {5} initial ={1} onAdd = {onAdd}/>
        <NavLink to="/carrito">
            <button>Finalizar compra</button>
        </NavLink>
        </>
        })}
    </div>

    )
}
else{
    return(
    <div>
        <h2>PRODUCTO</h2>

        {unidad.map((prod)=>{

        return <div><h2>Nombre: {prod.title}</h2>
        <img src={prod.pictureUrl} alt={prod.title} ></img>

        <span>Descripcion:{prod.description}</span>

        <NavLink to="/carrito"> <button>Finalizar Compra</button></NavLink>
      
    </div>
            })}
    </div>
        )

}
}

export default ItemDetail;