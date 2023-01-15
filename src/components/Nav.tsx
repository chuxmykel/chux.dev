import { useState } from "react";
import { FaHamburger, FaMoon, FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
  return (
    <>
      <header className="max-sm:px-0 px-4 md:hidden">
        <div className="flex justify-between items-center">
          <Logo />
          <button onClick={toggleMenu}>
            {!showMenu && <FaHamburger className="h-8 w-8" />}
            {showMenu && <FaWindowClose className="h-8 w-8" />}
          </button>
        </div>
        {showMenu && (
          <nav className="mt-2 absolute -right-2 w-auto" onClick={toggleMenu}>
            <Menu menuItems={menuItems} />
          </nav>
        )}
      </header>

      <header className="hidden md:block px-2">
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
  return (
    <div className="flex justify-end items-center gap-1">
      <ul className="bg-slate-100 rounded-md w-64 p-8 md:hidden">
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

        <div className="flex justify-center pt-2">
          <div className="hover:bg-slate-100 rounded-full p-2">
            <FaMoon className="block md:hidden h-4 w-4" />
          </div>
        </div>
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
      <div className="hover:bg-slate-100 rounded-full p-2 cursor-pointer">
        <FaMoon className="hidden md:block h-4 w-4" />
      </div>
    </div>
  );
}

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
    <li className="py-1 px-3 hover:bg-slate-100 rounded-full text-center w-full text-lg font-medium">
      {label}
    </li>
  );
}