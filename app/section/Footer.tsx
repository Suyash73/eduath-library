import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Membership", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQs", href: "#faqs" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy px-6 py-14 text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
        <div>
          <Image
            src="/logo-nav.png"
            alt="Edupath logo"
            width={140}
            height={97}
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A dedicated self-study space in Vaishali &mdash; quiet,
            comfortable and reliable, every day.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-light">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{siteConfig.location.line}</li>
            <li>
              <a href={siteConfig.contact.phoneHref} className="hover:text-cream">
                {siteConfig.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.contact.whatsappHref} className="hover:text-cream">
                WhatsApp Us
              </a>
            </li>
            <li>
              {siteConfig.hours.open} &ndash; {siteConfig.hours.close}, daily
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-gold-light">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-cream">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-cream/15 pt-6 text-xs text-cream/60">
        &copy; {new Date().getFullYear()} Edupath Library. All rights reserved.
      </div>
    </footer>
  );
}