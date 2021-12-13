import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

/*    const [estado,setEstado] = useState(0)
    console.log(estado) */
    

const ItemCount = ({stock, initial, onAdd}) =>{

    let [contador, setContador] = useState(1) /* EL CONTADOR SUMA COMO PRIMER NUMERO 0?? */

/*     let [lista, setLista] = useState([]) // AGREGAR DESPUES

    let [estado,setEstado] = useState(false) */ //AGREGAR DESPUES

    
        const sumar = () =>{
            if (contador > stock){
                toast("No hay mas stock")
            }
            else
            {
                setContador(contador +1 )
                console.log(contador)

/*                 setEstado(!estado) */ //AGREGAR DESPUES

  /*               setLista(lista.map) */// AGREGAR DESPUES
            }
        }
    
        const restar = () => {
            if(contador < 1){
            toast("La cantidad a comprar no puede ser 0")
            }
            else
            {
            setContador(contador - 1)}
        }
        
        const resetear = () => {
            setContador(0)
/*             setLista() */ //AGREGAR DESPUES
        }

    return (
        <>   
            <p>Contador Actual:{contador}</p>
            <button onClick={sumar}> SUMAR</button>
            <ToastContainer />
            <button onClick={restar}> RESTAR</button>
            <ToastContainer />
            <button onClick={resetear}> RESETEAR</button>
            <button onClick={onAdd}> AGREGAR AL CARRITO</button>
            <br/>   
        </>
    )

}

export default ItemCount;