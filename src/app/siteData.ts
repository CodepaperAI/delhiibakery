export const brandName = "Delhi Foods & Curries";

export const address = {
  line1: "2500 Williams Parkway, Unit 6-7",
  city: "Brampton",
  province: "ON",
  postal: "L6S 5M9",
};

export const email = "vishal@codepaper.com";

export const contacts = [
  {
    name: "Abhi",
    label: "(647) 822-7265",
    phoneHref: "tel:+16478227265",
    whatsappBase: "https://wa.me/16478227265",
  },
  {
    name: "Goldy",
    label: "(647) 924-8959",
    phoneHref: "tel:+16479248959",
    whatsappBase: "https://wa.me/16479248959",
  },
];

export const primaryContact = contacts[0];

export function getWhatsAppHref(message?: string) {
  const text =
    message ??
    "Hi Delhi Foods & Curries, I would like a quote for bulk curry supply for my restaurant in Ontario.";

  return `${primaryContact.whatsappBase}?text=${encodeURIComponent(text)}`;
}

export const images = {
  hero:
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=2400&q=90",
  curry:
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1500&q=88",
  gravy:
    "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&w=1500&q=88",
  sides:
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1500&q=88",
  spices:
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=88",
  table:
    "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1800&q=88",
  restaurant:
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=88",
  service:
    "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1800&q=88",
};

