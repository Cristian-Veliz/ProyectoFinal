import React, { useState, useEffect } from 'react';

const MyOrders = () => {
  // Estado local para almacenar los pedidos del usuario
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Es una Simulación de carga de pedidos desde localStorage
    const ordersData = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(ordersData);
  }, []);

  return (
    <div>
      <h2>Mis Pedidos Pendientes</h2>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            <h3>Pedido #{order.id}</h3>
            <p>Estado: {order.status}</p>
            <p>Total: U$S {order.total}</p>
            <ul>
              {order.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.nombre} - Cantidad: {item.cantidad}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
