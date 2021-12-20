
import React from "react";
import Navbar from "./componentes/header/Navbar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
/* import Footer from "./componentes/footer/Footer.js" */
/* import { useState } from 'react' */
/* import { BrowserRouter, Routes, Route  as Router, Route } from "react-router-dom"; */
import 'bootstrap/dist/css/bootstrap.min.css';




function App () {

  
    const links= [
        {href:"/index", name:"home",id:1}, 
        {href:"/productos", name:"Productos",id:2}, 
        {href:"/categoria", name:"Categoria",id:3}, 
        {href:"/carrito", name:"Carrito",id:4} 
    ]

    return (
        <>
{/*  <BrowserRouter> */}
            <Navbar links = {links} stock = {0} initial = {10}/>
{/*           <Routes>  */}
{/*             <Route path= "/home" element={<ItemListContainer greeting={"Bienvenido!"} />}/> 
                <Route path= "/productos" element={<ItemDetailContainer />}/> 
                 <Route path= "/carrito" element={<Carrito />}/> 
                 <Route path= "/categoria/:id" element={<ItemListContainer greeting={"Bienvenido!"} />  */}

       <main>ECOMMERCE CAFE</main> 
{/*          </Routes>  */}
          <ItemListContainer greeting= "Bienvenido a Tienda Cafe"/>
{/*            <Footer/>  */}
{/*     </BrowserRouter>  */}
        </>
)
}

export default App; 
