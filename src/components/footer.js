import React from "react";
import { MdCopyright } from "react-icons/md";

export function Footer() {
  return (
    <>
      <footer className="mt-28 max-sm:text-left text-right pb-4">
        <span className="text-slate-600 dark:text-slate-400">
          <MdCopyright className="inline -mt-1" />
          {` ${new Date().getFullYear()} Copyright. Ngwobia, Chukwudi Mike`}
        </span>
      </footer>
    </>
  );
}
