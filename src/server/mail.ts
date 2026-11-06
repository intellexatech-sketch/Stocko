import { createServerFn } from "@tanstack/react-start";
import { contactSchema, type ContactFormResult } from "./contact.schema";

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return contactSchema.parse(data);
  })
  .handler(async ({ data }): Promise<ContactFormResult> => {
    const { handleSendContactEmail } = await import("./nodemailer.server");
    return handleSendContactEmail(data);
  });
