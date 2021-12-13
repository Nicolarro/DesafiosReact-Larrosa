import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemCount from "./ItemCount.js"
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemListContainer = (props) => {

    const onAdd = (contador,stock) => {
        if (contador > stock) {
        toast("No hay stock suficiente")
        }
        else
        {
        toast(  {contador} + " Productos agregados al carrito")
        }
        }
        
    return (
        <>
            <br/>
{/*             <h1>{props.nombre}</h1> */}
            <p>{props.greeting}</p>
            <div><ItemCount stock= {5} initial ={1} onAdd = {onAdd}/></div>
            <ToastContainer/>
        </>
    )
}

export default ItemListContainer;