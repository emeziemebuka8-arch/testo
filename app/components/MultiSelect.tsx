"use client"

import React from "react";
// using CSS transitions instead of framer-motion

type Option = { label: string; value: string };

interface MultiSelectProps {
  options: Option[];
  value: string[];
  onChange: (vals: string[]) => void;
  placeholder?: string;
}

export default function MultiSelect({ options, value, onChange, placeholder }: MultiSelectProps) {
  const toggle = (val: string) => {
    if (value.includes(val)) onChange(value.filter((v) => v !== val));
    else onChange([...value, val]);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value.includes(opt.value);
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => toggle(opt.value)}
              className={`px-3 py-1.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors transform active:scale-95 motion-safe:transition-[transform,opacity,top] border ${
                active
                  ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white border-transparent shadow-md"
                  : "bg-white/60 dark:bg-black/40 text-foreground border-border"
              }`}
              aria-pressed={active}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
      {placeholder && value.length === 0 ? (
        <p className="mt-2 text-xs text-muted-foreground">{placeholder}</p>
      ) : null}
    </div>
  );
}
