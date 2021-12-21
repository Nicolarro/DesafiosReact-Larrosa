import { useState,useEffect } from "react";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import ItemCount from "./ItemCount.js"
import ItemList from "./ItemList.js"
import data from "./data.js"
/* import { useParams } from "react-router-dom"; */
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const listadoProductos = data


const ItemListContainer = (props) => {

    const onAdd = (contador,stock) => {
        if (stock === 0 || contador > stock) {
        toast("No hay stock suficiente")
        }
        else
        {
        toast( {contador} + " Productos agregados al carrito")
        }
        }




        const [lista,setLista] = useState(listadoProductos)

       useEffect(()=>{
            setTimeout(() => {
                setLista(lista)
            },2000);

        }, [lista]);

        console.log(lista)

/*         const listadoProductos = () => {   

        return new Promise ((resolve,reject) =>{

            setTimeout(() => {

                        resolve ([
                            {id:1, title: "espresso" ,destacados: true, price: 150, pictureUrl: "" },
                            {id:2, title: "latte" ,   destacados: false, price: 150, pictureUrl: "" },
                            {id:3, title: "machiatto" ,destacados: true, price: 150, pictureUrl: "" },
                            {id:4, title: "tradicional" ,destacados: false, price: 150, pictureUrl: ""},
                            {id:5, title: "capuccino" ,destacados: true, price: 150, pictureUrl: ""}
                        ]);

                    },2000)
                     
                            })} 
         */
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