import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

export function Footer() {
  return (
    <>
      <footer className="mt-28 max-sm:text-left text-right pb-4">
        <span className="flex flex-col gap-4 text-slate-600 dark:text-slate-400">
          <div className="flex justify-end items-center gap-1">
            <MdCopyright className="inline" />
            <span className="hidden md:inline">
              {`${new Date().getFullYear()} Copyright. Ngwobia, Chukwudi Mike`}
            </span>
            <span className="inline md:hidden">
              {`${new Date().getFullYear()} Copyright. Ngwobia, C. M.`}
            </span>
          </div>
          {/* <div className="flex justify-end items-center gap-1 text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 text-xs">
            <a
              href="https://docs.google.com/document/d/1xiQ_McjCU5--qK6wNuQsJFambfVnM12OgEn9MpJ5fLE/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              Privacy Policy
            </a>
            <FaExternalLinkAlt />
          </div> */}
        </span>
      </footer>
    </>
  );
}
