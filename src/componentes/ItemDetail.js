/*  import { useState,useEffect } from "react"; */
/* import { useParams } from "react-router-dom"; */
import React from "react";
import ItemCount from "./ItemCount"
import {producto} from "./ItemDetailContainer"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemDetail = ({unidad,producto}) =>{


    console.log(producto)
    if (producto.lenght > 0){
   
    return(
        <>
        <br/>
        <h2>Nombre: {producto.title}</h2>
        <img src={producto.pictureUrl} alt={producto.title} ></img>

        <span>Descripcion:{producto.description}</span>
        </>
    )
}
else{
    <h1>Cargando</h1>
}

}

export default ItemDetail;