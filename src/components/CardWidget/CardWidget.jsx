import React from "react";
import trolley from "./assets/trolley.png";
import "./CardWidget.css";
import { Link } from "react-router-dom";



const CardWidget = ({ cantidadTotal }) => {
  console.log('Cantidad total es :', cantidadTotal)
  return (
    <Link to="/cart" className="CartWidget">
      <div className="cart-container">
        <img className="imgCarrito" src={trolley} alt="trolley" />
        {cantidadTotal >= 0 && <span className="contador">{cantidadTotal}</span>}
      </div>
    </Link>
  );
};

export default CardWidget;
