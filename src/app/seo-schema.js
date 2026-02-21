export default function SeoSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "SKN Tec ",
          telephone: "+91 9400278298",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Society Junction",
            addressLocality: "Odanavattam",
            addressRegion: "Kerala",
            addressCountry: "IN",
          },
        }),
      }}
    />
  );
}