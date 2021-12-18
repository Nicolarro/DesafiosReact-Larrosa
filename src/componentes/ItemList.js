import React from "react";
/* import { ToastContainer, toast } from 'react-toastify'; */
import Item from "./Item.js"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemList = ({props}) =>{

return(

        <ul>
                {props.listadoProductos.map((producto)=>(

        <Item key={producto.id} precio= {producto.precio} /> 
       
                ))}
        </ul>   

)
}

export default ItemList;