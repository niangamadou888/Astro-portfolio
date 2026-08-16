import type { Context } from "@netlify/functions";
import { contactSchema, type ContactMessage } from "../../src/lib/contact-schema";
import { MissingEnvError, readContactEnv } from "../lib/env";
import { buildHtmlBody, buildSubject, buildTextBody } from "../lib/email-template";
import { ResendError, sendEmail } from "../lib/resend";

const json = (body: unknown, status: number): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

/** Bots get the same shape a real submission gets, so failure teaches them nothing. */
const ACCEPTED = { ok: true } as const;

export default async (req: Request, context: Context): Promise<Response> => {
  if (req.method !== "POST") {
    return json({ ok: false, error: "Method not allowed" }, 405);
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return json({ ok: false, error: "Request body must be valid JSON" }, 400);
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return json(
      {
        ok: false,
        error: "Some fields need fixing",
        fields: parsed.error.flatten().fieldErrors,
      },
      400,
    );
  }

  const { website, ...contact } = parsed.data;
  if (website) {
    console.warn("Contact form honeypot triggered", { ip: context.ip });
    return json(ACCEPTED, 202);
  }

  try {
    const env = readContactEnv();
    const message: ContactMessage = contact;

    const id = await sendEmail(env.resendApiKey, {
      from: env.fromEmail,
      to: env.toEmail,
      subject: buildSubject(message),
      html: buildHtmlBody(message),
      text: buildTextBody(message),
      replyTo: message.email,
    });

    console.log("Contact email sent", { id, from: message.email });
    return json(ACCEPTED, 200);
  } catch (error: unknown) {
    // Detailed cause stays in the Netlify log; the visitor gets a safe message.
    if (error instanceof MissingEnvError) {
      console.error("Contact form is not configured:", error.message);
    } else if (error instanceof ResendError) {
      console.error("Resend rejected the email:", error.status, error.message);
    } else {
      console.error("Unexpected contact form failure:", error);
    }

    return json(
      { ok: false, error: "Could not send your message right now. Please email me directly." },
      500,
    );
  }
};
