import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const imagePath = path.join(process.cwd(), "public", "skn-tec-logo.png");
  const buffer = fs.readFileSync(imagePath);

  // ✅ Convert Buffer → ArrayBuffer
  const logo = buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  );

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
        <img src={logo} width="220" height="220" />

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