import * as React from "react"
import Layout from "../components/layout";

import { BackToHomePageLink } from "../components/back-to-homepage-link";
import { NotFound404 } from "../svg/not-found-404";
import { Seo } from "../components/seo";

const NotFoundPage = ({ location }) => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen text-slate-900 dark:text-slate-50">
        <h1 className="font-bold text-5xl mb-8 text-slate-700 dark:text-slate-200">
          Oops!
        </h1>
        <div className="w-full md:h-1/2 md:w-1/2 mb-14">
          <NotFound404 />
        </div>
        <p className="text-center mb-10 text-xl">
          The URL <span>{`(${location.pathname})`}</span> you tried to visit
          doesn't exist
        </p>

        <BackToHomePageLink />
      </div>
    </Layout>
  );
};

export default NotFoundPage

export const Head = () => <Seo title="Not found"/>
