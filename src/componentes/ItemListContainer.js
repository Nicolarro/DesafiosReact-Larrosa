import { useState, useEffect } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import ItemList from "./ItemList.js";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const listadoProductos = [
  {
    id: 1,
    title: "seleccion",
    category: "Standard",
    stock: 20,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.",
    price: 400,
    pictureUrl: "https://i.ibb.co/Qf0MtJc/Foto-Cafe-Seleccion.jpg",
  },
  {
    id: 2,
    title: "superior",
    category: "Premium",
    stock: 15,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.",
    price: 300,
    pictureUrl: "https://i.ibb.co/GP7C8dr/Foto-Superior.jpg",
  },
  {
    id: 3,
    title: "intenso",
    category: "Premium",
    stock: 20,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.",
    price: 350,
    pictureUrl: "https://i.ibb.co/nPN102r/Foto-Cafe-Intenso.png",
  },
  {
    id: 4,
    title: "suave",
    category: "Standard",
    stock: 15,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.",
    price: 300,
    pictureUrl: "https://i.ibb.co/1nPjVMH/Foto-Sensaciones-Suave.png",
  },
  {
    id: 5,
    title: "noir",
    category: "Standard",
    stock: 20,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam qui eaque beatae necessitatibus vitae quo placeat ad consectetur aut veniam provident minus aliquid magnam fugiat error dolor quaerat, nihil quia.",
    price: 500,
    pictureUrl: "https://i.ibb.co/Hh8wZFD/Foto-Cafe-Noir.jpg",
  },
];

const ItemListContainer = (props) => {
  const { category } = useParams();

  console.log("se ejecuto de nuevo");

  const [lista, setLista] = useState([listadoProductos]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(listadoProductos);
        }, 2000);
      });
      promise
        .then((productos) => {
          setLista(productos);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 2000);
  }, [category]);

  console.log(lista);



  if (loading & (lista.length) > 0) {
    return (

        <h3>Cargando...</h3>
    
        )
} else {
    return (
      <>
      <h2> {props.greeting} </h2>

      <ToastContainer />
      <ItemList listado={lista} />
    </>

    )
}
}



export default ItemListContainer;
