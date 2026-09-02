export default function LocalBusinessSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Edupath Library",
    image: "https://library.edupathacademy.com/logo-nav.png",
    url: "https://library.edupathacademy.com",
    telephone: "+91-87916-13006",
    priceRange: "\u20b9150 - \u20b94200",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 08-09, Atrium Floor, Shopprix Mall, Sector 5",
      addressLocality: "Vaishali, Ghaziabad",
      postalCode: "201019",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "15:30",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}