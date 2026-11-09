import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "José Simón Díaz — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#040612",
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(109,91,255,.35), transparent 55%)",
          color: "#EEF0FF",
        }}
      >
        <svg width="96" height="96" viewBox="0 0 64 64">
          <path
            d="M24 22l-10 10 10 10M40 22l10 10-10 10M35 16l-6 32"
            fill="none"
            stroke="#8D9DFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 32 }}>José Simón Díaz</div>
        <div style={{ fontSize: 44, color: "#8D9DFF", marginTop: 8 }}>Full Stack Developer</div>
        <div style={{ fontSize: 30, color: "#AEB4D6", marginTop: 28 }}>
          Sistemas a medida · Tiendas online · Aplicaciones web
        </div>
      </div>
    ),
    size
  );
}
