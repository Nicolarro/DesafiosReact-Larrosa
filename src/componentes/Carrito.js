import  React from "react";
import { useContexto } from "../miContexto";
import {addDoc, collection, serverTimestamp, updateDoc /* para reducir el stock */} from "firebase/firestore"
import {db} from "../firebase"

const Carrito = () => {

const {carrito, borrarDelCarrito, limpiarCarrito, isInCarrito} = useContexto()



console.log(carrito)

const finalizarCompra = () =>{
console.log("Guardar la compra en la db...")

const VentasCollection = collection(db,"ventas") // crear la bd en firebase con nombre ventas
addDoc(VentasCollection,{
    buyer: {
        name: "Juan",
        lastName:  "Perez",
        email: "nombre@nombre.com"
            },
    items: carrito,
    date: serverTimestamp(),
    total: 100,
            })

    .then((resultado)=>{

    console.log(resultado)
    limpiarCarrito()
    })
    }

return(

/* {carrito.map((dd)=>(
    
) )} */
<h3> Carrito </h3>

)
}

export default Carrito; 