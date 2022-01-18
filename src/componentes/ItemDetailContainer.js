import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ItemDetail from "./ItemDetail";
import { listadoProductos } from "./ItemListContainer";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const producto = listadoProductos;

const ItemDetailContainer = () => {

  const { id } = useParams();

  if (id) {
    console.log("Productos por categoria");
  } else {
    console.log("Todos los productos");
  }

  const [product, setProducto] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto.find((e) => e.id === id));
      }, 2000);
    });
    promise.then((producto) => {

      setProducto(producto);
    });
  }, []);

  return (
    <>
      <ItemDetail unidad={product} />
    </>
  );
};
export default ItemDetailContainer;
