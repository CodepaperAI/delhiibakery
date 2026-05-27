import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  ChefHat,
  Clock3,
  MessageCircle,
  PackageCheck,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { QuoteForm } from "./QuoteForm";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StickyQuoteCta } from "./StickyQuoteCta";
import { SupplyDetails } from "./SupplyDetails";
import {
  getWhatsAppHref,
  images,
  menuCategories,
  restaurantBenefits,
} from "./siteData";

const whatsappHref = getWhatsAppHref();

const categoryCards = [
  {
    title: "Master bases",
    text: "Concentrated gravies",
    meta: "10 kg packs",
    image: menuCategories[0].image,
    href: "/menu#master-bases",
  },
  {
    title: "Ready curries",
    text: "Restaurant service packs",
    meta: "Dal, chana, rajma",
    image: menuCategories[1].image,
    href: "/menu#ready-curries",
  },
  {
    title: "Snacks",
    text: "Samosas, patties, pakoras",
    meta: "50 pc packs",
    image: menuCategories[2].image,
    href: "/menu#snacks",
  },
  {
    title: "Chutneys",
    text: "Sauces, dips, chaat support",
    meta: "Bulk buckets",
    image: menuCategories[3].image,
    href: "/menu#chutneys",
  },
];

const promoCards = [
  {
    label: "Sample first",
    title: "Taste the bases before you scale the order.",
    text: "Start with a kitchen-fit conversation, then confirm volume once your team knows the finish.",
    image: images.gravy,
    href: "/contact",
  },
  {
    label: "Menu expansion",
    title: "3 core bases can support 30+ curry directions.",
    text: "Build makhni, kadhai, lababdar, tikka masala, korma, jalfrezi, and more.",
    image: images.curry,
    href: "/master-bases",
  },
];

const featuredProducts = [
  {
    title: "Makhni Gravy",
    price: "$11.99",
    unit: "per kg",
    image: images.gravy,
    href: "/menu#master-bases",
  },
  {
    title: "Dal Makhni",
    price: "$5.50",
    unit: "per kg",
    image: images.curry,
    href: "/menu#ready-curries",
  },
  {
    title: "Samosa",
    price: "$0.80",
    unit: "per pc",
    image: images.sides,
    href: "/menu#snacks",
  },
  {
    title: "Mint Chutney",
    price: "$8.89",
    unit: "per kg",
    image: images.spices,
    href: "/menu#chutneys",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "WhatsApp brief",
    text: "Send your menu, city, timing, and weekly volume.",
  },
  {
    icon: ChefHat,
    title: "Kitchen fit",
    text: "Align on spice, richness, portion use, and applications.",
  },
  {
    icon: PackageCheck,
    title: "Batch planning",
    text: "Confirm pack sizes, deposit, production timeline, and pickup.",
  },
  {
    icon: Clock3,
    title: "Service ready",
    text: "Use dependable bases and curries during busy shifts.",
  },
];

const testimonials = [
  {
    quote:
      "The bases helped our team keep the same taste through lunch rush and dinner prep.",
    name: "Restaurant owner",
    role: "Brampton",
  },
  {
    quote:
      "We added more curry options without adding another full prep day to the kitchen.",
    name: "Catering operator",
    role: "GTA",
  },
  {
    quote:
      "The WhatsApp quote flow is fast. We can discuss quantity and timing without back and forth.",
    name: "Takeout kitchen",
    role: "Ontario",
  },
];

const faqItems = [
  {
    question: "What kind of food does Delhi Foods supply?",
    answer:
      "Restaurant-ready curry bases, prepared curries, snacks, chutneys, dips, and sauces for commercial foodservice kitchens.",
  },
  {
    question: "Can I request samples?",
    answer:
      "Yes. Sample conversations are handled on WhatsApp so both sides can check kitchen fit before scaling.",
  },
  {
    question: "How long does production take?",
    answer:
      "Production is typically planned around approximately 7 days from deposit confirmation.",
  },
  {
    question: "Are the products retail packaged?",
    answer:
      "No. The current offer is built for restaurant and commercial foodservice use.",
  },
];

