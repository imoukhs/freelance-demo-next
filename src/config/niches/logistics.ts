import { NicheConfig } from "@/lib/types/niche";

const logistics: NicheConfig = {
  slug:         "logistics",
  businessName: "SwiftHaul",
  tagline:      "Move anything. Anywhere. On time.",
  description:  "Nigeria's fastest last-mile delivery and haulage company, trusted by businesses across Lagos and beyond.",
  logoInitials: "SH",
  category:     "Logistics & Delivery",

  colors: {
    primary:   "#f97316",   // bold orange — speed, energy
    secondary: "#0c0f1a",   // near-black — authority, strength
    accent:    "#fff7ed",   // warm off-white
    bg:        "#f9fafb",   // light cool-grey
    text:      "#0c0f1a",
  },

  navLinks: ["Home", "Services", "Tracking", "About", "Get a Quote"],

  hero: {
    heading:    "Delivery That Never Misses.",
    subheading: "From same-day drops to heavy haulage — SwiftHaul moves your goods fast, safe, and on schedule across Nigeria.",
    ctaText:    "Get a Quote",
    ctaLink:    "#products",
    badgeText:  "✦ Now available in 12 states",
  },

  products: [
    {
      name:  "Same-Day Delivery",
      price: "From ₦2,500",
      tag:   "Most Popular",
      icon: "Zap",
      desc:  "Door-to-door delivery within Lagos in under 4 hours, guaranteed.",
    },
    {
      name:  "Interstate Haulage",
      price: "From ₦45,000",
      tag:   "New Route",
      icon: "Truck",
      desc:  "Bulk cargo movement between major cities with real-time tracking.",
    },
    {
      name:  "Warehouse Storage",
      price: "From ₦18,000/mo",
      tag:   "",
      icon: "Warehouse",
      desc:  "Secure, climate-controlled storage with inventory management.",
    },
    {
      name:  "Business Plan",
      price: "Custom",
      tag:   "Best Value",
      icon: "Package",
      desc:  "Dedicated fleet + account manager for high-volume businesses.",
    },
  ],

  testimonials: [
    {
      name:  "Emeka T.",
      text:  "SwiftHaul handles all our Lagos distributions. Zero missed deliveries in 6 months — that's unheard of.",
      stars: 5,
    },
    {
      name:  "Bola A.",
      text:  "Moved our entire warehouse stock to Abuja in 48 hours. Professional, fast, and affordable.",
      stars: 5,
    },
    {
      name:  "Funmi O.",
      text:  "The live tracking feature gives our customers confidence. We've had zero complaints since switching.",
      stars: 5,
    },
  ],

  about: {
    heading: "Built for Nigerian Roads. Built for Nigerian Business.",
    body:
      "SwiftHaul was founded in Lagos in 2019 with one truck and a simple promise — show up on time, every time. " +
      "Today we operate 80+ vehicles across 12 states, serving e-commerce brands, manufacturers, and SMEs. " +
      "We know Nigerian roads. We know Nigerian business. That's our edge.",
  },

  stats: [
    { num: "80+",   label: "Vehicles on the road" },
    { num: "12",    label: "States covered" },
    { num: "99.2%", label: "On-time rate" },
  ],

  ctaBanner: {
    heading: "Ready to Ship Smarter?",
    sub:     "Get a custom quote in under 2 minutes. No contracts, no hidden fees.",
    btnText: "Get Your Free Quote",
  },

  footer: {
    tagline: "Move anything. Anywhere. On time. © 2024 SwiftHaul Logistics Ltd.",
    links:   ["Track Shipment", "Terms", "Privacy", "Instagram", "WhatsApp Us"],
  },
};

export default logistics;
