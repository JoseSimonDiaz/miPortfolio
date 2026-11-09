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
          <circle cx="32" cy="32" r="28" stroke="#8D9DFF" strokeWidth="3.5" fill="none" />
          <path d="M20 22 L32 44 L44 22" stroke="#EEF0FF" strokeWidth="5" strokeLinejoin="miter" fill="none" />
          <circle cx="32" cy="12" r="3.2" fill="#F5B84B" />
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
