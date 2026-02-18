"use client";

import { useState, useCallback } from "react";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";
import type { z } from "zod";

type FormStatus = "idle" | "submitting" | "success" | "error";

const initialFormState: ContactFormData = {
  firstName: "",
  name: "",
  email: "",
  subject: "",
  message: "",
};

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(initialFormState);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      if (status === "error") {
        setStatus("idle");
        setErrorMessage("");
      }
      if (fieldErrors[name as keyof ContactFormData]) {
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next[name as keyof ContactFormData];
          return next;
        });
      }
    },
    [status, fieldErrors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (status === "submitting") return;

      setFieldErrors({});
      setErrorMessage("");

      const parsed = contactFormSchema.safeParse(form);

      if (!parsed.success) {
        const errors: FieldErrors = {};
        const zodErrors = parsed.error as z.ZodError<ContactFormData>;
        zodErrors.issues.forEach((err) => {
          const path = err.path[0] as keyof ContactFormData;
          if (path && !errors[path]) {
            errors[path] = err.message;
          }
        });
        setFieldErrors(errors);
        setStatus("error");
        setErrorMessage("Veuillez corriger les champs indiqués.");
        return;
      }

      setStatus("submitting");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        });

        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
          success?: boolean;
        };

        if (!res.ok) {
          setStatus("error");
          setErrorMessage(data?.error ?? "Une erreur est survenue.");
          return;
        }

        setStatus("success");
        setForm(initialFormState);
      } catch {
        setStatus("error");
        setErrorMessage("Impossible d'envoyer le message. Réessayez plus tard.");
      }
    },
    [form, status]
  );

  const isDisabled = status === "submitting";
  const hasFieldErrors = Object.keys(fieldErrors).length > 0;

  const inputBaseClass =
    "w-full rounded-xl border bg-brand-surface/80 px-4 py-3 text-brand-light placeholder:text-brand-light/40 focus:outline-none focus:ring-2 focus:ring-brand-accent/30 disabled:opacity-60";
  const inputErrorClass = "border-red-500/60 focus:border-red-500 focus:ring-red-500/30";
  const inputOkClass = "border-brand-light/20 focus:border-brand-accent";

  const getInputClass = (field: keyof ContactFormData): string =>
    `${inputBaseClass} ${fieldErrors[field] ? inputErrorClass : inputOkClass}`;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
      aria-describedby={
        status === "error" ? "contact-error" : status === "success" ? "contact-success" : undefined
      }
    >
      {status === "success" && (
        <div
          id="contact-success"
          role="alert"
          className="rounded-xl border border-brand-accent/40 bg-brand-accent/10 px-4 py-3 text-brand-light-contrast"
        >
          Message envoyé. Je vous répondrai dès que possible.
        </div>
      )}

      {(status === "error" && (errorMessage || hasFieldErrors)) && (
        <div
          id="contact-error"
          role="alert"
          className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-red-200"
        >
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-brand-light/90">
            Prénom
          </span>
          <input
            type="text"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            maxLength={120}
            autoComplete="given-name"
            disabled={isDisabled}
            className={getInputClass("firstName")}
            placeholder="Votre prénom"
            aria-invalid={!!fieldErrors.firstName}
            aria-describedby={fieldErrors.firstName ? "err-firstName" : undefined}
          />
          {fieldErrors.firstName && (
            <p id="err-firstName" className="mt-1.5 text-sm text-red-400" role="alert">
              {fieldErrors.firstName}
            </p>
          )}
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-brand-light/90">
            Nom
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            maxLength={120}
            autoComplete="family-name"
            disabled={isDisabled}
            className={getInputClass("name")}
            placeholder="Votre nom"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "err-name" : undefined}
          />
          {fieldErrors.name && (
            <p id="err-name" className="mt-1.5 text-sm text-red-400" role="alert">
              {fieldErrors.name}
            </p>
          )}
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-brand-light/90">
          Email
        </span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          maxLength={254}
          autoComplete="email"
          disabled={isDisabled}
          className={getInputClass("email")}
          placeholder="votre@email.fr"
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? "err-email" : undefined}
        />
        {fieldErrors.email && (
          <p id="err-email" className="mt-1.5 text-sm text-red-400" role="alert">
            {fieldErrors.email}
          </p>
        )}
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-brand-light/90">
          Sujet
        </span>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          maxLength={200}
          disabled={isDisabled}
          className={getInputClass("subject")}
          placeholder="Objet de votre message"
          aria-invalid={!!fieldErrors.subject}
          aria-describedby={fieldErrors.subject ? "err-subject" : undefined}
        />
        {fieldErrors.subject && (
          <p id="err-subject" className="mt-1.5 text-sm text-red-400" role="alert">
            {fieldErrors.subject}
          </p>
        )}
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-brand-light/90">
          Message
        </span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          maxLength={10000}
          rows={5}
          disabled={isDisabled}
          className={`resize-y min-h-[140px] ${getInputClass("message")}`}
          placeholder="Décrivez votre projet ou posez votre question…"
          aria-invalid={!!fieldErrors.message}
          aria-describedby={fieldErrors.message ? "err-message" : undefined}
        />
        {fieldErrors.message && (
          <p id="err-message" className="mt-1.5 text-sm text-red-400" role="alert">
            {fieldErrors.message}
          </p>
        )}
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={isDisabled}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-accent px-6 py-3 font-medium text-white transition-colors hover:bg-brand-accent/90 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <span
                className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
                aria-hidden
              />
              Envoi en cours…
            </>
          ) : (
            "Envoyer le message"
          )}
        </button>
        {status === "success" && (
          <span className="text-sm text-brand-light/70">
            Vous pouvez envoyer un autre message si besoin.
          </span>
        )}
      </div>
    </form>
  );
};
