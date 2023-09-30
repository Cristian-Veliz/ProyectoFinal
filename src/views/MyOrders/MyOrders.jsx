import React, { useState, useEffect } from 'react';
import './MyOrders.module.css';
import { useSelector } from "react-redux";
import axios from "axios";

function MyOrders() {
  const email = useSelector((state) => state.email);
  const [latestOrder, setLatestOrder] = useState(null); // Almacena solo la última orden

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/order/get/${email}`);
        const latestOrder = response.data[response.data.length - 1]; // Obtén la última orden del array
        setLatestOrder(latestOrder); // Almacena la última orden en el estado
      } catch (error) {
        console.error('Error al obtener las órdenes:', error);
      }
    };

    fetchOrders();
  }, [email]);

  return (
    <div>
      <h1>Mi Última Orden:</h1>
      {latestOrder ? (
        <div key={latestOrder.ordenId}>
          <p>Orden ID: {latestOrder.ordenId}</p>
          <p>Nombre: {latestOrder.nombre}</p>
          <p>Total: {latestOrder.total}</p>
          {latestOrder.Products.map((product) => (
            <div key={product.id}>
              <p>Nombre del Producto: {product.name}</p>
              <p>Categoría: {product.category}</p>
            </div>
          ))}
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