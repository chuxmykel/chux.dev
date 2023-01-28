import React from "react";

import Layout from "../components/layout";
import { BackToHomePageLink } from "../components/back-to-homepage-link";
import { SocialLinks } from "../components/social-links";
import { Seo } from "../components/seo";

const ThankYouPage = () => {
  // FIXME: Improve UX
  return (
    <Layout>
    <div className="pt-20 flex flex-col items-center justify-center gap-6 text-slate-900 dark:text-slate-50 h-full">
      <h1 className="font-bold text-3xl text-center text-slate-700 dark:text-slate-200">
        Thank you for reaching out.
      </h1>
      <p className="text-center text-xl">I will be in touch.</p>

      <p className="text-center text-lg">
        You can also connect with me using one of the links below.
      </p>

      <span className="text-xl">Cheers! 🎉</span>

      <div className="py-20">
        <SocialLinks />
      </div>

      <BackToHomePageLink />
    </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Thank you!" />

export default ThankYouPage;
