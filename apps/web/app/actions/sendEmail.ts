// app/actions/sendEmail.ts
"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmail(data: z.infer<typeof schema>) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, message } = parsed.data;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your gmail
        pass: process.env.GMAIL_APP_PASSWORD, // app password
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: "maviasajjad78@gmail.com",
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Email sending failed",
    };
  }
}