import { HashLink } from "react-router-hash-link";

export function About() {
  return (
    <div className="flex items-center">
      <div className="h-full w-full pt-16">
        <div className="px-4">
          <h1 className="text-5xl font-extrabold text-slate-700 dark:text-slate-200 mb-10">
            About Me
          </h1>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
            I am a highly skilled full-stack software engineer with over 4 years
            of professional experience working in fast-paced, cross-cultural,
            and distributed teams
          </p>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
            My primary objective is to deliver value as quickly as possible by
            applying industry best practices to create maintainable, testable,
            and production-ready software artifacts.
          </p>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
            My recent work includes the development of the
            <a
              href="https://app.freemancapital.co"
              target="_blank"
              className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
            >
              {` Freeman Capital Client Portal `}
            </a>
            and this website of course.
          </p>

          <div className="pb-8">
            <span className="text-sm bg-slate-200 dark:bg-slate-700 cursor-pointer p-1 text-slate-900 dark:text-slate-50">
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
          </div>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
            I am also actively engaged in mentoring and currently, I am working
            with aspiring software developers at
            <a
              href="https://codex.academy/"
              className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
            >
              {` Codex Academy, `}
            </a>
            helping them to acquire modern and marketable tech skills.
          </p>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
            In my free time, I am an avid music lover and enjoy playing various
            instruments. I also enjoy skating and swimming.
          </p>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
            I am also a chess enthusiast and you can challenge me on
            <a
              className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
              href="https://lichess.org/@/ChuxMyke"
              target="_blank"
            >
              {` Lichess `}
            </a>
            or
            <a
              href="https://www.chess.com/member/slimchux"
              className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
              target="_blank"
            >{` chess.com`}</a>
            .
          </p>

          <p className="text-lg md:text-xl text-slate-900 dark:text-slate-50 pb-8">
            <HashLink
              to="/#contact-me"
              className="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-8"
              smooth
            >
              I would love to connect and work together.{" "}
              <span className="text-xl">🤝</span>
            </HashLink>
          </p>
        </div>
      </div>
    </div>
  );
}
