// src/components/elearning/ElearningTileGrid.jsx
import React from "react";
import { Link } from "react-router-dom";
import { elearningSections } from "../../data/elearningDesignSystemSections";

export default function ElearningTileGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {elearningSections.map((item) => (
        <Link
          key={item.slug}
          to={item.href}
          className="group flex flex-col rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/70"
        >
          {/* Image area */}
          <div className="flex-1 flex items-center justify-center px-8 pt-8 pb-4 bg-slate-50">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-24 w-auto object-contain"
            />
          </div>

          {/* Label area */}
          <div className="px-6 py-4 bg-white border-t border-slate-200">
            <h3 className="font-semibold text-base text-[var(--text,#0f172a)]">
              {item.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}