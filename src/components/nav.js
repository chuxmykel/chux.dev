import React, { useState, useContext } from "react";
import {
  FaExternalLinkAlt,
  FaHamburger,
  FaMoon,
  FaSun,
  FaWindowClose,
} from "react-icons/fa";
import { Link } from "gatsby";

import { ThemeContext } from "../context/theme.context";
import { Logo } from "./logo";

export function Nav() {
  const menuItems = [
    { label: "Blog", href: "/blog" },
    { label: "Contact Me", href: "/#contact-me", isHashLink: true },
    { label: "About", href: "/about" },
    // {
    //   label: "Résumé",
    //   href: "https://resume.io/r/8lllV55Xh",
    //   external: true,
    // },
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
            {!showMenu && (
              <FaHamburger
                className={hamburgerClasses}
                aria-label="Open hamburger menu"
              />
            )}
            {showMenu && (
              <FaWindowClose
                className={hamburgerClasses}
                aria-label="Close menu"
              />
            )}
          </button>
        </div>
        {showMenu && (
          <nav className="mt-2 absolute right-2 w-auto z-50">
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

function Menu({ menuItems }) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex items-center gap-4">
      <ul className="flex flex-col items-center justify-center bg-slate-100 dark:bg-gray-900 rounded-md w-64 p-8 md:hidden">
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

        <button
          className="flex w-full justify-center pt-2"
          onClick={toggleTheme}
          aria-label="Dark mode toggle"
        >
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
        aria-label="Dark mode toggle"
      >
        <FaMoon className="h-4 w-4 dark:hidden" />
        <FaSun className="h-4 w-4 hidden dark:block" />
      </button>
    </div>
  );
}

const commonLinkClasses =
  "hover:bg-slate-300 dark:hover:bg-slate-700 dark:text-slate-400 rounded-full cursor-pointer";

function ExternalLink({ href, label }) {
  const externalLink = (
    <CommonListItem>
      <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-1">
        <span>{label}</span>
        <FaExternalLinkAlt className="h-3 w-3" />
      </a>
    </CommonListItem>
  );
  return externalLink;
}

function HashLinkComponent({ href, label }) {
  const hashLink = (
    <CommonListItem>
      <a href={href}>
        {label}
      </a>
    </CommonListItem>
  );
  return hashLink;
}

function RegularLink({ href, label }) {
  const regularLink = (
    <CommonListItem>
      <Link to={href}>{label}</Link>
    </CommonListItem>
  );
  return regularLink;
}

function CommonListItem({ children }) {
  return (
    <li
      className={`py-1 px-2 text-center w-fit text-lg font-medium ${commonLinkClasses}`}
    >
      {children}
    </li>
  );
}
