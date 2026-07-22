import { sendMail, sender } from "@/lib/mailer";
import { templates } from "@/lib/templates/emailTemplates";
import { EmailTemplate, FormType } from "@/lib/types/form.types";
import { NextRequest, NextResponse } from "next/server";
export {templates} from "@/lib/templates/emailTemplates";

const defaultRecipient = process.env.EMAIL_TO ?? "maviasajjadabbasi@gmail.com";

// ─── Templates ───────────────────────────────────────────────────────────────



// ─── Route Handler ────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = (await req.json()) as { formType: FormType } & Record<
      string,
      unknown
    >;

    const { formType, ...data } = body;

    if (!formType || !(formType in templates)) {
      return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
    }

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
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
