"use client";

import { useState, useTransition } from "react";

import Button from "@/components/ui/Button";
import { brands } from "@/data/site";

const branchOptions = brands.map((brand) => ({
  value: brand.id,
  label: brand.name,
}));

export default function InquiryForm() {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="relative grid gap-4 rounded-[1.5rem] border border-[var(--border-soft)] bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(() => {
          setSubmitted(true);
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-primary)]">Full name</span>
          <input className="form-input" name="name" placeholder="Enter your name" required />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-primary)]">Phone number</span>
          <input className="form-input" name="phone" placeholder="+92..." required />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-primary)]">Preferred branch</span>
          <select className="form-input" name="branch" defaultValue="hadeed">
            {branchOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-primary)]">Inquiry type</span>
          <select className="form-input" name="type" defaultValue="appointment">
            <option value="appointment">Appointment</option>
            <option value="consultation">Consultation</option>
            <option value="fcps">FCPS Training</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-medium text-[var(--color-primary)]">Message</span>
        <textarea
          className="form-input min-h-32 resize-none py-4"
          name="message"
          placeholder="Tell us about the treatment, branch, or training guidance you need."
        />
      </label>

      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-7 text-[var(--color-text-soft)]">
          This demo form is frontend-only. It is designed to communicate a polished booking and inquiry experience.
        </p>
        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? "Submitting..." : "Send inquiry"}
        </Button>
      </div>

      {submitted ? (
        <div className="rounded-[1.25rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Your inquiry has been captured in the demo flow. The next step would be wiring this form to email, CRM, or WhatsApp automation.
        </div>
      ) : null}
    </form>
  );
}
