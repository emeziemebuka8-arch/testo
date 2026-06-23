"use client"

import React, { useState } from "react";
import MultiSelect from "./MultiSelect";
import SuccessCard from "./SuccessCard";

const productOptions = [
  "Web Application",
  "Mobile Application",
  "SaaS Platform",
  "API / Backend Service",
  "E-commerce Platform",
  "Enterprise Software",
  "Other",
];

const servicesOptions = [
  "Manual Testing",
  "Automated Testing",
  "Regression Testing",
  "Performance Testing",
  "Security Testing",
  "Accessibility Testing",
  "Test Strategy & Process Setup",
  "Dedicated QA Team",
];

interface FormData {
  fullName: string;
  email: string;
  company?: string;
  productType?: string;
  services: string[];
  message: string;
  teamSize?: string;
  timeline?: string;
}

export default function QAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    productType: "",
    services: [],
    message: "",
    teamSize: undefined,
    timeline: undefined,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const onChange = (field: keyof FormData, value: any) => {
    setForm((s) => ({ ...s, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!form.fullName || form.fullName.trim().length < 2) next.fullName = "Please enter your name";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email";
    if (!form.message || form.message.trim().length < 20) next.message = "Please provide more details";
    if (!form.services || form.services.length === 0) next.services = "Select at least one service";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const reset = () => {
    setForm({ fullName: "", email: "", company: "", productType: "", services: [], message: "", teamSize: undefined, timeline: undefined });
    setErrors({});
  };

  const onSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      setSubmitted(true);
      reset();
    } finally {
      setLoading(false);
    }
  };

  if (submitted) return <SuccessCard onClose={() => setSubmitted(false)} />;

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            value={form.fullName}
            onChange={(ev) => onChange("fullName", ev.target.value)}
            placeholder="John Doe"
            className={`mt-2 w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 transition-shadow ${
              errors.fullName ? "border-destructive" : "border-border"
            }`}
          />
          {errors.fullName ? <p className="text-xs text-destructive mt-1">{errors.fullName}</p> : null}
        </div>
        <div>
          <label className="text-sm font-medium">Work Email</label>
          <input
            value={form.email}
            onChange={(ev) => onChange("email", ev.target.value)}
            placeholder="john@company.com"
            className={`mt-2 w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400 transition-shadow ${
              errors.email ? "border-destructive" : "border-border"
            }`}
          />
          {errors.email ? <p className="text-xs text-destructive mt-1">{errors.email}</p> : null}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Company Name</label>
        <input
          value={form.company}
          onChange={(ev) => onChange("company", ev.target.value)}
          placeholder="Your company name"
          className="mt-2 w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label className="text-sm font-medium">What are you building?</label>
        <select
          value={form.productType}
          onChange={(ev) => onChange("productType", ev.target.value)}
          className="mt-2 w-full rounded-xl border px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select...</option>
          {productOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="text-sm font-medium">What QA support do you need?</label>
        <div className="mt-2">
          <MultiSelect
            options={servicesOptions.map((s) => ({ label: s, value: s }))}
            value={form.services}
            onChange={(vals) => onChange("services", vals)}
            placeholder="Pick one or more services"
          />
          {errors.services ? <p className="text-xs text-destructive mt-1">{errors.services}</p> : null}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Tell us about your quality challenges</label>
        <textarea
          value={form.message}
          onChange={(ev) => onChange("message", ev.target.value)}
          placeholder="Describe your current testing process, release challenges, bugs affecting users, or what you want us to improve."
          rows={4}
          className={`mt-2 w-full rounded-2xl border px-3 py-3 text-sm focus:ring-2 focus:ring-indigo-400 resize-none min-h-24 ${
            errors.message ? "border-destructive" : "border-border"
          }`}
        />
        {errors.message ? <p className="text-xs text-destructive mt-1">{errors.message}</p> : null}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium">Team Size (Optional)</label>
          <div className="mt-2 flex gap-2 flex-wrap">
            {["Solo Founder", "2–10", "11–50", "51–200", "200+"].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onChange("teamSize", s)}
                className={`px-3 py-1.5 text-sm rounded-2xl border ${form.teamSize === s ? "bg-gray-900 text-white" : "bg-white/60"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">How soon do you need QA support?</label>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Immediately",
              "Within 2 weeks",
              "Within 1 month",
              "1–3 months",
              "Just exploring options",
            ].map((t) => (
              <label key={t} className={`p-3 rounded-lg border cursor-pointer ${form.timeline === t ? "bg-indigo-50 border-indigo-200" : "bg-white/60"}`}>
                <input
                  checked={form.timeline === t}
                  onChange={() => onChange("timeline", t)}
                  type="radio"
                  value={t}
                  className="sr-only"
                />
                <div className="text-sm">{t}</div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          onClick={onSubmit}
          className="w-full py-3 rounded-2xl text-white font-semibold bg-linear-to-r from-indigo-600 to-purple-600 shadow-lg active:scale-95 transition-transform"
        >
          {loading ? "Submitting..." : "Get My QA Assessment"}
        </button>
      </div>
    </form>
  );
}
