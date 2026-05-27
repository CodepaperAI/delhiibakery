"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

type StickyQuoteCtaProps = {
  href: string;
};

export function StickyQuoteCta({ href }: StickyQuoteCtaProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function updateVisibility() {
      setIsVisible(window.scrollY > 520);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`mobile-sticky-cta ${isVisible ? "is-visible" : ""}`}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      WhatsApp quote
      <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
    </a>
  );
}
