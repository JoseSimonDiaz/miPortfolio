export type Lang = "es" | "en";

export const CONTACT = {
  whatsapp: "5493816179958",
  email: "diazjosesimon001@gmail.com",
  linkedin: "https://www.linkedin.com/in/josesimondiaz/",
  github: "https://github.com/JoseSimonDiaz",
  instagram: "https://www.instagram.com/joseep3/",
} as const;

export const dict = {
  es: {
    navProjects: "Proyectos", navServices: "Servicios", navExp: "Experiencia", navStack: "Stack", cta: "Hablemos", themeLabel: "Cambiar tema",
    loc: "TUCUMÁN, ARGENTINA", role1: "Full Stack Developer", role2: "en Tucumán", avail: "Abierto a trabajo remoto · GMT-3",
    sub: "Transformo ideas y procesos en software útil: sistemas a medida, tiendas online y aplicaciones web para problemas reales.",
    cvLabel: "CURRICULUM // PDF", cvBtn: "Descargar CV", cvHref: "/cv/CV_Jose_Simon_Diaz_ES.pdf", ghLabel: "REPOSITORIOS // DEV",
    b1: "Scrum Master · Equipo de 11 personas, 2026", b2: "Tutor Full Stack · RollingCode School", vizLabel: "Mapa de tecnologías con las que trabajo",
    eyProjects: "Proyectos", titleProjects: "Trabajo real, en producción.", subProjects: "Sistemas que usan organismos del Gobierno de Tucumán, cooperativas y plataformas educativas, y sitios para comercios locales.",
    eyServices: "Servicios", titleServices: "Lo que puedo resolver por vos.",
    eyExp: "Trayectoria profesional", titleExp: "De no saber qué era un middleware a liderar equipos.",
    aboutP: "Me formé como Full Stack en RollingCode School, empecé dando tutorías y hoy construyo sistemas reales. Uso agentes de IA para entregar más rápido sin perder calidad.",
    eyStack: "Stack", titleStack: "Herramientas de todos los días.",
    eyContact: "Contacto", cTitle1: "¿Tenés una idea?", cTitle2: "Hagámosla.",
    cSub: "Contame qué querés construir y lo vemos juntos. Escribime por el canal que prefieras.",
    mailBtn: "Enviar un email", formNote: "Disponible para proyectos freelance · Remoto", top: "Volver arriba",
    waMsg: "Hola José, vi tu portafolio y me gustaría hablar de un proyecto.", mailSubject: "Consulta desde tu portafolio",
    menu: "MENÚ",
  },
  en: {
    navProjects: "Work", navServices: "Services", navExp: "Experience", navStack: "Stack", cta: "Let's talk", themeLabel: "Toggle theme",
    loc: "TUCUMÁN, ARGENTINA", role1: "Full Stack Developer", role2: "in Tucumán", avail: "Open to remote work · GMT-3",
    sub: "I turn ideas and processes into useful software: custom systems, online stores and web applications for real problems.",
    cvLabel: "CURRICULUM // PDF", cvBtn: "Download CV", cvHref: "/cv/CV_Jose_Simon_Diaz_EN.pdf", ghLabel: "REPOSITORIES // DEV",
    b1: "Scrum Master · Team of 11 people, 2026", b2: "Full Stack Tutor · RollingCode School", vizLabel: "Map of the technologies I work with",
    eyProjects: "Work", titleProjects: "Real work, in production.", subProjects: "Systems used by Tucumán government agencies, cooperatives and learning platforms, plus websites for local businesses.",
    eyServices: "Services", titleServices: "What I can solve for you.",
    eyExp: "Professional journey", titleExp: "From not knowing what middleware was to leading teams.",
    aboutP: "I trained as a Full Stack developer at RollingCode School, started as a tutor and now build real systems. I use AI agents to ship faster without losing quality.",
    eyStack: "Stack", titleStack: "Everyday tools.",
    eyContact: "Contact", cTitle1: "Got an idea?", cTitle2: "Let's build it.",
    cSub: "Tell me what you want to build and we will figure it out together. Write to me on whichever channel you prefer.",
    mailBtn: "Send an email", formNote: "Available for freelance projects · Remote", top: "Back to top",
    waMsg: "Hi José, I saw your portfolio and would like to talk about a project.", mailSubject: "Inquiry from your portfolio",
    menu: "MENU",
  },
} as const;

export type Dict = (typeof dict)[Lang];

