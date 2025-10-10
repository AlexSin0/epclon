"use server";

import nodemailer from "nodemailer";
import { BasketItemsDecrement } from "./Catalog";

const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
const GMAIL_PW = process.env.GMAIL_PW;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: GMAIL_PW,
  },
});

export async function Purchase(email: string) {
  console.log("Successful purchase by " + email);

  await BasketItemsDecrement();

  if (!GMAIL_EMAIL || !GMAIL_PW) {
    console.log("No email credentials detected. Email wasn't sent. ");
    return;
  }

  transporter.sendMail(
    {
      from: {
        name: "Epclon",
        address: "epclon@gmail.com",
      },
      to: email,
      subject: "Successful purchase",
      text: "You have successfully purchased items from our store.",
    },
    function (error: any, info: any) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    }
  );
}
