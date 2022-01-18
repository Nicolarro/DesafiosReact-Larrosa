import React from "react";
import Navbar from "./componentes/header/Navbar.js";
import ItemListContainer from "./componentes/ItemListContainer.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer.js";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomProvider, { Provider } from "./miContexto";
import Carrito from "./componentes/Carrito.js";
import Footer from "./componentes/footer/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

/* const Provider  */

/* necesito tener otro componenten aparte que tenga los estados del provider (el estado del valor del contexto) */

function App() {

  const links = [
    { href: "/", name: "HOME", id: 4 },
    { href: "/productos", name: "PRODUCTOS", id: 5 },
    { href: "/categoria/Standard", name: "STANDARD", id: 1 },
    { href: "/categoria/Premium", name: "PREMIUM", id: 2 },
    { href: "/carrito", name: "CARRITO", id: 3 },
  ];

  return (
    <CustomProvider>
      <BrowserRouter>
        <Navbar links={links} stock={0} initial={10} />
        <main>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Bienvenido!"} />}
            />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/categoria/:category"
              element={<ItemListContainer greeting={"Bienvenido!"} />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
