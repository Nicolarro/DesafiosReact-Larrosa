import { useState,useEffect } from "react";
/* import { useParams } from "react-router-dom"; */
 import React from "react";
 import ItemDetail from "react"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'



const ItemDetailContainer = (prop) =>{

    const [lista,setLista] = useState();

    useEffect(()=>{
        setTimeout(() => {
            setLista(lista)
        },2000);

    }, );


    return(
        <ItemDetail/>
    )

}


export default ItemDetailContainer;