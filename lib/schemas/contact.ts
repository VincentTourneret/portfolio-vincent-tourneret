import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Le prénom est requis")
    .max(120, "Le prénom ne doit pas dépasser 120 caractères"),
  name: z
    .string()
    .trim()
    .min(1, "Le nom est requis")
    .max(120, "Le nom ne doit pas dépasser 120 caractères"),
  email: z
    .string()
    .trim()
    .min(1, "L’email est requis")
    .email("Adresse email invalide")
    .max(254, "L’email ne doit pas dépasser 254 caractères")
    .transform((s) => s.toLowerCase()),
  subject: z
    .string()
    .trim()
    .min(1, "Le sujet est requis")
    .max(200, "Le sujet ne doit pas dépasser 200 caractères"),
  message: z
    .string()
    .trim()
    .min(1, "Le message est requis")
    .max(10000, "Le message ne doit pas dépasser 10 000 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
