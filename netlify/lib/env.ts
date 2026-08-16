export interface ContactEnv {
  readonly resendApiKey: string;
  readonly toEmail: string;
  readonly fromEmail: string;
}

export class MissingEnvError extends Error {
  constructor(name: string) {
    super(`Missing required environment variable: ${name}`);
    this.name = "MissingEnvError";
  }
}

/** Sender must sit on a domain verified in Resend, otherwise the API rejects it. */
const DEFAULT_FROM_EMAIL = "Portfolio <contact@amadouniang.dev>";
const DEFAULT_TO_EMAIL = "amadouniang2001@gmail.com";

/**
 * Read at request time rather than module scope so a missing key surfaces as a
 * handled 500 on one request instead of crashing the whole function bundle.
 */
export function readContactEnv(): ContactEnv {
  const resendApiKey = process.env.RESEND_API_KEY?.trim();

  if (!resendApiKey) {
    throw new MissingEnvError("RESEND_API_KEY");
  }

  return {
    resendApiKey,
    toEmail: process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO_EMAIL,
    fromEmail: process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM_EMAIL,
  };
}
