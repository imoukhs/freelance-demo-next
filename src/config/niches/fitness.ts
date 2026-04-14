import { NicheConfig } from "@/lib/types/niche";

const fitness: NicheConfig = {
  slug:         "fitness",
  businessName: "IronBase Gym",
  tagline:      "Show up. Show out.",
  description:  "Results-focused fitness centre in Lagos offering personal training, group classes, and nutrition coaching for all levels.",
  logoInitials: "IB",
  category:     "Fitness & Personal Training",

  colors: {
    primary:   "#e8ff00",   // electric yellow — energy, intensity
    secondary: "#0a0a0a",   // near-black
    accent:    "#111111",   // dark charcoal
    bg:        "#0d0d0d",   // dark background
    text:      "#f0f0f0",   // light text on dark bg
  },

  navLinks: ["Home", "Training", "Classes", "Nutrition", "Join Now"],

  hero: {
    heading:    "No Excuses. Just Results.",
    subheading: "Personal training, group classes, and nutrition coaching under one roof. Built for people who are serious about change.",
    ctaText:    "Start Training",
    ctaLink:    "#products",
    badgeText:  "First session free — no commitment",
  },

  products: [
    {
      name:  "1-on-1 Personal Training",
      price: "From \u20a625,000/mo",
      tag:   "Most Popular",
      icon:  "Zap",
      desc:  "Custom workout programs with a dedicated trainer who tracks every rep and holds you accountable.",
    },
    {
      name:  "Group HIIT Classes",
      price: "From \u20a68,000/mo",
      tag:   "New",
      icon:  "Flame",
      desc:  "High-intensity group sessions — 45 minutes, max effort, guaranteed sweat. Classes run daily.",
    },
    {
      name:  "Nutrition Coaching",
      price: "From \u20a615,000/mo",
      tag:   "",
      icon:  "Target",
      desc:  "Personalised meal plans and weekly check-ins with a certified nutrition coach. No fad diets.",
    },
    {
      name:  "Full Transformation Pack",
      price: "\u20a660,000/mo",
      tag:   "Best Value",
      icon:  "Crown",
      desc:  "Personal training + group classes + nutrition coaching bundled for maximum results.",
    },
  ],

  testimonials: [
    {
      name:  "Chidi N.",
      text:  "Lost 12kg in 4 months. My trainer never let me slack off once. IronBase changed my life — not exaggerating.",
      stars: 5,
    },
    {
      name:  "Blessing A.",
      text:  "The HIIT classes are brutal in the best way. I've tried 4 gyms in Lagos and this is the only one I keep coming back to.",
      stars: 5,
    },
    {
      name:  "Tobi M.",
      text:  "The nutrition coaching was a game changer. I was training hard for years and not seeing results — turns out it was all diet.",
      stars: 5,
    },
  ],

  about: {
    heading: "Built for People Who Are Done Playing Small.",
    body:
      "IronBase started with a single idea: Lagos deserves a gym that actually cares whether you see results. " +
      "Our trainers are certified, our programs are science-backed, and we cap memberships so you're never just a number. " +
      "We've helped over 1,200 members lose fat, build muscle, and build habits that stick.",
  },

  stats: [
    { num: "1,200+", label: "Members transformed" },
    { num: "4.9\u2605", label: "Average rating" },
    { num: "12+",    label: "Certified trainers" },
  ],

  ctaBanner: {
    heading: "Your First Session Is on Us.",
    sub:     "Book a free trial session this week and see why our members never leave.",
    btnText: "Book Free Session",
  },

  footer: {
    tagline: "Show up. Show out. \u00a9 2024 IronBase Gym Lagos",
    links:   ["Class Timetable", "Membership Plans", "FAQs", "Instagram", "WhatsApp Us"],
  },
};

export default fitness;
