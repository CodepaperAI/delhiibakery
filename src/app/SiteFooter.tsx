import Link from "next/link";
import { ChefHat, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { address, brandName, contacts, email, getWhatsAppHref } from "./siteData";

export function SiteFooter() {
  return (
    <footer className="footer-template">
      <div className="footer-grid mx-auto max-w-7xl px-4 py-14">
        <div className="footer-brand-block">
          <p className="brand-mark text-white">
            <span className="brand-icon" aria-hidden="true">
              <ChefHat size={16} strokeWidth={2} />
            </span>
            <span>{brandName}</span>
          </p>
          <p className="mt-5 max-w-sm leading-7 text-white/62">
            Bulk curry, gravy, snack, and chutney supply for Indian restaurants
            across Ontario.
          </p>
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noreferrer"
            className="footer-quote-button"
          >
            WhatsApp quote
            <MessageCircle size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-link-group">
          <p className="footer-title">Quick links</p>
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/menu" className="footer-link">Wholesale menu</Link>
          <Link href="/master-bases" className="footer-link">Master bases</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-link-group">
          <p className="footer-title">Contact</p>
          {contacts.map((contact) => (
            <a key={contact.name} href={contact.phoneHref} className="footer-link">
              <Phone size={14} strokeWidth={1.8} aria-hidden="true" />
              {contact.label}
            </a>
          ))}
          <a href={`mailto:${email}`} className="footer-link">
            <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
            {email}
          </a>
          <span className="footer-link">
            <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
            {address.city}, {address.province}
          </span>
        </div>
      </div>
      <div className="footer-bottom mx-auto max-w-7xl px-4">
        <span>Commercial foodservice supply only.</span>
        <span>{address.line1}, {address.city}, {address.province} {address.postal}</span>
      </div>
    </footer>
  );
}
