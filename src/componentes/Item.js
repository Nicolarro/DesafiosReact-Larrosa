import React from "react"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


 
    const Item = ({price,title,id}) => {

            console.log(price)
    
        return (
                <>
                <br/>
                <ul>
                    <h1>{title}</h1>
                    <h2> Precio:{price}</h2>
                    <Link to= {`/item/${id}`}>
                    <button> Detalle </button>
                    </Link>
                </ul>
                </>

        );
    
    }  


export default Item;