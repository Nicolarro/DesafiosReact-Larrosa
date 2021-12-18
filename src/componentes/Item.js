import React from "react";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { useState } from 'react';
import { useEffect } from 'react'; */


 
    const Item = (props) => {

   
/*         const variable = () => {

            const [listado, setListado] = useState([])

            useEffect(() =>{
                listadoProductos().then((datos) => { //puse datos por poner algo, seria el array de producto
                 const datosFiltrada = datos.filter((elemento) =>elemento.destacados)  
                    setListado(datosFiltrada)

                })

        }, [])}  */// esto hace que lo que esta adentro se ejecute cuando se actualiza. Le indico que se actualize cuando pasa algo
    
        return (
                <>
                <ul>
                    <h3>{props.name}</h3>
                </ul>
                </>

        );
    
    }  


export default Item;