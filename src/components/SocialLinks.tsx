import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <SocialLink url="https://github.com/chuxmykel" Icon={FaGithub} />
      <SocialLink
        url="https://www.linkedin.com/in/chukwudi-ngwobia/?original_referer="
        Icon={FaLinkedin}
      />
      <SocialLink url="https://medium.com/@ngwobiachukwudi" Icon={BsMedium} />
      <SocialLink url="https://twitter.com/chuxmyk" Icon={FaTwitter} />
      <SocialLink url="https://instagram.com/chuxmyk" Icon={FaInstagram} />
    </div>
  );
}

interface ISocialLink {
  url: string;
  Icon: any;
}

function SocialLink({ Icon, url }: ISocialLink) {
  const socialLinkClasses = "h-8 w-8 hover:animate-bounce transition-all";
  return (
    <>
      <a href={url} target="_blank">
        <Icon className={socialLinkClasses} />
      </a>
    </>
  );
}
