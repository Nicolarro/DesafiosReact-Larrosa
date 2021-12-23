import { useState,useEffect } from "react";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import ItemCount from "./ItemCount.js"
import ItemList from "./ItemList.js"
/* import { useParams } from "react-router-dom"; */
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'



const ItemListContainer = (props) => {


    const listadoProductos = [
        {id:1, title: "espresso" ,description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.", price: 150, pictureUrl: "" },
        {id:2, title: "latte" ,   description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.", price: 150, pictureUrl: "" },
        {id:3, title: "machiatto" ,description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.", price: 150, pictureUrl: "" },
        {id:4, title: "tradicional" ,description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.", price: 150, pictureUrl: ""},
        {id:5, title: "capuccino" ,description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.", price: 150, pictureUrl: ""}
    ]

    const onAdd = (contador,stock) => {
        if (stock === 0 || contador > stock) {
        toast("No hay stock suficiente")
        }
        else
        {
        toast( {contador} + " Productos agregados al carrito")
        }
        }


        const [lista,setLista] = useState();

       useEffect(()=>{
            setTimeout(() => {
                
                const promise = new Promise ((resolve,reject) =>{
                    setTimeout(() => {
                        resolve(listadoProductos);
                },2000);
                });
                promise
                .then((productos) => { setLista(productos)
                })
                .catch((error)=>{
                    console.log(error)
                });
        },2000);
        },);

        console.log(lista)


    return (
        <>
            <h2> {props.greeting} </h2> 
            <ItemCount stock= {5} initial ={1} onAdd = {onAdd}/>
            <ToastContainer/>  
            <ItemList listado = {lista}/>
        </>
    )
}

export default ItemListContainer;

