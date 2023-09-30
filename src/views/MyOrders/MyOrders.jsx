import React, { useState, useEffect } from 'react';
import style from './MyOrders.module.css'; // Importa el CSS Module
import { useSelector } from "react-redux";
import axios from "axios";

function MyOrders() {
  const email = useSelector((state) => state.email);
  const [latestOrder, setLatestOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/order/get/${email}`);
        const latestOrder = response.data[response.data.length - 1];
        setLatestOrder(latestOrder);
      } catch (error) {
        console.error('Error al obtener las órdenes:', error);
      }
    };

    fetchOrders();
  }, [email]);

  return (
    <div>
      <h1 className={style.title}>📦 Tus órdenes son las siguientes 📦:</h1>
      {latestOrder ? (
        <div key={latestOrder.ordenId} className={style.finalizar}>
          <br />
          <p className={style.orderId}>Orden ID: {latestOrder.ordenId}</p>
          <p className={style.orderId}>Fecha de Orden: {latestOrder.orderDate}</p>
          <p className={style.name}>Nombre de Titular: {`${latestOrder.nombre} ${latestOrder.apellido}`}</p>
          <p className={style.total}>Monto Total: U$S {latestOrder.total}</p>
          <p className={style.total}>Estatus de Orden: {latestOrder.status}</p>

          {latestOrder.Products.map((product) => (
            <div key={product.id} className={style.product}>
              <p>Nombre de Producto: {product.name}</p>
              <p>Categoría de Producto: {product.category}</p>
            </div>
            
          ))}
          <br />
        </div>
      ) : (
        <p>Cargando órden...</p>
      )}
    </div>
  );
}

export default MyOrders;



























// import React, { useState, useEffect } from 'react';
// import './MyOrders.module.css';
// import { useSelector } from "react-redux";
// import axios from "axios";

// function MyOrders() {
//   const email = useSelector((state) => state.email);
//   const [orders, setOrders] = useState(null);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/order/get/${email}`);
//         setOrders(response.data);
//       } catch (error) {
//         console.error('Error al obtener las órdenes:', error);
//       }
//     };

//     fetchOrders();
//   }, [email]);

//   return (
//     <div>
//       <h1>Mis Órdenes son:</h1>
//       {orders ? (
//         orders.map((order) => (
//           <div key={order.ordenId}>
//             <p>Orden ID: {order.ordenId}</p>
//             <p>Nombre: {order.nombre}</p>
//             <p>Total: {order.total}</p>
//             {order.Products.map((product) => (
//               <div key={product.id}>
//                 <p>Nombre del Producto: {product.name}</p>
//                 <p>Categoría: {product.category}</p>
//               </div>
//             ))}
//           </div>
//         ))
//       ) : (
//         <p>Cargando órdenes...</p>
//       )}
//     </div>
//   );
// }

// export default MyOrders;













































// import React, { useState, useEffect } from 'react';
// import './MyOrders.module.css';
// import { useSelector } from "react-redux";
// import axios from "axios";

// function MyOrders() {
//   const email = useSelector((state) => state.email);
//   const [orders, setOrders] = useState(null); // Inicializar con null para indicar que los datos no están cargados aún

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/order/get/${email}`);
//         setOrders(response.data); // Guardar los datos en el estado
//       } catch (error) {
//         console.error('Error al obtener las órdenes:', error);
//       }
//     };

//     fetchOrders();
//   }, [email]);
//   console.log(orders);

//   return (
//     <div>
//       <h1>Mis Ordenes son :</h1>
//       {/* Verificar si orders está definido antes de intentar acceder a sus propiedades */}
//       {orders ? (
//         <div>
//           <p>{orders.ordenId}</p>
//           <p>{orders.status}</p>
//         </div>
//       ) : (
//         <p>Cargando órdenes...</p>
//       )}
//     </div>
//   );
// }



// export default MyOrders;

















// import './MyOrders.module.css';
// import { useSelector } from "react-redux";
// function MyOrders() {
//   const email = useSelector((state)=>state.email)
//    // const URL=`http://localhost:3001/order/get/${email}`
//   // const {data} =  axios(URL)
//   return (
//     <div>
//       <h1>Mis Ordenes son :</h1>
//     </div>
//   );
// }

// export default MyOrders;


/*
import './MyOrders.module.css';
import { useSelector } from "react-redux";
import axios from "axios";

async function MyOrders() {
  const email = useSelector((state)=>state.email)

  // const URL=`http://localhost:3001/order/get/${email}`
  // const {data} = await axios(URL)


  // const objeto ={
  //   estado: data.status
  // }
 
  return (
    <div>
      <h1>Mis Ordenes son :</h1>
      <p>hola</p>
    </div>
  );
}

export default MyOrders;



*/