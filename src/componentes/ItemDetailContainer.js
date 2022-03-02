import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ItemDetail from "./ItemDetail";
import { listadoProductos } from "./ItemListContainer";
import {db} from "../firebase";
import {collection, getDoc, doc} from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

const producto = listadoProductos;

console.log(producto)

const ItemDetailContainer = () => {

  const { id } = useParams();

/*   const prodCollection = collection(db,"producto")
  const refDoc = doc(prodCollection,id) */

  let [product, setProducto] = useState(null)

 

  
  useEffect(() => {
    const prodCollecion = collection(db, "productos")
    const refDoc = doc(prodCollecion, id)

    getDoc(refDoc)
      .then((resultado) => {
          setProducto(resultado.data())
      })
      .catch((error) =>{
        console.log(error);
      })
    }, [id]);


 /*  if (id) {
    console.log("Productos por categoria");
  } else {
    console.log("Todos los productos");
  }
 */
  

/*   useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
      
        resolve(producto.find((e) => e.id === id),
        );
        
      }, 2000);
    });
    promise.then((producto) => {

      setProducto(producto);

      console.log(producto)
    });
  }, []); */






  return (
    <>
      <ItemDetail unidad={product} />
    </>
  );
};


export default ItemDetailContainer;
