import  React from "react";
import { useContexto } from "../miContexto";


const Carrito = () => {

const {carrito, borrarDelCarrito, limpiarCarrito, isInCarrito} = useContexto()

console.log(carrito)


return(


<h3> Carrito </h3>

)
}

export default Carrito; 