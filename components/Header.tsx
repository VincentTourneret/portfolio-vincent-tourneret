"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";
import { siteName } from "@/lib/config";

const navLinks = [
  { href: "#a-propos", label: "À propos" },
  { href: "#services", label: "Services" },
  { href: "#experiences", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    if (typeof document !== "undefined") {
      document.body.classList.add("is-menu-open");
    }
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    if (typeof document !== "undefined") {
      document.body.classList.remove("is-menu-open");
    }
  }, []);

  const handleToggle = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      if (typeof document !== "undefined") {
        if (next) document.body.classList.add("is-menu-open");
        else document.body.classList.remove("is-menu-open");
      }
      return next;
    });
  }, []);

  return (
    <>
      <header
        id="site-header"
        className="banner banner--scroll banner--visible animate-header-in fixed left-0 right-0 z-50 w-full"
        role="banner"
      >
        <div className="site-container">
          <div className="banner__inner relative flex w-full items-center justify-between gap-4 rounded-2xl border border-brand-light/10 px-5 py-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:px-6 sm:py-4 lg:px-8 lg:py-4">
            <Link
              href="/"
              className="brand flex items-center rounded focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
              aria-label={siteName}
            >
              <Image
                src="/images/logo.png"
                alt={siteName}
                className="h-8 w-auto sm:h-9"
                width={120}
                height={36}
                priority
              />
            </Link>

            <button
              type="button"
              id="burger-toggle"
              className="burger-trigger flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-brand-light transition-colors hover:bg-brand-light/10 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-surface lg:hidden"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
              onClick={handleToggle}
            >
              <span className="burger-icon" aria-hidden="true" />
            </button>

            <nav
              className="nav-desktop hidden lg:flex lg:items-center"
              role="navigation"
              aria-label="Navigation principale"
            >
              <ul className="nav flex list-none flex-col gap-1 lg:flex-row lg:flex-wrap lg:gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-brand-light/90 transition-colors duration-200 hover:bg-brand-light/10 hover:text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-transparent"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div
        id="nav-menu"
        className="nav-menu"
        role="navigation"
        aria-label="Navigation principale"
        aria-hidden={!menuOpen}
      >
        <div
          className="nav-menu__backdrop"
          aria-hidden="true"
          onClick={closeMenu}
          onKeyDown={(e) => e.key === "Escape" && closeMenu()}
        />
        <div className="nav-menu__panel">
          <button
            type="button"
            id="nav-menu-close"
            className="nav-menu__close flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-brand-light transition-colors hover:bg-brand-light/10 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-surface"
            aria-label="Fermer le menu"
            aria-controls="nav-menu"
            onClick={closeMenu}
          >
            <span className="nav-menu__close-icon" aria-hidden="true" />
          </button>
          <ul className="nav flex list-none flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-brand-light/90 hover:bg-brand-light/10 hover:text-brand-light"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
