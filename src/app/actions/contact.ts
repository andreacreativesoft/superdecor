"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";

export type ContactState = {
  status: "idle" | "ok" | "error" | "mailto";
  message: string;
  values?: { name: string; phone: string; message: string };
};

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

// ACSD - strip line breaks so user input cannot add mail headers
const oneLine = (value: FormDataEntryValue | null, max: number) =>
  String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const ok: ContactState = {
    status: "ok",
    message: "Mulțumim! Am primit cererea și te contactăm în maxim 24 de ore.",
  };

  // ACSD - honeypot: bots fill it, people never see it
  if (String(formData.get("website") ?? "") !== "") return ok;

  const name = oneLine(formData.get("name"), 100);
  const phone = oneLine(formData.get("phone"), 30);
  const message = String(formData.get("message") ?? "")
    .trim()
    .slice(0, 1000);

  // ACSD - return the values on error so the form keeps what was typed
  const fail = (text: string): ContactState => ({
    status: "error",
    message: text,
    values: { name, phone, message },
  });

  if (name.length < 2) return fail("Te rugăm să completezi numele.");
  if (!/^[0-9+()\s.-]{7,30}$/.test(phone))
    return fail("Te rugăm să completezi un număr de telefon valid.");

  const ip = ((await headers()).get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    return fail(`Prea multe cereri. Te rugăm să ne suni la ${siteConfig.contact.phone}.`);
  }
  hits.set(ip, [...recent, now]);

  const user = process.env.SMTP_USER ?? "contact@superdecor.ro";
  const pass = process.env.SMTP_PASS;
  const sendError = fail(
    `Nu am putut trimite cererea. Te rugăm să ne suni la ${siteConfig.contact.phone}.`,
  );
  // ACSD - no mailbox password configured: fall back to the visitor's mail app
  if (!pass) return { status: "mailto", message: "", values: { name, phone, message } };

  const port = Number(process.env.SMTP_PORT ?? 465);
  try {
    await nodemailer
      .createTransport({
        host: process.env.SMTP_HOST ?? "smtp.hostinger.com",
        port,
        secure: port === 465,
        auth: { user, pass },
      })
      .sendMail({
        from: { name: siteConfig.name, address: user },
        to: process.env.CONTACT_TO ?? siteConfig.contact.email,
        subject: `Programare măsurători — ${name}`,
        text: `Nume: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message || "-"}`,
      });
    return ok;
  } catch (error) {
    console.error("contact form: send failed", error);
    return sendError;
  }
}
