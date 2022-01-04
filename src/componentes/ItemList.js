/* import { useState} from "react"; */
import React from "react";
import Item from "./Item.js"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemList = ({listado}) =>{

console.log(listado)

return(
        <ul>
                {listado.map((producto)=>(

        <Item key={producto.id} price= {producto.price} title = {producto.title} id= {producto.id}/> 
       
                ))}
        </ul>   
)
}

export default ItemList;