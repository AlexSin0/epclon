import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
  apiVersion: "2023-10-16",
});

export async function POST(req: NextRequest) {
  const json = await req.json();
  const { amount } = json;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "UAH",
    });

    return new NextResponse(JSON.stringify(paymentIntent.client_secret), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}
