import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContexto, Provider } from "../miContexto";

export const ItemDetail = (props) => {
  const [estado, setEstado] = useState(true);
  const [item, setItem] = useState([]);

  const { agregarAlCarrito } = useContexto();

  console.log(agregarAlCarrito);

  function onAdd(producto, cantidad) {
    console.log("Agregado al carrito");
    setEstado(false);
    agregarAlCarrito(cantidad, producto);
  }

  useEffect(() => {
    setItem(props.unidad);
  }, [props])

  console.log(item.pictureUrl)

  return (
    
    <div>
      <img alt="logo" src={item.pictureUrl} />
      <h3>Nombre: {item.title}</h3>
      <h3>Descripción: {item.description}</h3>
      <h3>Precio: ${item.price}</h3>
      <br />
      <br />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail;

/* esta data tambien hay que pasarsela al carrito, y al componente de cardwiget, 
esto hay que hacerlo con context 
 */
