import React from "react";
import trolley from "./assets/trolley.png";
import "./CardWidget.css";
import { Link } from "react-router-dom";

const CardWidget = ({ cantidadTotal }) => {
  return (
    <Link to="/cart" className="CartWidget">
      <img className="imgCarrito" src={trolley} alt="trolley" />
      {cantidadTotal > 0 && <span> {cantidadTotal} </span>}
    </Link>
  );
};

export default CardWidget;
