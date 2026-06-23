"use client"

import React from "react";
import QAForm from "./QAForm";
// lightweight CSS transitions used instead of framer-motion

export default function ContactSection() {
  return (
    <section id="contact-section" tabIndex={-1} className="relative py-16">
      <div className="absolute -left-20 top-0 w-72 h-72 bg-indigo-200/30 blur-3xl rounded-full pointer-events-none" aria-hidden />
      <div className="absolute right-0 bottom-0 w-56 h-56 bg-purple-200/25 blur-2xl rounded-full pointer-events-none" aria-hidden />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="max-w-xl">
            <p className="text-sm font-medium text-indigo-600">Get in Touch</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold">Ship With Confidence</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Tell us about your product, quality challenges, or testing needs. Our QA specialists will review your requirements and get back to you.
            </p>

            <div className="mt-6 flex gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/70 dark:bg-black/50 p-2 shadow-sm">
                  <svg width="20" height="20" fill="none" aria-hidden>
                    <path d="M3 10s2-4 7-4 7 4 7 4-2 4-7 4-7-4-7-4z" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Fast response</div>
                  <div className="text-xs text-muted-foreground">Typically within 24 hours</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/70 dark:bg-black/50 p-2 shadow-sm">
                  <svg width="20" height="20" fill="none" aria-hidden>
                    <path d="M4 11l3 3 9-9" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">Senior QA specialists</div>
                  <div className="text-xs text-muted-foreground">Decades of combined experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/80 dark:bg-black/60 p-6 shadow-lg border border-border transition-transform duration-300 ease-out transform">
            <QAForm />
          </div>
        </div>
      </div>
    </section>
  );
}
