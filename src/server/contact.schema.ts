import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  business: z.string().trim().optional().default(""),
  phone: z.string().trim().min(1, "Phone number is required"),
  email: z.string().trim().optional().default(""),
  message: z.string().trim().optional().default(""),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormResult = {
  success: boolean;
  message: string;
};