export type FilterId = "all" | "sys" | "web" | "prod";

export function getFilters(lang: Lang): { id: FilterId; label: string }[] {
  const es = lang === "es";
  return [
    { id: "all", label: es ? "TODOS" : "ALL" },
    { id: "sys", label: es ? "SISTEMAS" : "SYSTEMS" },
    { id: "web", label: es ? "SITIOS WEB" : "WEBSITES" },
    { id: "prod", label: es ? "PRODUCTO PROPIO" : "OWN PRODUCT" },
  ];
}

export type Project = {
  cat: Exclude<FilterId, "all">;
  a: string; b: string; href: string; external: boolean;
  tagline: string; cta: string; meta: string; title: string; desc: string;
  img?: string; // screenshot in /public/proyect; without it the card shows a gradient placeholder
};

export function getProjects(lang: Lang): Project[] {
  const es = lang === "es";
  const caseCta = es ? "Pedime el caso de estudio →" : "Ask for the case study →";
  const gov = es ? "2024 — 2026 · Gobierno de Tucumán" : "2024 — 2026 · Tucumán Government";
  return [
    { cat: "sys", a: "#3B5BDB", b: "#10163F", href: "#contacto", external: false, tagline: "NestJS · React · PostgreSQL · Prisma", cta: caseCta,
      meta: gov, title: "IPACyM Digital", img: "/proyect/ipacym.png",
      desc: es ? "Asambleas, balances y certificados con aprobación multi-área, permisos por rol (13 perfiles) y certificados en PDF." : "Assemblies, balance sheets and certificates with multi-area approval, role-based access (13 profiles) and PDF certificates." },
    { cat: "sys", a: "#C58A2E", b: "#3D2306", href: "#contacto", external: false, tagline: "PWA · IndexedDB · PDF · Excel", cta: caseCta,
      meta: gov, title: "IPAAT Webapp (SIPPCA)",
      desc: es ? "Inscripción de productores, cooperativas e ingenios con parcelas y catastro, modo offline y reportes en PDF y Excel." : "Registration of growers, cooperatives and sugar mills with plots and land records, offline mode and PDF/Excel reports." },
    { cat: "sys", a: "#2F9E6B", b: "#0B2A1B", href: "#contacto", external: false, tagline: "TypeScript · PostgreSQL · Prisma · Zod", cta: caseCta,
      meta: es ? "2025 — 2026 · Cooperativa" : "2025 — 2026 · Cooperative",
      title: es ? "Cooperativa San Pedro de Colalao" : "San Pedro de Colalao Cooperative",
      desc: es ? "Gestión de caja, asociados, tarifas, facturación y planes de pago, con auditoría de cambios." : "Cash desk, members, rates, billing and payment plans, with change auditing." },
    { cat: "sys", a: "#E03131", b: "#2B0808", href: "#contacto", external: false, tagline: "Node.js · MongoDB · Cypress", cta: caseCta,
      meta: "2024 — 2026 · Edtech", title: "Universe · RollingCode School", img: "/proyect/universe.png",
      desc: es ? "Plataforma de cursos online. Desarrollé el flujo de suscripción RollingCode+: alta de usuarios, planes y gestión." : "Online course platform. I built the RollingCode+ subscription flow: sign-up, plans and management." },
    { cat: "sys", a: "#7B4CE0", b: "#1D0F4D", href: "#contacto", external: false, tagline: "Node.js · MongoDB · Cypress · NFT", cta: caseCta,
      meta: "2024 — 2026 · Edtech",
      title: es ? "Certificados NFT" : "NFT certificates",
      desc: es ? "Emisión de certificados como NFT en blockchain con verificación de autenticidad, y QA E2E con Cypress." : "Certificates issued as blockchain NFTs with authenticity checks, plus E2E QA with Cypress." },
    { cat: "web", a: "#E8B923", b: "#2E2405", href: "#contacto", external: false, tagline: "Next.js · Three.js · Tailwind", cta: caseCta,
      meta: es ? "2026 · Comercio local" : "2026 · Local business", title: "Lavandería Familiar", img: "/proyect/lavanderiaFamiliar.png",
      desc: es ? "Sitio para una lavandería de barrio: servicios, productos propios y pedidos por WhatsApp." : "Website for a neighborhood laundry: services, its own products and orders via WhatsApp." },
    { cat: "prod", a: "#D1456A", b: "#3F0D20", href: "#contacto", external: false, tagline: "React · Game design", cta: caseCta,
      meta: es ? "2026 · En desarrollo" : "2026 · In progress",
      title: "Deventure",
      desc: es ? "Juego educativo estilo Duolingo y Kahoot para aprender a programar jugando." : "Educational game in the style of Duolingo and Kahoot to learn programming by playing." },
  ];
}

