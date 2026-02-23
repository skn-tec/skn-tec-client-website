export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],

    sitemap: "https://www.skn-tec.com/sitemap.xml",

    host: "https://www.skn-tec.com",
  };
}