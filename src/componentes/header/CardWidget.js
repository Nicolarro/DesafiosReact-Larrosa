import React from "react";
import { useContexto } from "../../miContexto";
import 'bootstrap/dist/css/bootstrap.min.css'

const CardWidget = () => {

    const {cantidad} = useContexto()

    console.log(cantidad)

return(
    <>
    <span className="material-icons estiloCarrito">
    shopping_cart
    </span>
    {cantidad}
    </>
)
}

export default CardWidget;

 