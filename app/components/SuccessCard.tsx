"use client"

import React from "react";
export default function SuccessCard({ onClose }: { onClose?: () => void }) {
  return (
    <div className="w-full rounded-2xl bg-white/80 dark:bg-black/60 backdrop-blur-md p-6 shadow-lg border border-border transition-transform duration-200">
      <h3 className="text-lg font-semibold">Request received</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Our QA team will review your needs and reach out with the next steps. We look forward to helping you ship faster with confidence.
      </p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-md bg-linear-to-r from-indigo-600 to-purple-600 text-white text-sm shadow-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
}
