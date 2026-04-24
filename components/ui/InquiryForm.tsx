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
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        startTransition(() => {
          setSubmitted(true);
        });
      }}
    >
      <div>
        <p className="section-eyebrow">Appointment Form</p>
        <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.05em] text-[var(--color-primary)] sm:text-4xl">
          Send your inquiry directly
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-text-soft)] sm:text-base">
          Share your treatment need, preferred branch, or FCPS training question and we will follow up through the contact details you provide.
        </p>
      </div>

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
          <span className="text-sm font-medium text-[var(--color-primary)]">Email address</span>
          <input className="form-input" name="email" type="email" placeholder="name@example.com" />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-medium text-[var(--color-primary)]">Preferred time</span>
          <input className="form-input" name="time" placeholder="Morning / Evening" />
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

      <div className="flex flex-col items-stretch gap-4 border-t border-[var(--border-soft)] pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <p className="max-w-lg text-sm leading-7 text-[var(--color-text-soft)]">
          This form is currently set up as a frontend demo flow and can be connected later to email, CRM, or WhatsApp automation.
        </p>
        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? "Submitting..." : "Send inquiry"}
        </Button>
      </div>

      {submitted ? (
        <div className="rounded-[1.25rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Your inquiry has been captured in the demo flow. The next step would be wiring this form to your preferred contact workflow.
        </div>
      ) : null}
    </form>
  );
}
