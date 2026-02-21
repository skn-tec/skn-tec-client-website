export default function manifest() {
  return {
    name: "SKN Tec ",
    short_name: "SKN Tec",
    description:
      "Best Tuition Center in Odanavattam Society Junction offering coaching and skill training.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/skn-tec-logo.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}