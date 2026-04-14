import { NicheConfig } from "@/lib/types/niche";

const cake: NicheConfig = {
  slug:         "cake",
  businessName: "CrumbCo Bakery",
  tagline:      "Baked with love. Remembered forever.",
  description:  "Lagos-based custom cake studio specialising in celebration cakes, cupcakes, and dessert tables for weddings, birthdays, and corporate events.",
  logoInitials: "CB",
  category:     "Custom Cakes & Pastries",

  colors: {
    primary:   "#b5472a",   // burnt rose — warm, elegant
    secondary: "#1f0f0a",   // deep espresso
    accent:    "#fdf3ee",   // soft blush cream
    bg:        "#fffaf7",   // warm off-white
    text:      "#1f0f0a",
  },

  navLinks: ["Home", "Custom Cakes", "Flavours", "Gallery", "Order Now"],

  hero: {
    heading:    "Every Cake Tells a Story.",
    subheading: "Custom-designed celebration cakes made from scratch in Lagos. From intimate birthdays to grand weddings — we bake it beautiful.",
    ctaText:    "Order a Cake",
    ctaLink:    "#products",
    badgeText:  "✦ 48-hr advance orders only",
  },

  products: [
    {
      name:  "Custom Birthday Cake",
      price: "From \u20a650,000",
      tag:   "Bestseller",
      icon:  "Sparkles",
      desc:  "Fully personalised tiered cakes in any flavour, design, or theme. No two are the same.",
    },
    {
      name:  "Wedding Cake",
      price: "From \u20a6180,000",
      tag:   "Premium",
      icon:  "Crown",
      desc:  "Elegant multi-tier wedding cakes designed to match your colours, florals, and vision.",
    },
    {
      name:  "Cupcake Dozen",
      price: "From \u20a618,000",
      tag:   "New",
      icon:  "Gift",
      desc:  "A dozen decorated cupcakes — perfect for gifting, events, or a sweet treat at the office.",
    },
    {
      name:  "Dessert Table",
      price: "From \u20a6120,000",
      tag:   "Top Rated",
      icon:  "Gem",
      desc:  "Full styled dessert spreads for events — cake, cupcakes, cake pops, and more in one display.",
    },
  ],

  testimonials: [
    {
      name:  "Adaeze N.",
      text:  "I cried when I saw my wedding cake. It was exactly what I described and more. CrumbCo is a gem.",
      stars: 5,
    },
    {
      name:  "Temi O.",
      text:  "Ordered a custom birthday cake for my daughter — the detail was insane. She still talks about it.",
      stars: 5,
    },
    {
      name:  "Emeka F.",
      text:  "Got the dessert table for our product launch and every single guest asked who made it. Worth every kobo.",
      stars: 5,
    },
  ],

  about: {
    heading: "Made from Scratch. Made with Meaning.",
    body:
      "CrumbCo started in a home kitchen in Lekki with nothing but a KitchenAid and an obsession with getting buttercream right. " +
      "Every cake is baked to order using real butter, premium cocoa, and no shortcuts. " +
      "We believe a great cake isn't just dessert — it's the centrepiece of a memory.",
  },

  stats: [
    { num: "800+",  label: "Cakes delivered" },
    { num: "4.9\u2605", label: "Average rating" },
    { num: "5yrs",  label: "In business" },
  ],

  ctaBanner: {
    heading: "Ready to Order Your Dream Cake?",
    sub:     "DM us or send a WhatsApp — we reply within the hour and slots fill up fast.",
    btnText: "Place Your Order",
  },

  footer: {
    tagline: "Baked with love. Remembered forever. \u00a9 2024 CrumbCo Bakery",
    links:   ["How to Order", "Flavour Menu", "FAQs", "Instagram", "WhatsApp Us"],
  },
};

export default cake;
