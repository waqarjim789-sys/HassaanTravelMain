import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 587);
const smtpSecure =
  process.env.SMTP_SECURE != null
    ? process.env.SMTP_SECURE === "true"
    : smtpPort === 465;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

function createTransporter() {
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error(
      "Missing SMTP configuration. Set SMTP_HOST, SMTP_USER, and SMTP_PASS."
    );
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

export const sender = {
  email:
    process.env.EMAIL_FROM_ADDRESS ?? process.env.EMAIL_FROM ?? smtpUser ??
    "no-reply@example.com",
  name: process.env.EMAIL_FROM_NAME ?? "My Travel App",
};

export async function sendMail(options: SendMailOptions) {
  const transporter = createTransporter();
  return transporter.sendMail(options);
}
