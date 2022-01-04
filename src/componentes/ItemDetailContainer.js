import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
 import React from "react";
 import ItemDetail from "react"
 import {listadoProductos} from "./ItemListContainer"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemDetailContainer = ({listado}) =>{

   const producto = listadoProductos
   
    const {id} = useParams();


    const [prod,setProducto] = useState([]);

    
        useEffect(()=>{
            setTimeout(() => {
                
                const promise = new Promise ((resolve,reject) =>{
                    setTimeout(() => {
                        resolve(producto);
                },2000);
                });
                promise
                .then((producto) => { 
                    let filterProduct = producto.filter((prod)=> producto.id === parseInt(id))
                    console.log(filterProduct)
                    setProducto(filterProduct);})
                .catch((error)=>{
                    console.log(error)
                });
        },[id]);
        },)

        
    return(
        <ItemDetail unidad= {producto}/>

    )

}

export default ItemDetailContainer;