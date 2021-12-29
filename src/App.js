
import React from "react";
import Navbar from "./componentes/header/Navbar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer.js";
import CardWidget from "./componentes/header/CardWidget.js";
/* import Footer from "./componentes/footer/Footer.js" */
/* import { useState } from 'react' */
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App () {

  
    const links= [
        {href:"/index", name:"HOME",id:1}, 
        {href:"/productos", name:"PRODUCTOS",id:2}, 
        {href:"/categoria", name:"CATEGORIA",id:3}, 
        {href:"/carrito", name:"CARRITO",id:4} 
    ]

    return (
 
  <BrowserRouter>
            <Navbar links = {links} stock = {0} initial = {10}/>
          <Routes> 
            <Route path= "/index" element={<ItemListContainer greeting={"Bienvenido!"} />}/> 
            <Route path = "/carrito" element = {<CardWidget/>}/>
            <Route path= "/categoria/:id" element = {<ItemListContainer greeting={"Bienvenido!"}/>}/>
            <Route path= "/item/:id" element ={ <ItemDetailContainer />}/>
         </Routes> 
</BrowserRouter> 

)
}

export default App; 
