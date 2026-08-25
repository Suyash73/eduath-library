// lib/siteConfig.ts
// Placeholder values are marked TODO. Every CTA/link in the site reads from here.

export const siteConfig = {
  name: "Edupath Library",
  tagline: "A Quiet Place to Study.",
  subTagline: "A better environment to focus.",
  location: {
    line: "Shop no 08-09, Atrium floor Shopprix mall , sector 5 , vaishali, ghaziabad, 201019", 
    mapsUrl: "https://maps.app.goo.gl/94nwa677f3K4qwip7", 
  },
  hours: {
    open: "7:00 AM",
    close: "3:30 PM",
  },
  contact: {
    phoneDisplay: "+91 87916 13006",
    phoneHref: "tel:+918791613006",
    whatsappHref: "https://wa.me/918077113006",
  },
  facilities: [
    { label: "AC", icon: "snowflake" },
    { label: "Quiet", icon: "volume-x" },
    { label: "Charging", icon: "plug" },
    { label: "Water", icon: "droplet" },
    { label: "Boards", icon: "presentation" },
    { label: "Snacks", icon: "cookie" },
  ],
  plans: [
    { label: "Daily", price: 150, unit: "/ day" },
    { label: "Monthly", price: 1500, unit: "/ month" },
    { label: "Quarterly", price: 4200, unit: "/ quarter", note: "Best value per day" },
  ],
};