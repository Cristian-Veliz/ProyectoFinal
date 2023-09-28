import React from "react";
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom"; 
import styles from "./CheckoutForm.module.css"; 

const stripePromise = loadStripe("pk_test_51Nv1b0E7NpAu2QtkCPyu5g7LAMn5LtRe1xWFsSZYoOJ1GTH7BW79BfeuhUnkHUAisPMcmdk3VyLCUJZH3hTgLLfh00BTmlifL0");

const BuyCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory(); 

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

  return (
    <form className={styles["payment-form"]} onSubmit={handleSubmit}>
      <div className={styles["card-element"]}>
        <CardElement />
      </div>
      <button type="submit" className={styles["pay-button"]}>Pagar</button>
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


