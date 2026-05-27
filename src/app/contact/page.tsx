import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { QuoteForm } from "../QuoteForm";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { StickyQuoteCta } from "../StickyQuoteCta";
import {
  address,
  brandName,
  contacts,
  email,
  getWhatsAppHref,
  images,
} from "../siteData";

export const metadata: Metadata = {
  title: `Contact | ${brandName}`,
  description:
    "Contact Delhi Foods & Curries for wholesale curry, snack, chutney, and master base supply in Ontario.",
};

const whatsappHref = getWhatsAppHref(
  "Hi Delhi Foods & Curries, I would like to discuss a wholesale order.",
);

const contactNotes = [
  "Production timeline is approximately 7 days from deposit confirmation.",
  "50% deposit confirms the order; remaining 50% is due before pickup or delivery.",
  "Products are intended for commercial food service use and may contain allergens.",
];

export default function ContactPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="contact-hero food-pattern">
        <div className="contact-hero-copy">
          <p className="section-label">Wholesale contact</p>
          <h1>Send your restaurant menu needs.</h1>
          <p>
            Share the items, quantity, timeline, and whether you need pickup or
            delivery. The fastest path is WhatsApp.
          </p>

          <div className="contact-card-grid">
            {contacts.map((contact) => (
              <a key={contact.name} href={contact.phoneHref} className="contact-card">
                <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>{contact.name}</span>
                <strong>{contact.label}</strong>
              </a>
            ))}
            <a href={`mailto:${email}`} className="contact-card">
              <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
              <span>Email</span>
              <strong>{email}</strong>
            </a>
            <div className="contact-card">
              <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
              <span>Location</span>
              <strong>
                {address.city}, {address.province}
              </strong>
            </div>
          </div>
        </div>

        <div className="contact-visual">
          <Image
            src={images.table}
            alt="Indian dishes ready for restaurant service"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="contact-float-card">
            <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
            <span>WhatsApp is fastest for quote requests.</span>
          </div>
        </div>
      </section>

      <section className="quote-section contact-quote-section">
        <div className="quote-layout">
          <div>
            <p className="section-label">Request a quote</p>
            <h2>We will continue on WhatsApp.</h2>
            <p>
              A short brief is enough to start. Include menu items, volume, and
              timing if you know it.
            </p>
          </div>
          <div className="quote-panel">
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="dark-supply-section">
        <div className="section-heading is-inverted center">
          <p className="section-label">Before you order</p>
          <h2>Commercial supply notes.</h2>
        </div>
        <div className="benefit-grid">
          {contactNotes.map((item) => (
            <div key={item} className="benefit-card">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <p className="section-label">Ready to talk?</p>
        <h2>{address.line1}, {address.city}, {address.province} {address.postal}</h2>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
          Start on WhatsApp
          <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </section>

      <SiteFooter />
      <StickyQuoteCta href={whatsappHref} />
    </main>
  );
}
