import { ImageResponse } from "next/og";
import { siteName } from "@/lib/config";

export const alt = `${siteName} – Développeur web fullstack`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c1519",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#d4a574",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {siteName}
          </span>
          <span
            style={{
              fontSize: 32,
              color: "#cf9d7b",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Développeur web fullstack · Besançon
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
