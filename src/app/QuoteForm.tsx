"use client";

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import { brandName, primaryContact } from "./siteData";

export function QuoteForm() {
  const [restaurant, setRestaurant] = useState("");
  const [city, setCity] = useState("");
  const [needs, setNeeds] = useState("");

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      `Hi ${brandName}, I would like a quote for bulk curry supply.`,
      restaurant ? `Restaurant: ${restaurant}` : "",
      city ? `City: ${city}` : "",
      needs ? `Needs: ${needs}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `${primaryContact.whatsappBase}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  }

  return (
    <form className="quote-form" onSubmit={submitQuote}>
      <label>
        <span>
          Restaurant name <span aria-hidden="true">*</span>
        </span>
        <input
          name="restaurant"
          type="text"
          autoComplete="organization"
          required
          value={restaurant}
          onChange={(event) => setRestaurant(event.target.value)}
          placeholder="Your restaurant"
        />
      </label>
      <label>
        <span>City</span>
        <input
          name="city"
          type="text"
          autoComplete="address-level2"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Toronto, Brampton, Mississauga..."
        />
      </label>
      <label>
        <span>
          What do you need? <span aria-hidden="true">*</span>
        </span>
        <textarea
          name="needs"
          required
          value={needs}
          onChange={(event) => setNeeds(event.target.value)}
          placeholder="Curries, gravies, chutneys, weekly volume..."
          rows={4}
        />
      </label>
      <button type="submit">
        Send via WhatsApp
        <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
      </button>
    </form>
  );
}
