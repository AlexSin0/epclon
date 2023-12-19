"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

export default function PaymentForm({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement) return null;

      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount }),
      });
      const data = await response.json();
      const clientSecret = data;

      const cardResponse = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (cardResponse.paymentIntent?.status === "succeeded") {
        alert("Payment Successful");
        cardElement.clear();
      } else {
        alert("Payment Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="p-2">
      <h1 className="text-black text-center mb-4">
        Payment {`${Number(amount).toFixed(2)}₴`}
      </h1>
      <CardElement />
      <button
        type="submit"
        className="bg-blue-500 text-white w-full mt-8 p-3 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
