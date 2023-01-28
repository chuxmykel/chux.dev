import * as React from "react";

import Layout from "../components/layout";
import { Seo } from "../components/seo";
import { IntroductionWithCarousel } from "../components/introduction-with-carousel";
import { SoftwareEngineer as SoftwareEngineerSVG } from "../svg/software-engineer";
import { SocialLinks } from "../components/social-links";
import { ContactMeForm } from "../components/contact-me-form";

const IndexPage = () => {
  return (
    <Layout>
      <div className="h-screen flex items-center">
        <div className="w-full md:flex items-center">
          <div className="py-8 md:py-0 md:w-1/2 md:h-1/2 md:order-2">
            <SoftwareEngineerSVG />
          </div>

          <div className="mb-40 md:mb-0 md:order-1 md:w-[50%]">
            <IntroductionWithCarousel />
          </div>
        </div>
      </div>
      <ContactMeForm />
      <SocialLinks />
    </Layout>
  );
};

export const Head = () => <Seo />;

export default IndexPage;
