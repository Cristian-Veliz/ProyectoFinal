import React, { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const addItem = (item, cantidad) => {
    const productoExistente = cart.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCart((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.price * cantidad);
    } else {
      const carritoActualizado = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.price * cantidad);
    }
  };

  const eliminarProducto = (id) => {
    const productoEliminado = cart.find((prod) => prod.item.id === id);
    const carritoActualizado = cart.filter((prod) => prod.item.id !== id);
    setCart(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev - productoEliminado.item.price * productoEliminado.cantidad
    );
  };

  const vaciarCarrito = () => {
    setCart([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  console.log("CarritoProvider - cart:", cart);
  console.log("CarritoProvider - cantidadTotal:", cantidadTotal);
  console.log("CarritoProvider - total:", total);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        eliminarProducto,
        vaciarCarrito,
        total,
        cantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
