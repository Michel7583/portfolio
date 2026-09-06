import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07090e",
          color: "#eef1f6",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: "0.18em",
            color: "#7aa2ff",
          }}
        >
          {site.tagline}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 860,
            }}
          >
            {site.headline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 28,
              color: "#8d95a8",
              maxWidth: 780,
            }}
          >
            {`${site.name} — production software for AI, blockchain, and fintech.`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
