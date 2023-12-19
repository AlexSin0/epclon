"use server";

import { cookies } from "next/headers";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PW,
  },
});

export async function Purchase(email: string) {
  cookies().delete("basket");
  console.log("Successful purchase by " + email);

  // TODO: Delete from DB

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
