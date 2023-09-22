import React from "react";
import style from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  return (
    <div className={style.eliminar}>
      <h4> {item.nombre} </h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
}

export default CartItem;
