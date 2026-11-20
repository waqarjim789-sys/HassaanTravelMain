// app/actions/sendEmail.ts
"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

/** Business inbox. EMAIL_TO (env) overrides it when set. */
const DEFAULT_RECIPIENT = "info@hassaantravel.nl";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

/** Customer input must never be inserted into the email HTML unescaped. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendEmail(data: z.infer<typeof schema>) {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data" };
  }

  const { name, email, message } = parsed.data;

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.error("[sendEmail] GMAIL_USER / GMAIL_APP_PASSWORD are not configured.");
    return { success: false, error: "Email service is not configured" };
  }

  const recipient = process.env.EMAIL_TO?.trim() || DEFAULT_RECIPIENT;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    });

    await transporter.sendMail({
      from: `"Hassaan Travel Website" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      // Line breaks are not allowed in a subject line.
      subject: `New message from ${name.replace(/[\r\n]+/g, " ")}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return { success: true };
  } catch (error: unknown) {
    // Log the technical details on the server; never show them to visitors.
    console.error(
      "[sendEmail] Sending failed:",
      error instanceof Error ? error.message : error
    );

    return { success: false, error: "Email sending failed" };
  }
}