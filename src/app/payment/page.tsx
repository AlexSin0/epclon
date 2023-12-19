"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "@/components/PaymentForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Home() {
  return (
    <main className="h-screen bg-gray-200 pt-[10%]">
      <div className="bg-gray-100 block max-w-[300px] m-auto p-5 rounded-sm">
        <Elements stripe={stripePromise}>
          <PaymentForm amount={777} />
        </Elements>
      </div>
    </main>
  );
}
