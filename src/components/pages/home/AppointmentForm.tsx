"use client";

import { useActionState, useEffect } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { siteConfig } from "@/lib/site";

const initialState: ContactState = { status: "idle", message: "" };

export function AppointmentForm() {
  const [state, formAction, pending] = useActionState(sendContact, initialState);

  useEffect(() => {
    if (state.status !== "mailto" || !state.values) return;
    const { name, phone, message } = state.values;
    const subject = encodeURIComponent("Programare măsurători — " + name);
    const body = encodeURIComponent(`Nume: ${name}\nTelefon: ${phone}\n\nMesaj:\n${message}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {/* ACSD - honeypot field, hidden from people */}
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <input
        required
        name="name"
        defaultValue={state.values?.name}
        maxLength={100}
        placeholder="Nume"
        className="border-background/20 text-background placeholder:text-background/40 border bg-transparent px-4 py-3 text-sm transition-colors focus:border-[#07BCC6] focus:outline-none"
      />
      <input
        required
        name="phone"
        defaultValue={state.values?.phone}
        type="tel"
        maxLength={30}
        placeholder="Telefon"
        className="border-background/20 text-background placeholder:text-background/40 border bg-transparent px-4 py-3 text-sm transition-colors focus:border-[#07BCC6] focus:outline-none"
      />
      <textarea
        name="message"
        defaultValue={state.values?.message}
        rows={3}
        maxLength={1000}
        placeholder="Detalii (opțional)"
        className="border-background/20 text-background placeholder:text-background/40 resize-none border bg-transparent px-4 py-3 text-sm transition-colors focus:border-[#07BCC6] focus:outline-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="bg-background text-foreground hover:text-background px-6 py-3 text-xs font-semibold tracking-[0.18em] uppercase transition-colors hover:bg-[#07BCC6] disabled:opacity-60"
      >
        {pending ? "Se trimite…" : "Trimite cererea"}
      </button>
      <p role="status" aria-live="polite" className="text-background text-sm empty:hidden">
        {state.message}
      </p>
    </form>
  );
}
