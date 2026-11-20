import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";

const BRAND_NAME = "Hassaan Travel";
const BUSINESS_INBOX = "info@hassaantravel.nl";
const DEFAULT_SMTP_PORT = 587;

/** Treats missing and empty/whitespace-only env values the same way. */
function clean(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

const smtpHost = clean(process.env.SMTP_HOST);

const parsedPort = Number(clean(process.env.SMTP_PORT) ?? DEFAULT_SMTP_PORT);
const smtpPort =
  Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : DEFAULT_SMTP_PORT;

const smtpSecureSetting = clean(process.env.SMTP_SECURE);
const smtpSecure =
  smtpSecureSetting != null ? smtpSecureSetting === "true" : smtpPort === 465;

const smtpUser = clean(process.env.SMTP_USER);
const smtpPass = clean(process.env.SMTP_PASS);

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
    clean(process.env.EMAIL_FROM_ADDRESS) ??
    clean(process.env.EMAIL_FROM) ??
    smtpUser ??
    BUSINESS_INBOX,
  name: clean(process.env.EMAIL_FROM_NAME) ?? BRAND_NAME,
};

export async function sendMail(options: SendMailOptions) {
  const transporter = createTransporter();
  return transporter.sendMail(options);
}