export type MenuItem = {
  name: string;
  price: string;
  unit: string;
  packSize: string;
  bucketPrice: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  intro: string;
  image: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "master-bases",
    title: "Master bases",
    intro:
      "Concentrated restaurant gravy bases designed to become many finished curries with your proteins, vegetables, and final seasoning.",
    image: images.gravy,
    items: [
      {
        name: "Makhni Gravy (Nut Free)",
        price: "$11.99",
        unit: "Per Kg",
        packSize: "10 Kg",
        bucketPrice: "$119.90",
      },
      {
        name: "Brown Gravy",
        price: "$10.99",
        unit: "Per Kg",
        packSize: "10 Kg",
        bucketPrice: "$109.90",
      },
      {
        name: "Chop Masala Gravy",
        price: "$10.99",
        unit: "Per Kg",
        packSize: "10 Kg",
        bucketPrice: "$109.90",
      },
      {
        name: "Makhni Gravy (with Nuts)",
        price: "$12.99",
        unit: "Per Kg",
        packSize: "10 Kg",
        bucketPrice: "$129.90",
      },
    ],
  },
  {
    id: "ready-curries",
    title: "Ready to go curries",
    intro:
      "Prepared curries and sauces for commercial kitchens that need dependable taste and faster line prep.",
    image: images.curry,
    items: [
      { name: "Dal Makhni", price: "$5.50", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$55.00" },
      { name: "Amritsari Dal", price: "$6.00", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$60.00" },
      { name: "Chana Masala", price: "$5.25", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$52.50" },
      { name: "Kadhi Gravy", price: "$5.25", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$52.50" },
      { name: "Kadhi Pakora", price: "$0.30", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$15.00" },
      { name: "Rajma Masala", price: "$8.00", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$80.00" },
      { name: "Pindi Chana", price: "$8.00", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$80.00" },
      { name: "Rogan Josh Curry", price: "$6.25", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$62.50" },
      { name: "Spinach Curry", price: "$9.00", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$90.00" },
      { name: "Tikka Masala Sauce", price: "$7.00", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$70.00" },
      { name: "Veg Sauce", price: "$6.25", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$62.50" },
      { name: "Chaap Masala", price: "$6.50", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$65.00" },
      { name: "Kadhai Masala", price: "$7.10", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$71.00" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    intro:
      "Bulk snacks for chaat menus, takeout combos, event catering, and quick-service Indian restaurants.",
    image: images.sides,
    items: [
      { name: "Samosa", price: "$0.80", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$40.00" },
      { name: "Aloo Parantha", price: "$3.40", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$170.00" },
      { name: "Gobhi Parantha", price: "$3.74", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$187.00" },
      { name: "Lahsooni Cauliflower", price: "$8.40", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$84.00" },
      { name: "Veg Pakora", price: "$8.40", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$84.00" },
      { name: "Aloo Tikki for Burger", price: "$0.85", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$42.50" },
      { name: "Veg Momos", price: "$0.60", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$30.00" },
      { name: "Veg Biryani", price: "$9.50", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$95.00" },
      { name: "Aloo Tikki for Chaat", price: "$1.05", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$52.50" },
      { name: "Manchurian Balls", price: "$0.35", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$17.50" },
      { name: "Raj Kachori", price: "$2.90", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$145.00" },
      { name: "Amritsari Kulcha", price: "$3.89", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$194.50" },
      { name: "Aloo Patty", price: "$1.79", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$89.50" },
      { name: "Chilli Paneer Patty", price: "$1.99", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$99.50" },
      { name: "Noodle Patty", price: "$1.99", unit: "Per Pc", packSize: "50 Pcs", bucketPrice: "$99.50" },
    ],
  },
  {
    id: "chutneys",
    title: "Chutneys and sauces",
    intro:
      "Bulk chutneys, dips, and sauces for chaat, snacks, appetizers, and restaurant service.",
    image: images.spices,
    items: [
      { name: "Saunth Chutney", price: "$8.89", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$88.90" },
      { name: "Mint Chutney", price: "$8.89", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$88.90" },
      { name: "Imli Pyaz Chutney", price: "$8.89", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$88.90" },
      { name: "House Garlic Sauce", price: "$5.30", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$53.00" },
      { name: "Changezi Sauce", price: "$7.30", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$73.00" },
      { name: "Garlic Dip", price: "$8.89", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$88.90" },
      { name: "Tomato Dip", price: "$8.89", unit: "Per Kg", packSize: "10 Kg", bucketPrice: "$88.90" },
    ],
  },
];

export const masterBaseNames = [
  "Makhni Gravy (Nut Free)",
  "Brown Gravy",
  "Chop Masala Gravy",
  "Makhni Gravy (With Nuts)",
];

export const curryPossibilities = [
  "Shahi",
  "Lababdar",
  "Butter Masala",
  "Dhaniya Adraki",
  "Malai Kofta",
  "Khurchan",
  "Do Pyaza",
  "Kadhai",
  "Patiala",
  "Punjabi",
  "Amritsari",
  "Beliram",
  "Desi Ghee",
  "Ghee Roast",
  "Mutton Gravy",
  "Keema",
  "Tikka Masala",
  "Tawa",
  "Achari",
  "Rara",
  "Korma",
  "Curry",
  "Lehsuni",
  "Mix Veg",
  "Navrattan",
  "Jalfrezi",
];

export const baseApplications = [
  "Paneer",
  "Chicken",
  "Lamb",
  "Prawns",
  "Fish",
  "Veg",
  "Mutton",
  "Beef",
];

export const restaurantBenefits = [
  "Line cook can produce chef-level results",
  "5-7 minute prep compared with long scratch prep",
  "Consistent taste across batches and shifts",
  "Lower labor pressure in busy kitchens",
  "No daily onion prep or masala grinding",
  "Approximately 50-60 day shelf life with proper storage",
  "Expand menu variety without rebuilding every base",
];

export const commercialTerms = [
  "Production timeline is approximately 7 days from deposit confirmation.",
  "50% deposit required to confirm order.",
  "Remaining 50% due before pickup or delivery.",
  "Applicable HST is 13%.",
  "Products are for commercial food service use only.",
  "Master gravies are concentrated bases and must be diluted or customized by the customer.",
  "Products may contain dairy, nuts, gluten, soy, and other allergens.",
  "Prices and availability are subject to change without notice.",
];
