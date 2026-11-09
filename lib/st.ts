import type { CSSProperties } from "react";

/** Convierte un string CSS inline ("a: b; c: d") en un objeto style de React. */
export function st(css: string): CSSProperties {
  const out: Record<string, string> = {};
  css.split(";").forEach((decl) => {
    const i = decl.indexOf(":");
    if (i < 0) return;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    if (!prop || !val) return;
    const key = prop.startsWith("--") ? prop : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[key] = val;
  });
  return out as CSSProperties;
}
