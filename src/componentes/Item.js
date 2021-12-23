import React from "react"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { useState } from 'react';
import { useEffect } from 'react'; */


 
    const Item = ({listado}) => {


    
        return (
                <>
                <ul>
                    <h3>{listado.name}</h3>
                </ul>
                </>

        );
    
    }  


export default Item;