import React, { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { cart, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [nota, setNota] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los campos del email no coinciden");
      return;
    }

    // Validar que el teléfono sea mayor o igual a cero
    if (telefono < 0) {
      setError("El número de teléfono no puede ser negativo");
      return;
    }

    const orden = {
      items: cart.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: cart.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
      direccion,
      nota,
    };

    // Almacenar la orden de compra en localStorage en formato JSON
    localStorage.setItem("ordenDeCompra", JSON.stringify(orden));

    setError(""); // Borra el mensaje de error
    const ordenIdAleatorio = Math.floor(Math.random() * 10000) + 1;
    setOrdenId(String(ordenIdAleatorio)); // Simulación de un ID de orden

    // Vaciar el carrito después de guardar la orden
    vaciarCarrito();

    // Limpiar los inputs
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfirmacion("");
    setDireccion("");
    setNota("");
  };

  return (
    <div className={styles.formulario}>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {cart.map((producto, index) => (
          <div key={index} className={styles.descripcion}>
            <p>
              {producto.item.name}: {producto.cantidad}  unidades
            </p>
            <p style={{ color: "red" }}>Precio Final: U$S {producto.item.price}</p>
          </div>
        ))}
        <hr />

        <div className={styles.formGroup}>
          <label htmlFor="nombre">Nombre</label>
          
          <input
            type="text"
            id="nombre"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            placeholder="Ingrese su apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>

        <div className={styles.telefono}>
          <label htmlFor="telefono">Teléfono</label>
          <input className={styles.telefono}
            type="number"
            id="telefono"
            placeholder="Ingrese su número de contacto"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            min="0"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="emailConfirmacion">Confirmar Email</label>
          <input
            type="email"
            id="emailConfirmacion"
            placeholder="Confirme su correo electrónico"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            placeholder="Ingrese su Dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="nota">Nota</label>
          <textarea
            id="nota"
            placeholder="Ingrese un recordatorio si lo desea"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" className={styles.finalizar}>
          Pagar Ahora
        </button>
      </form>
      <hr />
      <div className={styles.orden}>
        {ordenId && (
          <div className={styles.orderId}>
            ¡Gracias por tu compra!✅ Tu número de Orden es: #{ordenId}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;



