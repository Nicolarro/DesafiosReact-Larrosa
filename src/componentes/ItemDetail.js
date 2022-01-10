import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useContexto, Provider } from "../miContexto";

export const ItemDetail = (props) => {
  const [estado, setEstado] = useState(true);

  useContexto();

  function onAdd(stock) {
    console.log("Agregado al carrito");
    setEstado(false);
    /*         agregaralCarrito(cantidad,producto */ //agregar en el desafio de contexto
  }

  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(props.unidad);
  }, [props]);

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
  );
};
export default ItemDetail;

/* esta data tambien hay que pasarsela al carrito, y al componente de cardwiget, 
esto hay que hacerlo con context 
 */
