import { useState, useContext } from "react";
import { FaHamburger, FaMoon, FaSun, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { ThemeContext } from "../context/theme.context";
import { Logo } from "./Logo";

export function Nav() {
  const menuItems = [
    { label: "About Me", href: "/about" },
    {
      label: "Résumé",
      href: "https://drive.google.com/file/d/1XKgl7lm_iqHbSEKSIWTxNMg3WHjnMnAB/view?usp=sharing",
      external: true,
    },
    { label: "Contact Me", href: "/#contact-me", isHashLink: true },
  ];
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu((prevState) => !prevState);
  }
  const hamburgerClasses = "h-8 w-8 text-slate-900 dark:text-slate-300";
  return (
    <>
      <header className="md:hidden">
        <div className="flex justify-between items-center">
          <Logo />
          <button onClick={toggleMenu}>
            {!showMenu && <FaHamburger className={hamburgerClasses} />}
            {showMenu && <FaWindowClose className={hamburgerClasses} />}
          </button>
        </div>
        {showMenu && (
          <nav className="mt-2 absolute -right-2 w-auto" onClick={toggleMenu}>
            <Menu menuItems={menuItems} />
          </nav>
        )}
      </header>

      <header className="hidden md:block">
        <div className="flex justify-between items-center">
          <Logo />
          <nav>
            <Menu menuItems={menuItems} />
          </nav>
        </div>
      </header>
    </>
  );
}

interface MenuProps {
  menuItems: MenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  external?: boolean;
  isHashLink?: boolean;
}

function Menu({ menuItems }: MenuProps) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center gap-4">
      <ul className="bg-slate-100 dark:bg-gray-900 rounded-md w-64 p-8 md:hidden">
        {menuItems.map((menuItem) => {
          const key = JSON.stringify(menuItem);
          if (menuItem.external) {
            return (
              <ExternalLink
                href={menuItem.href}
                label={menuItem.label}
                key={key}
              />
            );
          }
          if (menuItem.isHashLink) {
            return (
              <HashLinkComponent
                href={menuItem.href}
                label={menuItem.label}
                key={key}
              />
            );
          }
          return (
            <RegularLink
              href={menuItem.href}
              label={menuItem.label}
              key={key}
            />
          );
        })}

        <button className="flex w-full justify-center pt-2" onClick={toggleTheme}>
          <div className={`block md:hidden p-2 ${commonLinkClasses}`}>
            <FaMoon className="h-4 w-4 dark:hidden" />
            <FaSun className="h-4 w-4 hidden dark:block" />
          </div>
        </button>
      </ul>

      <ul className="hidden md:flex gap-2 justify-end items-center">
        {menuItems.map((menuItem) => {
          const key = JSON.stringify(menuItem);
          if (menuItem.external) {
            return (
              <ExternalLink
                href={menuItem.href}
                label={menuItem.label}
                key={key}
              />
            );
          }
          if (menuItem.isHashLink) {
            return (
              <HashLinkComponent
                href={menuItem.href}
                label={menuItem.label}
                key={key}
              />
            );
          }
          return (
            <RegularLink
              href={menuItem.href}
              label={menuItem.label}
              key={key}
            />
          );
        })}
      </ul>
      <button
        className={`hidden md:block p-2 ${commonLinkClasses}`}
        onClick={toggleTheme}
      >
        <FaMoon className="h-4 w-4 dark:hidden" />
        <FaSun className="h-4 w-4 hidden dark:block" />
      </button>
    </div>
  );
}

const commonLinkClasses =
  "hover:bg-slate-300 dark:hover:bg-slate-700 dark:text-slate-400 rounded-full cursor-pointer";

interface LinkProps {
  label: string;
  href: string;
}

function ExternalLink({ href, label }: LinkProps) {
  const externalLink = (
    <a href={href} target="_blank">
      <CommonListItem label={label} />
    </a>
  );
  return externalLink;
}

function HashLinkComponent({ href, label }: LinkProps) {
  const hashLink = (
    <HashLink to={href} smooth>
      <CommonListItem label={label} />
    </HashLink>
  );
  return hashLink;
}

function RegularLink({ href, label }: LinkProps) {
  const regularLink = (
    <Link to={href}>
      <CommonListItem label={label} />
    </Link>
  );
  return regularLink;
}

function CommonListItem({ label }: { label: string }) {
  return (
    <li
      className={`py-1 px-2 text-center w-full text-lg font-medium ${commonLinkClasses}`}
    >
      {label}
    </li>
  );
}
