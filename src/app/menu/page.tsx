import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, PackageCheck, Search } from "lucide-react";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { StickyQuoteCta } from "../StickyQuoteCta";
import {
  brandName,
  commercialTerms,
  getWhatsAppHref,
  images,
  menuCategories,
} from "../siteData";

export const metadata: Metadata = {
  title: `Wholesale Menu | ${brandName}`,
  description:
    "Wholesale master bases, ready curries, snacks, chutneys, and sauces for Ontario restaurants.",
};

const whatsappHref = getWhatsAppHref(
  "Hi Delhi Foods & Curries, I would like a wholesale menu quote for my restaurant.",
);

export default function MenuPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="page-hero menu-hero">
        <Image
          src={images.spices}
          alt="Indian spices and curry ingredients"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label">Wholesale menu</p>
          <h1>Bases, curries, snacks, and chutneys for service.</h1>
          <p>
            Commercial packs organized for quick scanning and fast WhatsApp
            quote requests.
          </p>
          <div className="page-hero-actions">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
              Ask for quote
              <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <Link href="/master-bases" className="dark-outline-button">
              Understand master bases
            </Link>
          </div>
        </div>
      </section>

      <section className="cream-section food-pattern">
        <div className="menu-jump-grid">
          {menuCategories.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="menu-jump-card">
              <span>
                <Search size={16} strokeWidth={1.8} aria-hidden="true" />
                {category.title}
              </span>
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="dark-menu-section page-menu-board">
        <div className="section-heading is-inverted">
          <div>
            <p className="section-label">Quote-ready menu board</p>
            <h2>Scan categories, then send your volume.</h2>
            <p>
              Prices are a starting point for commercial conversations. Final
              availability, volume, and timing are confirmed directly.
            </p>
          </div>
        </div>

        <div className="menu-board-list">
          {menuCategories.map((category, index) => (
            <article key={category.id} id={category.id} className="menu-board-card">
              <div className="menu-board-image">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
                <span>0{index + 1}</span>
              </div>

              <div className="menu-board-copy">
                <p className="section-label">Wholesale category</p>
                <h2>{category.title}</h2>
                <p>{category.intro}</p>
                <div className="menu-price-table" aria-label={`${category.title} pricing`}>
                  <div className="menu-price-row menu-price-head">
                    <span>Item</span>
                    <span>Price</span>
                    <span>Pack</span>
                    <span>Total</span>
                  </div>
                  {category.items.map((item) => (
                    <div key={item.name} className="menu-price-row">
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.unit}</small>
                      </span>
                      <span>{item.price}</span>
                      <span>{item.packSize}</span>
                      <span>{item.bucketPrice}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="terms-section food-pattern">
        <div className="section-heading">
          <div>
            <p className="section-label">Commercial terms</p>
            <h2>Built for confirmed restaurant orders.</h2>
            <p>
              The menu starts a quote conversation instead of acting like a
              retail cart.
            </p>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
            Start quote
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

        <div className="terms-grid">
          {commercialTerms.map((term) => (
            <div key={term} className="terms-card">
              <PackageCheck size={17} strokeWidth={1.8} aria-hidden="true" />
              <span>{term}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <p className="section-label">Ready to order?</p>
        <h2>Send the items, volume, and pickup or delivery timing.</h2>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
          Start wholesale quote
          <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </section>

      <SiteFooter />
      <StickyQuoteCta href={whatsappHref} />
    </main>
  );
}
