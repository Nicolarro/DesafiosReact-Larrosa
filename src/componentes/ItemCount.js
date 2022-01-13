import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  let [contador, setContador] = useState(initial);

  const [lista, setLista] = useState([]);

  const alerta = () => {
    toast("Producto agregado al carrito");
  };

  const sumar = () => {
    if (contador > stock) {
      toast("No hay mas stock");
    } else {
      setContador(contador + 1);
      console.log(contador);
      setLista();
    }
  };

  const restar = () => {
    if (contador < 1) {
      toast("La cantidad a comprar no puede ser 0");
    } else {
      setContador(contador - 1);
    }
  };

  const resetear = () => {
    setContador(1);
    setLista();
  };

  const agregarProducto = () => {
    console.log(contador);
    onAdd(contador, stock);
    setContador(initial);
    alerta();
  };

  return (
    <>
      <p>CANTIDAD:{contador}</p>
      <button onClick={sumar}> SUMAR</button>
      <ToastContainer />
      <button onClick={restar}> RESTAR</button>
      <ToastContainer />
      <button onClick={resetear}> RESETEAR</button>
      <Link to={`/carrito`}>
        <button onClick={agregarProducto}> AGREGAR AL CARRITO</button>
      </Link>
      <br />
    </>
  );
};

export default ItemCount;
