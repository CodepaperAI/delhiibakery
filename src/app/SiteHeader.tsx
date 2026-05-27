"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChefHat, MessageCircle } from "lucide-react";
import { brandName, getWhatsAppHref } from "./siteData";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/master-bases", label: "Bases" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand-mark" aria-label={`${brandName} home`}>
          <span className="brand-icon" aria-hidden="true">
            <ChefHat size={16} strokeWidth={2} />
          </span>
          <span>{brandName}</span>
        </Link>
        <nav className="site-nav hidden md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={`template-nav-link ${isActive(item.href) ? "is-active" : ""}`}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={getWhatsAppHref()}
          target="_blank"
          rel="noreferrer"
          className="gold-button header-quote-button"
        >
          <span className="header-whatsapp-label">Contact us</span>
          <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </div>
      <nav className="site-mobile-nav md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={`template-nav-link shrink-0 ${isActive(item.href) ? "is-active" : ""}`}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
