import  React from "react";
import { useContexto } from "../miContexto";


const Carrito = () => {

const {borrarDelCarrito, limpiarCarrito, isInCarrito} = useContexto()

const carrito = useContexto()

console.log(carrito)


return(

/* {carrito.map((dd)=>(
    
) )} */
<h3> Carrito </h3>

)
}

export default Carrito; 