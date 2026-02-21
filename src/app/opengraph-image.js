import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
        {/* Logo from public folder */}
        <img
          src="https://www.skn-tec.com/skn-tec-logo.webp"
          width="220"
          height="220"
          alt="SKN TEC Logo"
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