import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
 import React from "react";
 import ItemDetail from "react"
 import {listadoProductos} from "./ItemListContainer"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemDetailContainer = ({listado}) =>{

   
    const {id} = useParams();

    const producto = listadoProductos.find(e => e.id === id)

    console.log(producto)

    const [item,setItem] = useState([]);

/*     const getItem = () =>{

    } */

        useEffect(()=>{
            setTimeout(() => {
                
                const promise = new Promise ((resolve,reject) =>{
                    setTimeout(() => {
                        resolve(producto);
                },2000);
                });
                promise
                .then((producto) => { setItem(producto)})
                .catch((error)=>{
                    console.log(error)
                });
        },2000);
        },)

        
    return(
        <ItemDetail unidad= {item} producto={producto}/>

    )

}



export default ItemDetailContainer;