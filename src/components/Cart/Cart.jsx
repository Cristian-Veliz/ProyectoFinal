import React, { useContext } from "react";
import style from "./Cart.module.css";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, vaciarCarrito, total, cantidadTotal, eliminarProducto } = useContext(CartContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No hay Productos en el Carrito</h2>
        <Link to="/home" className={style.finalizar}>
          Productos
        </Link>
      </>
    );
  }

  // Función para eliminar un producto del carrito
  const handleEliminarProducto = (id) => {
    eliminarProducto(id);
  };

  // Función para vaciar el carrito
  const handleVaciarCarrito = () => {
    vaciarCarrito();
  };

  return (
    <div>
      <div className={style.eliminar}>
        {cart.map((producto, index) => (
          <CartItem
            key={index}
            {...producto}
            onEliminarProducto={handleEliminarProducto}
          />
        ))}
      </div>
      <div className={style.medio}>
        <h3>Cantidad Total de Orden: {cantidadTotal} </h3>
        <h3 className={style.precio}>Total: U$S {total.toFixed(2)} </h3>
        <button className={style.finalizar2} onClick={handleVaciarCarrito}>
          DELETE CART
        </button>
      </div>
      <hr />
      <div>
        <Link to="/checkout" className={style.finalizar}>
          CONTINUE TO CHECKOUT
        </Link>
      </div>
    </div>
  );
};

export default Cart;

