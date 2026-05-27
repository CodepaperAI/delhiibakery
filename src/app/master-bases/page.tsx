import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  Clock3,
  Flame,
  MessageCircle,
  PackageCheck,
} from "lucide-react";
import { SiteFooter } from "../SiteFooter";
import { SiteHeader } from "../SiteHeader";
import { StickyQuoteCta } from "../StickyQuoteCta";
import {
  baseApplications,
  brandName,
  curryPossibilities,
  getWhatsAppHref,
  images,
  masterBaseNames,
  restaurantBenefits,
} from "../siteData";

export const metadata: Metadata = {
  title: `Master Bases | ${brandName}`,
  description:
    "Master curry base gravies for Indian restaurants, cloud kitchens, catering, hotels, and takeaways in Ontario.",
};

const whatsappHref = getWhatsAppHref(
  "Hi Delhi Foods & Curries, I would like to test master bases for my restaurant.",
);

const baseWorkflow = [
  {
    icon: ChefHat,
    title: "Choose a base",
    text: "Start with makhni, brown, chop masala, or nut-based richness.",
  },
  {
    icon: Flame,
    title: "Finish your dish",
    text: "Add protein, vegetables, spice, cream, texture, and garnish.",
  },
  {
    icon: Clock3,
    title: "Serve faster",
    text: "Keep the flavour foundation dependable during busy service.",
  },
];

export default function MasterBasesPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="page-hero bases-hero">
        <Image
          src={images.gravy}
          alt="Curry gravy base in a restaurant bowl"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="section-label">Master bases</p>
          <h1>3 master bases. 30+ authentic curry directions.</h1>
          <p>
            Professional Indian curry base gravies for restaurants, cloud
            kitchens, catering, hotels, and takeaways that need consistency
            without chef dependency.
          </p>
          <div className="page-hero-actions">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
              Ask for sample
              <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <Link href="/menu#master-bases" className="dark-outline-button">
              See base pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="cream-section food-pattern">
        <div className="section-heading">
          <div>
            <p className="section-label">Kitchen transformation</p>
            <h2>Cook complex curry menus in minutes.</h2>
            <p>
              The base gravies are concentrated foundations. Your kitchen
              finishes them with proteins, vegetables, seasoning, and final texture.
            </p>
          </div>
          <Link href="/menu#master-bases" className="gold-button">
            View prices
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="base-showcase-grid">
          {masterBaseNames.map((base, index) => (
            <article key={base} className="base-showcase-card">
              <span>0{index + 1}</span>
              <strong>{base}</strong>
              <small>Commercial curry foundation</small>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section bases-story food-pattern">
        <div className="story-layout">
          <div className="story-card">
            <p className="section-label">How restaurants use it</p>
            <h2>One base system, many finishing styles.</h2>
            <p>
              Build Shahi, Lababdar, Kadhai, Tikka Masala, Korma, Jalfrezi,
              and more from dependable commercial gravies.
            </p>
          </div>
          <div className="story-photo">
            <Image
              src={images.curry}
              alt="Finished curry dish"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="workflow-stack">
            {baseWorkflow.map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="workflow-card">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="curry-range" className="dark-menu-section">
        <div className="section-heading is-inverted center">
          <p className="section-label">Curry range</p>
          <h2>Many restaurant menu directions from fewer prep systems.</h2>
        </div>
        <div className="curry-chip-grid">
          {curryPossibilities.map((curry) => (
            <span key={curry} className="curry-chip">
              {curry}
            </span>
          ))}
        </div>
        <div className="application-row">
          {baseApplications.map((item) => (
            <span key={item} className="application-pill">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="split-showcase operations-showcase">
        <div className="relative min-h-[520px]">
          <Image
            src={images.service}
            alt="Restaurant kitchen and dining service"
            fill
            sizes="50vw"
            className="split-photo object-cover"
          />
        </div>
        <div className="black-panel">
          <p className="eyebrow-gold">Why restaurants choose this</p>
          <h2>Less prep pressure. More consistent service.</h2>
          <ul className="benefit-list">
            {restaurantBenefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2
                  size={17}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                {benefit}
              </li>
            ))}
          </ul>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
            Test in your kitchen
            <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="cta-band">
        <PackageCheck size={26} strokeWidth={1.7} aria-hidden="true" />
        <p className="section-label">Ready for samples?</p>
        <h2>Send your menu and we will discuss the best base fit.</h2>
        <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
          WhatsApp master bases
          <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
        </a>
      </section>

      <SiteFooter />
      <StickyQuoteCta href={whatsappHref} />
    </main>
  );
}
