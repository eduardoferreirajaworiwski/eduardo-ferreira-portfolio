import { ImageResponse } from "next/og";

export const size = {
  width: 128,
  height: 128
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#070a10",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "4px solid #9fb9ff",
            borderRadius: 32,
            color: "#e6edf9",
            display: "flex",
            fontFamily: "sans-serif",
            fontSize: 56,
            fontWeight: 700,
            height: 84,
            justifyContent: "center",
            lineHeight: 1,
            width: 84
          }}
        >
          E
        </div>
      </div>
    ),
    size
  );
}
