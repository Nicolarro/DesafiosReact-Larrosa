/* import { useState} from "react"; */
import React from "react";
/* import { ToastContainer, toast } from 'react-toastify'; */
import Item from "./Item.js"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemList = ({listado}) =>{

return(

        <ul>
                {listado.map((producto)=>(

        <Item key={producto.id} precio= {producto.price} /> 
       
                ))}
        </ul>   

)
}

export default ItemList;