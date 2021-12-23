import React from "react"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { useState } from 'react';
import { useEffect } from 'react'; */


 
    const Item = ({price,title}) => {

            console.log(price)
    
        return (
                <>
                <br />
                <ul>
                    <h2>{title}</h2>
                    <h3> {price}</h3>
                </ul>
                </>

        );
    
    }  


export default Item;