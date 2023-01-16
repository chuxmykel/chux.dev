import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function IntroductionWithCarousel() {
  const titles = [
    "fullstack developer",
    "world class software engineer",
    "creative problem solver",
    "digital nomad",
  ];
  const [title, setTitle] = useState(titles[0]);
  const [titleIdx, setTitleIdx] = useState(0);
  let delayTimeout: number;

  async function typeTitle() {
    if (title.length < 1) {
      for (const char of titles[titleIdx]) {
        setTitle((prevTitle) => prevTitle + char);
        await delay(50);
      }
    } else {
      await delay(1500);
    }
  }

  async function deleteTitle() {
    for (let char of titles[titleIdx]) {
      setTitle((prevTitle) => prevTitle.slice(0, -1));
      await delay(50);
    }
    await delay(200);
  }

  async function typeAndDeleteTitle() {
    await typeTitle();
    await delay(2500);
    await deleteTitle();
    setTitleIdx((prevIdx) => {
      return (prevIdx + 1 + titles.length) % titles.length;
    });
  }

  useEffect(() => {
    (async () => {
      typeAndDeleteTitle();
    })();
    return () => {
      clearTimeout(delayTimeout);
    };
  }, [titleIdx]);

  async function delay(ms: number) {
    return new Promise((resolve) => {
      delayTimeout = window.setTimeout(resolve, ms);
    });
  }
  return (
    <div className="flex flex-col items-start gap-5 min-w-full max-sm:h-60 h-52">
      <div className="min-w-full min-h-full text-slate-900 dark:text-slate-50">
        <h1 className="text-5xl font-extrabold text-slate-700 dark:text-slate-200 mb-4">
          Hello! <span className="dark:hidden">👋🏿</span>
          <span className="hidden dark:inline">👋</span>
        </h1>
        <p className="text-3xl">
          I am{" "}
          <span className="bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-2xl cursor-pointer">
            <Link to="/about">Chukwudi Ngwobia,</Link>
          </span>
        </p>
        <span className="bg-slate-200 dark:bg-slate-700 text-2xl font-medium px-1 italic">
          a {title}
        </span>
        <p className="text-3xl inline"> based in Nigeria.</p>
      </div>

      <div className="mt-4">
        <HashLink to="#contact-me" smooth>
          <button className="py-2 px-4 bg-slate-800 dark:bg-slate-100 text-slate-50 dark:text-slate-900 rounded-md active:scale-x-95 hover:animate-pulse text-xl font-semibold">
            Contact Me
          </button>
        </HashLink>
      </div>
    </div>
  );
}
