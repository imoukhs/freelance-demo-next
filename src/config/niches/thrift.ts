import { NicheConfig } from "@/lib/types/niche";

const thrift: NicheConfig = {
  slug:         "thrift",
  businessName: "ThreadsNaija",
  tagline:      "Second-hand. First choice.",
  description:  "Lagos's finest curated thrift store — vintage fits, designer pieces, and rare sneakers at prices that make sense.",
  logoInitials: "TN",
  category:     "Thrift & Vintage",

  colors: {
    primary:   "#c2683a",   // terracotta — warm, earthy, vintage
    secondary: "#1c0f08",   // dark espresso brown
    accent:    "#fef5ec",   // warm cream
    bg:        "#fffbf7",   // off-white warm
    text:      "#1c0f08",
  },

  navLinks: ["Home", "Clothing", "Sneakers", "Accessories", "Shop Now"],

  hero: {
    heading:    "Vintage Fits. Real Prices.",
    subheading: "Handpicked second-hand clothing, designer bags, and rare sneakers — all curated so you don't have to dig through the pile yourself.",
    ctaText:    "Browse the Store",
    ctaLink:    "#products",
    badgeText:  "✦ New drops every Friday",
  },

  products: [
    {
      name:  "Vintage Outfits",
      price: "₦4,500 – ₦18,000",
      tag:   "New Drop",
      icon: "Shirt",
      desc:  "Curated vintage pieces — shirts, dresses, and co-ords in excellent condition.",
    },
    {
      name:  "Designer Bags",
      price: "₦12,000 – ₦65,000",
      tag:   "Rare Find",
      icon: "ShoppingBag",
      desc:  "Authenticated pre-owned bags from top brands. Scratches tell stories.",
    },
    {
      name:  "Sneaker Drops",
      price: "₦15,000 – ₦85,000",
      tag:   "",
      icon: "Footprints",
      desc:  "Heat every week — Nike, Jordan, New Balance, and more. Limited stock.",
    },
    {
      name:  "Mystery Bundle",
      price: "₦8,000",
      tag:   "Best Value",
      icon: "Gift",
      desc:  "5 surprise pieces curated to your size and vibe. Always worth more than you pay.",
    },
  ],

  testimonials: [
    {
      name:  "Chiamaka V.",
      text:  "I've been thrifting for years but ThreadsNaija is on a different level. Every piece feels handpicked for me.",
      stars: 5,
    },
    {
      name:  "Kolade B.",
      text:  "Got a pair of Air Jordan 1s in near-mint condition for ₦22k. I was shaking. This place is a goldmine.",
      stars: 5,
    },
    {
      name:  "Sade F.",
      text:  "Ordered the mystery bundle and honestly it's the best ₦8k I've ever spent. Three pieces I wear every week.",
      stars: 5,
    },
  ],

  about: {
    heading: "We Do the Digging So You Don't Have To.",
    body:
      "ThreadsNaija started as a side hustle at Yaba market in 2020 — just us, a camera phone, and an eye for good pieces. " +
      "Today we source from estates, auctions, and trusted sellers across Lagos. " +
      "Every item is inspected, cleaned, and priced honestly. No overpriced junk. Just good thrift.",
  },

  stats: [
    { num: "5k+",   label: "Items sold" },
    { num: "4.9★",  label: "Average rating" },
    { num: "Every Friday", label: "New drops" },
  ],

  ctaBanner: {
    heading: "Your Next Favourite Outfit Is Waiting.",
    sub:     "New pieces drop every Friday. Follow us so you never miss a find.",
    btnText: "Shop the Latest Drop",
  },

  footer: {
    tagline: "Second-hand. First choice. © 2024 ThreadsNaija",
    links:   ["New Arrivals", "Size Guide", "Returns", "Instagram", "WhatsApp Us"],
  },
};

export default thrift;