const supplyDetails = [
  {
    title: "Custom spice levels",
    body: "Discuss heat level, richness, and finish so supply matches your restaurant style.",
  },
  {
    title: "Recurring supply planning",
    body: "Plan weekly or event-based batches around service rhythm, volume, and storage.",
  },
  {
    title: "Sample conversations",
    body: "Start with a short WhatsApp brief, then align on product family and order fit.",
  },
  {
    title: "Restaurant volume orders",
    body: "Quote requests can include curries, gravy foundations, chutneys, sides, and custom batches.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section id="top" className="home-hero">
        <div className="hero-media">
          <Image
            src={images.hero}
            alt="Indian curry served with naan for restaurant supply"
            fill
            priority
            sizes="100vw"
            className="hero-photo object-cover"
          />
        </div>

        <div className="home-hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker reveal">
              <span>Ontario restaurant supply</span>
              <span>Commercial foodservice</span>
            </div>
            <h1 className="hero-title reveal reveal-delay-1">
              <span>Satisfy busy</span>
              <span>kitchens with</span>
              <span>ready curry</span>
              <span>supply.</span>
            </h1>
            <p className="hero-deck reveal reveal-delay-2">
              Bulk bases, curries, snacks, and chutneys for restaurants that
              need consistent flavour without rebuilding every batch from scratch.
            </p>
            <div className="hero-actions reveal reveal-delay-3">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
                Request quote
                <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </a>
              <Link href="/menu" className="dark-outline-button">
                View wholesale menu
              </Link>
            </div>
          </div>

          <div className="hero-showcase" aria-hidden="true">
            <div className="hero-showcase-card hero-showcase-main">
              <Image
                src={images.curry}
                alt=""
                fill
                sizes="(min-width: 1024px) 26vw, 70vw"
                className="object-cover"
              />
            </div>
            <div className="hero-showcase-card hero-showcase-top">
              <Image
                src={images.sides}
                alt=""
                fill
                sizes="(min-width: 1024px) 12vw, 34vw"
                className="object-cover"
              />
            </div>
            <div className="hero-showcase-card hero-showcase-bottom">
              <Image
                src={images.gravy}
                alt=""
                fill
                sizes="(min-width: 1024px) 13vw, 38vw"
                className="object-cover"
              />
            </div>
            <div className="hero-badge">
              <span>30+</span>
              <small>curry directions</small>
            </div>
          </div>
        </div>
      </section>

      <section className="cream-section food-pattern">
        <div className="section-heading center">
          <p className="section-label">Discover our food categories</p>
          <h2>Source the product family your kitchen needs.</h2>
          <p>
            A quick-scan range for Indian restaurants, takeout kitchens, and
            catering teams.
          </p>
        </div>

        <div className="category-showcase">
          {categoryCards.map((item) => (
            <Link key={item.title} href={item.href} className="category-tile">
              <span className="category-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="object-cover"
                />
              </span>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
              <small>{item.meta}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="promo-strip food-pattern">
        <div className="promo-grid">
          {promoCards.map((card) => (
            <Link key={card.title} href={card.href} className="promo-card group">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="zoom-photo object-cover"
              />
              <span className="promo-card-shade" />
              <span className="promo-card-copy">
                <small>{card.label}</small>
                <strong>{card.title}</strong>
                <em>{card.text}</em>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="popular-products" className="dark-menu-section product-feature-section theme-dark-section">
        <div className="section-heading is-inverted product-feature-heading">
          <div>
            <p className="section-label product-section-kicker theme-dark-kicker">Find your best kitchen fit</p>
            <h2 className="theme-dark-title">Popular wholesale products.</h2>
            <p className="product-section-copy theme-dark-copy">
              Start with the fastest-moving families, then build a quote around
              your actual service rhythm.
            </p>
          </div>
          <Link href="/menu" className="gold-button product-section-button theme-gold-button">
            Browse full menu
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((item) => (
            <Link key={item.title} href={item.href} className="product-card">
              <span className="product-photo">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </span>
              <span className="product-price">{item.price}</span>
              <strong>{item.title}</strong>
              <small>{item.unit}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-section food-pattern">
        <div className="story-layout">
          <div className="story-stats">
            <span><strong>50-60</strong> day shelf life with proper storage</span>
            <span><strong>7</strong> day approx. production timeline</span>
            <span><strong>10kg</strong> commercial bucket planning</span>
          </div>
          <div className="story-card">
            <p className="section-label">More than just food</p>
            <h2>It is a repeatable kitchen system.</h2>
            <p>
              Your cooks finish, season, and serve. The foundation stays
              dependable across shifts, batches, and locations.
            </p>
            <Link href="/master-bases" className="ghost-link">
              Explore master bases
              <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
          <div className="story-photo">
            <Image
              src={images.table}
              alt="Indian dishes on a restaurant table"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="process-band">
        {processSteps.map((step) => {
          const Icon = step.icon;
          return (
            <article key={step.title} className="process-step">
              <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </article>
          );
        })}
      </section>

      <section id="operations" className="dark-supply-section theme-dark-section">
        <div className="section-heading is-inverted">
          <div>
            <p className="section-label theme-dark-kicker">Catering cravings for every celebration</p>
            <h2 className="theme-dark-title">Designed for busy restaurant operations.</h2>
          </div>
          <p className="theme-dark-copy">
            The same system can support dine-in menus, takeout packs, catering,
            and event batches.
          </p>
        </div>
        <div className="benefit-grid">
          {restaurantBenefits.slice(0, 6).map((benefit) => (
            <div key={benefit} className="benefit-card">
              <CheckCircle2 size={18} strokeWidth={1.8} aria-hidden="true" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-heading">
          <div>
            <p className="section-label">Here is what operators ask for</p>
            <h2>Consistency, speed, and practical ordering.</h2>
          </div>
          <div className="rating-pill">
            <Star size={18} fill="currentColor" aria-hidden="true" />
            <span>Built for B2B kitchens</span>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <Quote size={24} strokeWidth={1.5} aria-hidden="true" />
              <p>{item.quote}</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lens-section food-pattern">
        <div className="section-heading center">
          <p className="section-label">Taste through the lens</p>
          <h2>Visual menu families, built for fast scanning.</h2>
        </div>
        <div className="reference-collage">
          <div className="collage-photo small">
            <Image src={images.spices} alt="Bulk spices" fill sizes="180px" className="object-cover" />
          </div>
          <div className="collage-photo tall">
            <Image src={images.sides} alt="Snacks and chutneys" fill sizes="220px" className="object-cover" />
          </div>
          <div className="collage-photo hero">
            <Image src={images.curry} alt="Ready curry supply" fill sizes="420px" className="object-cover" />
          </div>
          <div className="collage-stat">
            <strong>30+</strong>
            <span>curries from base systems</span>
          </div>
          <div className="collage-photo square">
            <Image src={images.gravy} alt="Master gravy base" fill sizes="190px" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-layout">
          <div className="faq-photo">
            <Image
              src={images.restaurant}
              alt="Restaurant dining room"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="section-label">Frequently asked questions</p>
            <h2>Before you request a quote.</h2>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="quote-section food-pattern">
        <div className="quote-layout">
          <div>
            <p className="section-label">Request a quote</p>
            <h2>Send your kitchen needs. We will continue on WhatsApp.</h2>
            <SupplyDetails items={supplyDetails} />
          </div>
          <div className="quote-panel">
            <BadgePercent size={24} strokeWidth={1.7} aria-hidden="true" />
            <QuoteForm />
          </div>
        </div>
      </section>

      <section className="update-strip">
        <div className="update-card">
          <div className="update-photo">
            <Image src={images.service} alt="Restaurant service" fill sizes="220px" className="object-cover" />
          </div>
          <div>
            <p className="section-label">Stay ready for service</p>
            <h2>Plan recurring batches before the next rush.</h2>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="gold-button">
            WhatsApp us
            <Sparkles size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </section>

      <SiteFooter />
      <StickyQuoteCta href={whatsappHref} />
    </main>
  );
}
