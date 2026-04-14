import { NicheConfig } from "@/lib/types/niche";

const transport: NicheConfig = {
  slug:         "transport",
  businessName: "Pleasure Travels",
  tagline:      "Travel in comfort. Arrive with ease.",
  description:  "Premium passenger transport for intercity trips, airport runs, and private charters across Nigeria.",
  logoInitials: "PT",
  category:     "Passenger Transport",

  colors: {
    primary:   "#dc2626",   // bold red
    secondary: "#1a0000",   // deep red-black
    accent:    "#fff1f1",   // soft blush white
    bg:        "#ffffff",   // clean white
    text:      "#1a0000",
  },

  navLinks: ["Home", "Routes", "Charter", "About", "Book Now"],

  hero: {
    heading:    "Travel Comfortably. Arrive Safely.",
    subheading: "Air-conditioned buses, professional drivers, and on-time arrivals on every route. Book your seat in seconds.",
    ctaText:    "Book a Seat",
    ctaLink:    "#products",
    badgeText:  "✦ Lagos · Abuja · PH · Ibadan · Benin",
  },

  products: [
    {
      name:  "School to Home",
      price: "From ₦11,500",
      tag:   "Most Booked",
      icon: "Bus",
      desc:  "Comfortable AC buses on daily routes between major Nigerian cities.",
    },
    {
      name:  "Airport Pickup",
      price: "From ₦12,000",
      tag:   "New",
      icon: "PlaneLanding",
      desc:  "Punctual airport drop-offs and pickups with flight tracking included.",
    },
    {
      name:  "Private Charter",
      price: "From ₦85,000",
      tag:   "",
      icon: "Car",
      desc:  "Hire an entire vehicle for your group, event, or corporate outing.",
    },
    {
      name:  "VIP Executive",
      price: "From ₦35,000",
      tag:   "Premium",
      icon: "Crown",
      desc:  "Luxury saloon cars with Wi-Fi, refreshments, and a dedicated driver.",
    },
  ],

  testimonials: [
    {
      name:  "Tunde M.",
      text:  "I travel Lagos–Abuja every month with RideEase. Comfortable, on time, and the drivers are always professional.",
      stars: 5,
    },
    {
      name:  "Ngozi E.",
      text:  "Booked the VIP Executive for my wedding weekend. Absolutely seamless — felt like royalty.",
      stars: 5,
    },
    {
      name:  "Salisu B.",
      text:  "Our company uses RideEase for all staff movements. Reliable billing and zero complaints from the team.",
      stars: 5,
    },
  ],

  about: {
    heading: "Every Journey Deserves to Be Comfortable.",
    body:
      "RideEase was built because Nigerians deserve better travel options — not cramped, unreliable buses, but clean vehicles, " +
      "trackable trips, and drivers who respect your time. " +
      "We've carried over 50,000 passengers since 2021 and we're just getting started.",
  },

  stats: [
    { num: "50k+",  label: "Passengers carried" },
    { num: "18",    label: "Routes available" },
    { num: "4.8★",  label: "Average rating" },
  ],

  ctaBanner: {
    heading: "Your Next Trip Starts Here.",
    sub:     "Book online in 60 seconds. Free cancellation up to 2 hours before departure.",
    btnText: "Book Your Seat Now",
  },

  footer: {
    tagline: "Travel in comfort. Arrive with ease. © 2024 RideEase Transport Ltd.",
    links:   ["Book a Trip", "Track My Bus", "Terms", "Instagram", "WhatsApp Us"],
  },
};

export default transport;
