import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

import { ExternalLink } from "../ui/external-link";

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialLink
        url="https://github.com/chuxmykel"
        Icon={FaGithub}
        label="Github"
      />
      <SocialLink
        url="https://www.linkedin.com/in/chukwudi-ngwobia/?original_referer="
        Icon={FaLinkedin}
        label="Linkedin"
      />
      <SocialLink
        url="https://medium.com/@ngwobiachukwudi"
        Icon={BsMedium}
        label="Medium"
      />
      <SocialLink
        url="https://twitter.com/chuxmyk"
        Icon={FaTwitter}
        label="Twitter"
      />
      <SocialLink
        url="https://instagram.com/chuxmyk"
        Icon={FaInstagram}
        label="Instagram"
      />
    </div>
  );
}

function SocialLink({ Icon, url, label }) {
  const socialLinkClasses =
    "h-8 w-8 hover:animate-bounce transition-all text-slate-900 dark:text-slate-50";
  return (
    <ExternalLink href={url} aria-label={label}>
      <Icon className={socialLinkClasses} />
    </ExternalLink>
  );
}
