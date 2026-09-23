import React from "react";
import { Link } from "gatsby";
import colors from "tailwindcss/colors";

import { useTypewriter } from "../hooks/use-typewriter";
import { Button } from "../ui/button";

const titles = [
  "fullstack developer",
  "world class software engineer",
  "creative problem solver",
  "digital nomad",
  "father of 2 amazing kids",
  "senior software engineer",
  "pragmatic solution finder",
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
        <Button
          href="/#contact-me"
          variant="text"
          className="active:scale-x-95 hover:animate-pulse"
          sx={{
            backgroundColor: colors.slate[800],
            color: colors.slate[50],
            padding: "8px 16px",
            borderRadius: "6px",
            fontFamily: "inherit",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "28px",
            letterSpacing: "normal",
            textTransform: "none",
            minWidth: 0,
            "&:hover": { backgroundColor: colors.slate[800] },
            ".dark &": {
              backgroundColor: colors.slate[100],
              color: colors.slate[900],
            },
            ".dark &:hover": { backgroundColor: colors.slate[100] },
          }}
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
}
