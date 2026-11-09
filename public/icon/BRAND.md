# Vértice — identidad de marca

Negocio de servicios de tecnología: desarrollo de software y web, automatización, QA, análisis funcional.
Concepto elegido: **05 · Sello** (emblema circular con una V y un punto dorado como "vértice").

## Ícono (isotipo)
Círculo (r=28) + V (path `M20 22 L32 44 L44 22`) + punto dorado arriba. viewBox 0 0 64 64.
- `vertice-icon-for-dark-bg.svg` — para fondos oscuros (transparente)
- `vertice-icon-for-light-bg.svg` — para fondos claros (transparente)
- `vertice-app-icon.svg` — ícono de app / avatar (fondo #040612, esquinas redondeadas)
- `favicon.svg` — favicon (usar en Next.js como `app/icon.svg`)
- `vertice-lockup-for-*.svg` — ícono + palabra. Requiere la fuente Fraunces instalada; en la web es mejor armar la palabra como texto HTML (ver abajo).

## Tipografía
- **Logotipo (wordmark):** Fraunces, peso 500, MAYÚSCULAS, `letter-spacing: 0.16em`. Texto: `VÉRTICE` (con tilde).
- **Subtítulo / etiquetas:** JetBrains Mono 400, mayúsculas, `letter-spacing: 0.12em`, tamaño pequeño. Ej: `TECNOLOGÍA · AUTOMATIZACIÓN · QA`
- **Títulos de la web:** Space Grotesk (500–700). **Texto corrido:** Inter.
- Todas son Google Fonts (en Next.js: `next/font/google`).

## Colores
| Uso | Fondo oscuro | Fondo claro |
|---|---|---|
| Fondo | #040612 | #F4F5FB |
| Texto / V | #EEF0FF | #0B1030 |
| Aro (acento) | #8D9DFF | #3B4BE0 |
| Punto dorado | #F5B84B | #C98A12 |
| Texto secundario | #AEB4D6 | #4A5075 |
Gradiente de acento: #6D7BFF → #B27BFF → #F5B84B.

## Reglas de uso
- Espacio libre alrededor del logo: al menos el ancho del punto dorado ×4.
- Tamaño mínimo del ícono: 16 px (favicon). Del lockup: 120 px de ancho.
- No deformar, no cambiar los colores, no agregar sombras.
- Nombre en texto corrido: "Vértice".

## Componente de ejemplo (React / Next.js)
```tsx
import { Fraunces } from "next/font/google";
const fraunces = Fraunces({ subsets: ["latin"], weight: "500" });

export function Logo({ dark = true, size = 44 }: { dark?: boolean; size?: number }) {
  const c = dark
    ? { ring: "#8D9DFF", v: "#EEF0FF", dot: "#F5B84B" }
    : { ring: "#3B4BE0", v: "#0B1030", dot: "#C98A12" };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="Vértice">
        <circle cx="32" cy="32" r="28" stroke={c.ring} strokeWidth="3.5" />
        <path d="M20 22 L32 44 L44 22" stroke={c.v} strokeWidth="5" strokeLinejoin="miter" />
        <circle cx="32" cy="12" r="3.2" fill={c.dot} />
      </svg>
      <span className={fraunces.className} style={{ color: c.v, fontSize: size * 0.68, letterSpacing: "0.16em", lineHeight: 1 }}>
        VÉRTICE
      </span>
    </span>
  );
}
```
