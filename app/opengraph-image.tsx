import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Manoj Ganesan, Software Engineer and 0xEcho portfolio";
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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#030303",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 75% 50%, rgba(204,255,0,0.28), transparent 32%), linear-gradient(90deg, #030303 0%, #050505 58%, #111111 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.42,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", zIndex: 1 }}>
          <div
            style={{
              color: "#ccff00",
              fontSize: 28,
              letterSpacing: 8,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            0xEcho // Software Engineer
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              fontSize: 112,
              fontWeight: 900,
              letterSpacing: 3,
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            <span>Manoj</span>
            <span style={{ color: "#ccff00", marginLeft: 28 }}>G.</span>
          </div>

          <div
            style={{
              marginTop: 34,
              color: "#d8d8d8",
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: 670,
            }}
          >
            Full stack and backend projects across web, AI, systems, and
            security.
          </div>

          <div
            style={{
              marginTop: 42,
              color: "#9ca3af",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            manojganesan.dev
          </div>
        </div>

        <img
          src="https://manojganesan.dev/Images/Profile.webp"
          alt=""
          width="360"
          height="360"
          style={{
            zIndex: 1,
            width: 360,
            height: 360,
            objectFit: "cover",
            borderRadius: 24,
            border: "2px solid rgba(204,255,0,0.55)",
            boxShadow: "0 0 70px rgba(204,255,0,0.24)",
            filter: "grayscale(1)",
          }}
        />
      </div>
    ),
    size,
  );
}
