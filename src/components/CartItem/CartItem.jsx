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
      <div className={style.alineado}>
        <div>
          <p><strong>Cantidad de producto:</strong> {cantidad}</p>
        </div>
        <div>
          <p><strong>Precio por unidad:</strong> U$S {item.price}</p>
        </div>
      </div>
      <button className={style.delete} onClick={handleEliminarProducto}>
        <p>❌</p>
      </button>
    </div>
  );
};

export default CartItem;
