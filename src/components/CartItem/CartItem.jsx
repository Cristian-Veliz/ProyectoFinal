import React, { useContext } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../Context/CartContext";
import Swal from "sweetalert2"; 


const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext);

  // Función para manejar la eliminación del producto 
  const handleEliminarProducto = () => {
    eliminarProducto(item.id);

    // Muestra la alerta de éxito
    Swal.fire({
      icon: "success",
      text: "Producto eliminado del carrito",
    });
  };

  return (
    <div>
      <h4> {item.name} </h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: U$S {item.price}</p>
      <button onClick={handleEliminarProducto}>Eliminar</button>
    </div>
  );
};

export default CartItem;
