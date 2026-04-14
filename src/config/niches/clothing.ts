import { NicheConfig } from "@/lib/types/niche";

const clothing: NicheConfig = {
  slug:         "clothing",
  businessName: "KÚTU Studio",
  tagline:      "Wear the culture.",
  description:  "Contemporary African-inspired streetwear brand based in Lagos — bold prints, clean cuts, and limited drops that sell out fast.",
  logoInitials: "KS",
  category:     "Streetwear & Ready-to-Wear",

  colors: {
    primary:   "#1a1a1a",   // near-black — sharp, editorial
    secondary: "#0d0d0d",   // deep black
    accent:    "#f0ede8",   // warm off-white
    bg:        "#fafaf9",   // clean warm white
    text:      "#0d0d0d",
  },

  navLinks: ["Home", "Men", "Women", "Drops", "Shop Now"],

  hero: {
    heading:    "Dress Like You Mean It.",
    subheading: "Limited drops of African-inspired streetwear. Designed in Lagos. Worn everywhere. Each piece ships within 48 hours.",
    ctaText:    "Shop the Drop",
    ctaLink:    "#products",
    badgeText:  "New drop every month — limited stock",
  },

  products: [
    {
      name:  "Oversized Graphic Tee",
      price: "From \u20a615,000",
      tag:   "New Drop",
      icon:  "Shirt",
      desc:  "Premium 280gsm cotton tees with hand-drawn Lagos-inspired prints. Unisex fit.",
    },
    {
      name:  "Ankara Co-ord Set",
      price: "From \u20a638,000",
      tag:   "Bestseller",
      icon:  "Sparkles",
      desc:  "Matching two-piece sets in vibrant Ankara fabric. Available in 6 colourways.",
    },
    {
      name:  "Cargo Trousers",
      price: "From \u20a628,000",
      tag:   "",
      icon:  "Package",
      desc:  "Heavy-duty twill cargos with custom hardware. Structured fit, built to last.",
    },
    {
      name:  "Drop Bundle",
      price: "\u20a665,000",
      tag:   "Best Value",
      icon:  "Gift",
      desc:  "Full look — tee, trousers, and accessories curated from our latest drop. Styled and ready.",
    },
  ],

  testimonials: [
    {
      name:  "Dami A.",
      text:  "I wore the co-ord set to a concert and got stopped three times asking where it was from. KUTU doesn't miss.",
      stars: 5,
    },
    {
      name:  "Femi O.",
      text:  "The quality is insane for the price. The graphic tee has been through 20 washes and still looks fresh.",
      stars: 5,
    },
    {
      name:  "Zara K.",
      text:  "Finally a Lagos brand that ships on time and packages like it actually cares. Will always buy from KUTU.",
      stars: 5,
    },
  ],

  about: {
    heading: "Made in Lagos. Built for the World.",
    body:
      "KUTU Studio was born out of frustration — Lagos has incredible style but nowhere to buy clothes that actually reflect it. " +
      "We design in-house, source premium fabrics locally, and produce in small batches so nothing is wasted. " +
      "Every piece is a statement. Wear it like one.",
  },

  stats: [
    { num: "3k+",   label: "Orders fulfilled" },
    { num: "4.9\u2605", label: "Average rating" },
    { num: "Monthly", label: "New drops" },
  ],

  ctaBanner: {
    heading: "The Next Drop Sells Out Fast.",
    sub:     "Follow us on Instagram to get early access before it goes live.",
    btnText: "Shop Current Drop",
  },

  footer: {
    tagline: "Wear the culture. \u00a9 2024 KUTU Studio Lagos",
    links:   ["Size Guide", "Shipping Info", "Returns", "Instagram", "WhatsApp Us"],
  },
};

export default clothing;
