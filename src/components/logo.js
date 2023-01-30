import React from "react";
import { Link } from "gatsby";

import { Logo as LogoSVG } from "../svg/logo.svg";

export function Logo() {
  return (
    <div className="w-32 md:w-40">
      <Link to="/" aria-label="Logo link! Click to go load the home page.">
        <LogoSVG />
      </Link>
    </div>
  );
}
