import React, { useState, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//import { CartContext } from "../Context/CartContext";
//import styles from "./Checkout.module.css";
import {Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const StripePromise = loadStripe('pk_test_Dt4ZBItXSZT1EzmOd8yCxonL');

const CheckoutForm = () =>{

const stripe = useStripe();
const elements = useElements();    

const handleSubmit = async (e) =>{
    e.preventDefault();

   const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)


    })

}

return (
    <form onSubmit={handleSubmit}>
        <CardElement/>
        <button>
            BUY
        </button>

    </form>
)
} 

export default CheckoutForm;