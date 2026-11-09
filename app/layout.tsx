import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "José Simón Díaz — Full Stack Developer en Tucumán";
const description =
  "Desarrollador Full Stack en Tucumán, Argentina. Sistemas a medida, tiendas online y aplicaciones web. Disponible para proyectos freelance remotos.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  title,
  description,
  authors: [{ name: "José Simón Díaz" }],
  keywords: ["Full Stack", "desarrollador web", "freelance", "Tucumán", "React", "Node.js", "NestJS", "Next.js"],
  openGraph: { title, description, locale: "es_AR", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#040612", width: "device-width", initialScale: 1 };

const bootScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme')||'dark';var l=localStorage.getItem('lang');if(!l){l=(navigator.language||'es').toLowerCase().indexOf('en')===0?'en':'es'}d.setAttribute('data-theme',t);d.setAttribute('lang',l)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
