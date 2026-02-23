import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {

  // 🔥 Fetch logo as buffer (required for next/og)
  const logo = await fetch(
    new URL("/skn-tec-logo.png", "https://www.skn-tec.com")
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <img
          src={logo}
          width="220"
          height="220"
        />

        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          SKN TEC
        </div>
      </div>
    ),
    { ...size }
  );
}