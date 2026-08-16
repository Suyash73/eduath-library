"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/logo-nav.png"
            alt="Edupath logo"
            width={140}
            height={97}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-lg font-semibold text-navy">
            Library
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-charcoal/75 transition hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={siteConfig.contact.whatsappHref}
          className="hidden rounded-full bg-maroon px-5 py-2.5 font-display text-sm font-semibold text-cream shadow-sm transition hover:bg-maroon-dark md:inline-block"
        >
          Enquire Now
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-md text-navy md:hidden"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-cream px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 font-body text-sm font-medium text-charcoal/80 transition hover:bg-navy/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <a
            href={siteConfig.contact.whatsappHref}
            className="mt-3 block rounded-full bg-maroon px-5 py-3 text-center font-display text-sm font-semibold text-cream shadow-sm transition hover:bg-maroon-dark"
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}