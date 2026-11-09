# Portafolio — José Simón Díaz

Next.js 15 (App Router) + TypeScript. Sin librerías de UI ni de animación: todo con CSS (incluidas las animaciones ligadas al scroll).

## Correr en local
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # versión de producción
```

## Qué editar
- `lib/content.ts` — TODO el contenido (textos ES/EN, proyectos, servicios, experiencia, stack) y tus datos de contacto (`CONTACT`).
- `public/CV_Jose_Simon_Diaz_ES.pdf` y `public/CV_Jose_Simon_Diaz_EN.pdf` — el CV que descarga el botón del hero según el idioma activo (las rutas están en `cvHref` dentro de `dict`).
- `app/globals.css` — colores (variables `--bg`, `--ac`, ...), tipografías y animaciones.
- `app/layout.tsx` — título, descripción y datos para compartir (SEO / Open Graph).

## Publicar en Vercel
1. Subí esta carpeta a un repositorio de GitHub.
2. En vercel.com → *Add New Project* → importá el repositorio. No hace falta configurar nada.
3. (Opcional) Dominio propio en *Settings → Domains*.

## Funciones
- Cambio de idioma ES/EN y modo oscuro/claro (se recuerdan en el navegador).
- Menú hamburguesa animado (solo celular) con panel que entra de derecha a izquierda.
- Línea de experiencia que se dibuja con el scroll (CSS `animation-timeline`; en navegadores sin soporte se muestra completa).
- Contacto por WhatsApp, email y LinkedIn.
