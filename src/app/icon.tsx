import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07090e",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 8,
            height: 8,
            borderRadius: 99,
            background: "#7aa2ff",
          }}
        />
      </div>
    ),
    size,
  );
}
