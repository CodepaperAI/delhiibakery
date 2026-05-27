"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SupplyDetail = {
  title: string;
  body: string;
};

type SupplyDetailsProps = {
  items: SupplyDetail[];
};

export function SupplyDetails({ items }: SupplyDetailsProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="supply-details">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        const panelId = `supply-detail-${index}`;

        return (
          <div key={item.title} className="supply-detail-item">
            <button
              type="button"
              className="supply-detail-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={18}
                strokeWidth={1.7}
                aria-hidden="true"
                className={isOpen ? "rotate-180" : ""}
              />
            </button>
            <div
              id={panelId}
              className="supply-detail-panel"
              hidden={!isOpen}
            >
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