export function getServices(lang: Lang) {
  const es = lang === "es";
  return [
    { icon: "M3 5h18v12H3zM8 21h8M12 17v4", title: es ? "Sitios y tiendas online" : "Websites and online stores", desc: es ? "Landing pages, sitios institucionales y e-commerce rápidos, responsive y listos para vender." : "Fast, responsive landing pages, company sites and e-commerce built to sell." },
    { icon: "M4 6h16M4 12h16M4 18h10M18 16l2 2-2 2", title: es ? "Sistemas y APIs a medida" : "Custom systems and APIs", desc: es ? "Paneles de gestión, roles y permisos, auditoría, reportes e integraciones." : "Admin panels, roles and permissions, auditing, reports and integrations." },
    { icon: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: es ? "QA y automatización" : "QA and automation", desc: es ? "Pruebas end-to-end con Cypress y revisión de proyectos existentes." : "End-to-end tests with Cypress, plus reviews of existing projects." },
    { icon: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5", title: es ? "Liderazgo y mentoría" : "Leadership and mentoring", desc: es ? "Scrum Master para equipos de desarrollo y capacitación técnica." : "Scrum Master for development teams and technical training." },
  ];
}

export function getTimeline(lang: Lang) {
  const es = lang === "es";
  return [
    { when: es ? "Enero 2026 — Actualidad" : "January 2026 — Present", role: "Scrum Master", org: "Rolling Code School / Studio", desc: es ? "Lideré solo un equipo de desarrollo de 11 personas, coordinando entregas, ceremonias y calidad." : "Led a development team of 11 on my own, coordinating deliveries, ceremonies and quality.", tags: "Scrum · Jira · Trello · " + (es ? "Liderazgo" : "Leadership") },
    { when: es ? "2024 — Actualidad" : "2024 — Present", role: es ? "Tutor Full Stack" : "Full Stack Tutor", org: "RollingCode School", desc: es ? "Acompaño a estudiantes de la comisión Full Stack desde cero hasta sus primeros proyectos." : "I guide Full Stack students from zero to their first real projects.", tags: "React · Node.js · " + (es ? "Mentoría" : "Mentoring") },
    { when: "2024 — 2025", role: es ? "Desarrollador Full Stack" : "Full Stack Developer", org: "Rolling Code Studio · Labs · Ipacym", desc: es ? "Plataforma Ipacym, certificados NFT en blockchain, suscripciones RollingCode+ y QA con Cypress." : "Ipacym platform, blockchain NFT certificates, RollingCode+ subscriptions and Cypress QA.", tags: "Node.js · MongoDB · Next.js · Cypress" },
    { when: "2024", role: es ? "Programador Full Stack Web Developer" : "Full Stack Web Developer", org: "RollingCode School", desc: es ? "Egresado de la carrera: primer paso profesional en desarrollo web." : "Program graduate: first professional step into web development.", tags: "MERN · Git · Agile" },
    { when: "2022 — " + (es ? "Actualidad" : "Present"), role: es ? "Ingeniería en Sistemas" : "Systems Engineering", org: es ? "Estudios universitarios · Tucumán" : "University studies · Tucumán", desc: es ? "Cursando en paralelo al trabajo profesional." : "Studying alongside professional work.", tags: es ? "Formación continua" : "Continuous learning" },
  ];
}

export function getSkills(lang: Lang) {
  const es = lang === "es";
  return [
    { title: es ? "Lenguajes" : "Languages", items: ["TypeScript", "JavaScript", "HTML y CSS"] },
    { title: "Frameworks", items: ["React y Next.js", "Node.js y Express", "NestJS", "Tailwind y Bootstrap"] },
    { title: es ? "Datos y calidad" : "Data and quality", items: ["PostgreSQL y Prisma", "MongoDB y MySQL", "Cypress", "Postman"] },
    { title: es ? "Forma de trabajo" : "Ways of working", items: ["Scrum", "Git y GitHub", "Jira y Trello", es ? "Claude Code y Copilot" : "Claude Code and Copilot"] },
  ];
}
