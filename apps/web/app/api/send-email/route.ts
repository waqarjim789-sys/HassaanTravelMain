import { sendMail, sender } from "@/lib/mailer";
import { templates } from "@/lib/templates/emailTemplates";
import { EmailTemplate, FormType } from "@/lib/types/form.types";
import { NextRequest, NextResponse } from "next/server";
export { templates } from "@/lib/templates/emailTemplates";

/**
 * All website form emails go to the business inbox.
 * EMAIL_TO (Vercel env) overrides it; an empty value also falls back.
 */
const BUSINESS_INBOX = "info@hassaantravel.nl";
const defaultRecipient = process.env.EMAIL_TO?.trim() || BUSINESS_INBOX;

/** Only real template keys — not inherited names such as "toString". */
function isFormType(value: unknown): value is FormType {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(templates, value)
  );
}

// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  let body: unknown;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { formType, ...data } = body as { formType?: unknown } & Record<
    string,
    unknown
  >;

  if (!isFormType(formType)) {
    return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
  }

  try {
    const templateFn = templates[formType] as unknown as (
      data: Record<string, unknown>,
    ) => EmailTemplate;
    const { subject, text, html } = templateFn(data);

    await sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: defaultRecipient,
      subject,
      text,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[send-email] Sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}