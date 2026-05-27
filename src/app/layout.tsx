import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Delhi Foods & Curries | Bulk Curry Supply for Ontario Restaurants",
  description:
    "Restaurant-ready curries, gravies, sauces, and sides for Indian restaurants in Ontario. Request fast bulk supply quotes by WhatsApp.",
  keywords: [
    "Delhi Foods and Curries",
    "bulk curry supplier Ontario",
    "Indian restaurant supplier",
    "restaurant curry supply",
    "B2B Indian food supplier",
  ],
  openGraph: {
    title: "Delhi Foods & Curries",
    description:
      "Bulk curry, gravy, sauce, and side supply conversations for Indian restaurants in Ontario.",
    type: "website",
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
