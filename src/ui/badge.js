import React from "react";

export function Badge({ children }) {
  return (
    <span className="bg-slate-200 dark:bg-slate-700 px-2 py-1 md:py-0 rounded font-thin text-xs md:text-base">
      {children}
    </span>
  );
}
