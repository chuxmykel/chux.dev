import React from "react";
import { Link } from "gatsby";
import { useTypewriter } from "../hooks/use-typewriter";

const titles = [
  "fullstack developer",
  "world class software engineer",
  "creative problem solver",
  "digital nomad",
  "father of 2 amazing kids"
];

export function IntroductionWithCarousel() {
  const title = useTypewriter(titles);

  return (
    <div className="flex flex-col items-start gap-5 min-w-full max-sm:h-60 h-52">
      <div className="min-w-full min-h-full text-slate-900 dark:text-slate-50">
        <h1 className="text-5xl font-extrabold text-slate-700 dark:text-slate-200 mb-4">
          Hello! <span className="dark:hidden">👋🏿</span>
          <span className="hidden dark:inline">👋</span>
        </h1>
        <p className="text-3xl">
          I am
          <span className="bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-2xl cursor-pointer">
            <Link to="/about">{` Chukwudi Ngwobia,`}</Link>
          </span>
        </p>
        <span
          className="bg-slate-200 dark:bg-slate-700 text-2xl font-medium px-1 italic"
          aria-hidden="true"
        >
          a {title}
        </span>
        <span className="sr-only">a {titles.join(", ")}</span>
        <p className="text-3xl inline"> based in Nigeria.</p>
      </div>

      <div className="mt-4">
        {/* FIXME: Link doesn't work for smooth scrolling so I use a tags for intra-app links */}
        <a href="/#contact-me">
          <button className="py-2 px-4 bg-slate-800 dark:bg-slate-100 text-slate-50 dark:text-slate-900 rounded-md active:scale-x-95 hover:animate-pulse text-xl font-semibold">
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}
