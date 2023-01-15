import { Link } from "react-router-dom";
import { Logo as LogoSVG } from "../svg/Logo.svg";

export function Logo() {
  return (
    <div className="w-32 md:w-40">
      <Link to="/">
        <LogoSVG />
      </Link>
    </div>
  );
}
