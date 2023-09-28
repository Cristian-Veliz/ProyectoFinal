import React, { useState } from "react";
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom"; 
import styles from "./CheckoutForm.module.css"; 
//require('dotenv').config();
//const{CLAVE_PUBLICA_STRIPE}=process.env;

const stripePromise = loadStripe('pk_test_51Nv1b0E7NpAu2QtkCPyu5g7LAMn5LtRe1xWFsSZYoOJ1GTH7BW79BfeuhUnkHUAisPMcmdk3VyLCUJZH3hTgLLfh00BTmlifL0');

const BuyCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory(); 

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPaymentDisabled, setIsPaymentDisabled] = useState(true); // Inicialmente deshabilitado

  const handleNameChange = (e) => {
    setName(e.target.value);
    updatePaymentButtonStatus(e.target.value, lastName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    updatePaymentButtonStatus(name, e.target.value);
  };

  const updatePaymentButtonStatus = (inputName, inputLastName) => {
    // Habilitar el botón de pago solo si se completa el nombre y el apellido
    setIsPaymentDisabled(!(inputName && inputLastName));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);

      // Mostrar un mensaje de error al usuario utilizando Swal.fire
      Swal.fire({
        icon: 'error',
        title: 'Error en el pago',
        text: 'Hubo un problema al procesar tu pago. Por favor, verifica la información de tu tarjeta e intenta nuevamente.',
      });
    } else {
      // Procesar el pago exitoso y mostrar una notificación SweetAlert
      console.log(paymentMethod);
      Swal.fire({
        icon: 'success',
        title: 'Pago exitoso',
        text: '¡Tu pago se ha procesado con éxito!',
        
      });

      // Agregar un retraso antes de redirigir 
      setTimeout(() => {
        console.log('Pago exitoso'); 
        
        history.push('/orders'); // Redirige al usuario a la página de órdenes
      }, 3000); // Retraso de 3 segundos 
    }
  };

  const handleClearFields = () => {
    setName("");
    setLastName("");
    elements.getElement(CardElement).clear(); // Limpiar los campos de la tarjeta
    setIsPaymentDisabled(true); // Deshabilitar el botón de pago
  };

  return (
    <form className={styles["payment-form"]} onSubmit={handleSubmit}>
      <div className={styles["input-container"]}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <div className={styles["card-element"]}>
        <CardElement />
      </div>
      <div className={styles["button-container"]}>
        <button type="submit" className={styles["pay-button"]} disabled={isPaymentDisabled}>Pagar</button>
        <button type="button" onClick={handleClearFields} className={styles["clear-button"]}>Limpiar Campos</button>
      </div>
    </form>
  );
};

const CheckoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <BuyCheckoutForm />
    </Elements>
  );
};

export default CheckoutForm;

