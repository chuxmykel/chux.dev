import * as React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { ExternalLink } from "../ui/external-link";

const CAREER_START_YEAR = 2018;

const AboutPage = () => {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <Layout>
      <div className="font-titillium-web">
        <div className="flex justify-center h-full w-full pt-16">
          <article className="px-4 prose dark:prose-invert prose-xl xl:prose-2xl prose-slate prose-img:rounded-sm prose-h1:underline prose-headings:underline-offset-8 prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:dark:text-blue-400 dark:hover:prose-a:text-blue-300 prose-a:underline prose-a:underline-offset-8">
            <h1>About Me</h1>
            <p>
              I am a software engineer with over {yearsOfExperience} years of
              professional experience building with fast-paced,
              cross-cultural, and distributed engineering teams to bring
              product ideas to life.
            </p>
            <p>
              My objective is to deliver value quickly, by applying industry
              best practices to create maintainable, testable, and
              production-ready software artifacts.
            </p>
            <p>
              I am an avid music lover and enjoy playing various instruments. In
              my free time, I enjoy skating and swimming.
            </p>
            <p>
              I am also a chess enthusiast and you can challenge me on
              <ExternalLink href="https://lichess.org/@/ChuxMyke">
                {` Lichess `}
              </ExternalLink>
              or
              <ExternalLink href="https://www.chess.com/member/chuxmykel">{` chess.com`}</ExternalLink>
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
