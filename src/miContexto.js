import {createContext, useContext} from "react";
import{useState} from "react";


const contexto = createContext({cantidad : 5 , carrito  :[]})


export const {Provider} =  contexto

export const useContexto = () => {

    return useContext(contexto)
    
    }


const CustomProvider = (children) => {


const [precio_total, setPrecioTotal] = useState(0)

const [cantidad,setCantidad] = useState(0) // numero que va en el widget
const [carrito,setCarrito] = useState([]) // array para el la vista del carrito

/* aparte debo tener una funcion que ejecute desde el item detail. Me va a actualiza las funciones que tenga aca, y estas actualizar los compententes  que le haya paasado el contexto */



const agregarAlCarrito = (cantidad,title) => { 

    if (isInCarrito()) {

    }
    else{

    }
}

    console.log("Soy el provider") // todo lo que modifique el carrito teine que estar dentro de la funcion agregarAlCarrito
/* 
    const copia_producto = {...producto}
    copia_producto.cantidad = cantidad */

/* item detail tiene que tener este contexto, tengo que consumir el contexto ahi */



const borrarDelCarrito = (id) => {

    /* se pide que les pasen un id, busque en el array, encuentre por id y se lo saque */
    //const nuevo_carrito = ?
    //setCarrito(estadoArray.filter())
    //setCarrito(estadoArray.map())
}

const limpiarCarrito = () => {  
    setCarrito([])  }


const isInCarrito = (id) => {
    return carrito.find(producto=> producto.id === id)
/* significa que si agregue un producto al carrito, 
y luego voy al producto y quiero agregar el mismo, 
solo se pushea la cantidad, no el mismo articulo, 
a menos que sea otro diferente */

    //return true ? false
}


    const valorDelContexto = {
        cantidad, 
        carrito , 
        agregarAlCarrito , 
        borrarDelCarrito ,
        limpiarCarrito
    }

return(
    <Provider value={valorDelContexto}>
    {children}
</Provider>
)

}

export default CustomProvider;



