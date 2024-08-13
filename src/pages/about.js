import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { Seo } from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <div className="font-titillium-web">
        <div className="flex justify-center h-full w-full pt-16">
          <article className="px-4 prose dark:prose-invert prose-xl xl:prose-2xl prose-slate prose-img:rounded-sm prose-h1:underline prose-headings:underline-offset-8 prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:dark:text-blue-400 dark:hover:prose-a:text-blue-300 prose-a:underline prose-a:underline-offset-8">
            <h1>About Me</h1>
            <p>
              I am a software engineer with over 6 years of professional
              experience building with fast-paced, cross-cultural, and
              distributed engineering teams to bring product ideas to life.
            </p>
            <p>
              My objective is to deliver value quickly, by applying industry
              best practices to create maintainable, testable, and
              production-ready software artifacts.
            </p>
            {/* <p>
              My recent work includes the development of the
              <a
                href="https://app.freemancapital.co"
                target="_blank"
                rel="noreferrer"
              >
                {` Freeman Capital Client Portal `}
              </a>
              and this website of course.
            </p>
            <blockquote className="py-4 flex items-center">
              <span className="text-sm bg-slate-200 dark:bg-slate-700 cursor-pointer p-1 text-slate-900 dark:text-slate-50">
                You can find more of my work on
                <a
                  href="https://github.com/chuxmykel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{` .github/ `}</span>
                </a>
                😉
              </span>
            </blockquote>
            <p>
              I am also actively engaged in mentoring and currently, I am
              working with aspiring software developers at
              <a href="https://codex.academy/" rel="noreferrer" target="_blank">
                {` Codex Academy, `}
              </a>
              helping them to acquire modern and marketable tech skills.
            </p> */}
            <p>
              I am an avid music lover and enjoy playing various instruments. In
              my free time, I enjoy skating and swimming.
            </p>
            <p>
              I am also a chess enthusiast and you can challenge me on
              <a
                href="https://lichess.org/@/ChuxMyke"
                rel="noreferrer"
                target="_blank"
              >
                {` Lichess `}
              </a>
              or
              <a
                href="https://www.chess.com/member/slimchux"
                rel="noreferrer"
                target="_blank"
              >{` chess.com`}</a>
              .
            </p>
            <p>
              <Link to="/#contact-me">
                I would love to connect and work together.{" "}
                <span className="text-xl">🤝</span>
              </Link>
            </p>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About me" />;

export default AboutPage;
