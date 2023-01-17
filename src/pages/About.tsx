import { Link } from "react-router-dom";

export function About() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-full w-full pt-16 px-4">
        <h1 className="text-5xl font-extrabold text-slate-700 dark:text-slate-200 mb-10">
          About Me
        </h1>

        <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
          I am a passionate full-stack software engineer with professional
          experience working in high-performing, cross-cultural, distributed
          engineering teams.
        </p>

        <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
          My overall goal is to provide value quickly while applying proven best
          practices to not only satisfy requirements but to also deliver
          maintainable, testable, reusable, production-ready software artifacts.
        </p>

        <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
          I've worked with a few companies and businesses to build amazing
          proucts, the most recent being the
          <a
            href="https://app.freemancapital.co"
            target="_blank"
            className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
          >
            {` Freeman Capital Client Portal. `}
          </a>
          <span className="text-sm bg-slate-200 dark:bg-slate-700 cursor-pointer p-1">
            You can find more of my work on
            <a
              href="https://github.com/chuxmykel"
              target="_blank"
              className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
            >
              <span className="">{` .github/ `}</span>
            </a>
            😉
          </span>
        </p>

        <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
          I am actively involved in mentoring and I currently work with aspiring
          software developers enrolled in
          <a
            href="https://codex.academy/"
            className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
          >
            {` Codex Academy `}
          </a>
          to guide them through a self-paced, mastery-based pathway to their
          desired modern, marketable tech skills.
        </p>

        <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
          I love music, to listen and to play. The only sports I do not hate are
          skating and swimming 😅
        </p>

        <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
          I also love to play chess. You can connect with me on
          <a
            className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
            href="https://lichess.org/@/ChuxMyke"
            target="_blank"
          >
            {` Lichess `}
          </a>
          and
          <a
            href="https://www.chess.com/member/slimchux"
            className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
            target="_blank"
          >{` chess.com `}</a>
          so you can help me drop my rating! 📉
        </p>

        <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
          <Link
            to="/#contact-me"
            className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
          >
            Let's connect. <span className="text-xl">🤝</span>
          </Link>
        </p>

      </div>
    </div>
  );
}
