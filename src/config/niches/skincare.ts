import { NicheConfig } from "@/lib/types/niche";

const skincare: NicheConfig = {
  slug:          "skincare",
  businessName:  "GlowCo Skincare",
  tagline:       "Glow from the inside out.",
  description:   "Premium Nigerian skincare brand crafting natural, effective products for radiant skin.",
  logoInitials:  "GC",
  category:      "Skincare & Beauty",

  colors: {
    primary:   "#c084a0",
    secondary: "#1a1a2e",
    accent:    "#fdf2f6",
    bg:        "#fffaf9",
    text:      "#1a1a2e",
  },

  navLinks: ["Home", "Products", "About", "Reviews", "Shop Now"],

  hero: {
    heading:    "Skincare That Actually Works.",
    subheading: "Natural ingredients, scientifically formulated for Nigerian skin tones. Your glow is our obsession.",
    ctaText:    "Shop the Collection",
    ctaLink:    "#products",
    badgeText:  "✦ New: Vitamin C Brightening Serum",
  },

  products: [
    {
      name:  "Brightening Serum",
      price: "₦12,500",
      tag:   "Bestseller",
      emoji: "✨",
      desc:  "Vitamin C & niacinamide formula that visibly brightens in 7 days.",
    },
    {
      name:  "Hydra-Boost Moisturiser",
      price: "₦9,800",
      tag:   "New",
      emoji: "💧",
      desc:  "24-hour hydration with hyaluronic acid and shea butter.",
    },
    {
      name:  "SPF 50 Sunscreen",
      price: "₦8,200",
      tag:   "",
      emoji: "☀️",
      desc:  "Lightweight, non-greasy SPF 50 designed for dark skin — no white cast.",
    },
    {
      name:  "Glow Bundle",
      price: "₦27,000",
      tag:   "Best Value",
      emoji: "🎁",
      desc:  "Serum + Moisturiser + SPF bundled for your complete daily routine.",
    },
  ],

  testimonials: [
    {
      name: "Adaeze O.",
      text: "My hyperpigmentation has faded significantly after just 3 weeks. GlowCo is the real deal!",
      stars: 5,
    },
    {
      name: "Fatimah B.",
      text: "The sunscreen doesn't leave a white cast — finally a brand that understands our skin.",
      stars: 5,
    },
    {
      name: "Chisom N.",
      text: "I've tried so many brands. GlowCo's serum is genuinely the best I've ever used.",
      stars: 5,
    },
  ],

  about: {
    heading: "Built for Nigerian Skin, by Nigerians.",
    body:
      "GlowCo was born out of frustration — international brands that don't work for our melanin-rich skin tones. " +
      "We formulate every product in Lagos using locally sourced natural ingredients, combined with proven actives. " +
      "Real ingredients, real results, real glow.",
  },

  stats: [
    { num: "12k+",  label: "Happy Customers" },
    { num: "4.9★",  label: "Average Rating" },
    { num: "100%",  label: "Natural Ingredients" },
  ],

  ctaBanner: {
    heading: "Your Best Skin Starts Today.",
    sub:     "Free delivery on orders over ₦15,000. Limited stock — order now.",
    btnText: "Shop GlowCo Now",
  },

  footer: {
    tagline: "Glow from the inside out. © 2024 GlowCo Skincare",
    links:   ["Privacy Policy", "Terms", "Instagram", "WhatsApp Us"],
  },
};

export default skincare;
