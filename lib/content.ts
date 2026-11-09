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
    cvLabel: "CURRICULUM // PDF", cvBtn: "Descargar CV", cvHref: "/CV_Jose_Simon_Diaz_ES.pdf", ghLabel: "REPOSITORIOS // DEV",
    b1: "Scrum Master · Equipo de 11 personas, 2026", b2: "Tutor Full Stack · RollingCode School", vizLabel: "Mapa de tecnologías con las que trabajo",
    eyProjects: "Proyectos", titleProjects: "Trabajo real, en producción.", subProjects: "Sistemas que usan organismos, cooperativas y plataformas educativas, y tiendas online que armé desde cero.",
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
    cvLabel: "CURRICULUM // PDF", cvBtn: "Download CV", cvHref: "/CV_Jose_Simon_Diaz_EN.pdf", ghLabel: "REPOSITORIES // DEV",
    b1: "Scrum Master · Team of 11 people, 2026", b2: "Full Stack Tutor · RollingCode School", vizLabel: "Map of the technologies I work with",
    eyProjects: "Work", titleProjects: "Real work, in production.", subProjects: "Systems used by public bodies, cooperatives and learning platforms, plus online stores I built from scratch.",
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

export type FilterId = "all" | "sys" | "shop" | "prod";

export function getFilters(lang: Lang): { id: FilterId; label: string }[] {
  const es = lang === "es";
  return [
    { id: "all", label: es ? "TODOS" : "ALL" },
    { id: "sys", label: es ? "SISTEMAS" : "SYSTEMS" },
    { id: "shop", label: "E-COMMERCE" },
    { id: "prod", label: es ? "PRODUCTO PROPIO" : "OWN PRODUCT" },
  ];
}

export type Project = {
  cat: Exclude<FilterId, "all">;
  a: string; b: string; href: string; external: boolean;
  tagline: string; cta: string; meta: string; title: string; desc: string;
};

export function getProjects(lang: Lang): Project[] {
  const es = lang === "es";
  const caseCta = es ? "Pedime el caso de estudio →" : "Ask for the case study →";
  const liveCta = es ? "Ver proyecto online →" : "View live project →";
  return [
    { cat: "sys", a: "#3B5BDB", b: "#10163F", href: "#contacto", external: false, tagline: "NestJS · React · PostgreSQL · Prisma", cta: caseCta,
      meta: es ? "2025 · Sector público" : "2025 · Public sector",
      title: es ? "Sistema de gestión del Gobierno de Tucumán" : "Tucumán Government management system",
      desc: es ? "Plataforma con roles y permisos, auditoría de acciones y reportes en PDF." : "Platform with role-based access, action auditing and PDF reports." },
    { cat: "sys", a: "#2F9E6B", b: "#0B2A1B", href: "#contacto", external: false, tagline: "Next.js · TypeScript · PWA", cta: caseCta,
      meta: es ? "2026 · Cooperativa" : "2026 · Cooperative",
      title: es ? "Cooperativa San Pedro de Colalao" : "San Pedro de Colalao Cooperative",
      desc: es ? "Aplicación web instalable para administrar socios y operaciones, con permisos por rol." : "Installable web app to manage members and operations, with role permissions." },
    { cat: "sys", a: "#7B4CE0", b: "#1D0F4D", href: "#contacto", external: false, tagline: "Node.js · MongoDB · Cypress · NFT", cta: caseCta,
      meta: "2025 · Edtech",
      title: es ? "Certificados NFT y RollingCode+" : "NFT certificates and RollingCode+",
      desc: es ? "Certificados verificables en blockchain y flujo de suscripción, con QA automatizado." : "Blockchain-verifiable certificates and a subscription flow, with automated QA." },
    { cat: "prod", a: "#D1456A", b: "#3F0D20", href: "#contacto", external: false, tagline: "React · Game design", cta: caseCta,
      meta: es ? "2026 · En desarrollo" : "2026 · In progress",
      title: "Deventure",
      desc: es ? "Juego educativo estilo Duolingo y Kahoot para aprender a programar jugando." : "Educational game in the style of Duolingo and Kahoot to learn programming by playing." },
    { cat: "shop", a: "#C58A2E", b: "#3D2306", href: "https://lacopadelrey.netlify.app/", external: true, tagline: "HTML · CSS · Bootstrap", cta: liveCta,
      meta: "E-commerce", title: "La Copa del Rey",
      desc: es ? "Tienda de bebidas con temática medieval: cervezas artesanales, vinos e hidromiel." : "Medieval-themed drinks store: craft beers, wines and mead." },
    { cat: "shop", a: "#1F8CA8", b: "#082B38", href: "https://technorolling.netlify.app/", external: true, tagline: "JavaScript · HTML · CSS · Bootstrap", cta: liveCta,
      meta: "E-commerce", title: "TechnoRolling",
      desc: es ? "Tienda de electrónica y componentes de PC para gamers y entusiastas del hardware." : "Electronics and PC components store for gamers and hardware fans." },
    { cat: "shop", a: "#2E9C7A", b: "#0A3326", href: "https://generalpaz.netlify.app/", external: true, tagline: "React · Node.js · Express · MongoDB", cta: liveCta,
      meta: "E-commerce", title: "Generar Paz Moda",
      desc: es ? "E-commerce de moda sostenible, full stack con MERN." : "Sustainable fashion store, built full stack with MERN." },
  ];
}

export function getServices(lang: Lang) {
  const es = lang === "es";
  return [
    { icon: "M3 5h18v12H3zM8 21h8M12 17v4", title: es ? "Sitios y tiendas online" : "Websites and online stores", desc: es ? "Landing pages, sitios institucionales y e-commerce rápidos, responsive y listos para vender." : "Fast, responsive landing pages, company sites and e-commerce built to sell." },
    { icon: "M4 6h16M4 12h16M4 18h10M18 16l2 2-2 2", title: es ? "Sistemas y APIs a medida" : "Custom systems and APIs", desc: es ? "Paneles de gestión, roles y permisos, auditoría, reportes e integraciones." : "Admin panels, roles and permissions, auditing, reports and integrations." },
    { icon: "M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: es ? "QA y automatización" : "QA and automation", desc: es ? "Pruebas end-to-end con Cypress y Playwright, y revisión de proyectos existentes." : "End-to-end tests with Cypress and Playwright, plus reviews of existing projects." },
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
    { title: es ? "Datos y calidad" : "Data and quality", items: ["PostgreSQL y Prisma", "MongoDB y MySQL", "Cypress y Playwright", "Postman"] },
    { title: es ? "Forma de trabajo" : "Ways of working", items: ["Scrum", "Git y GitHub", "Jira y Trello", es ? "Claude Code y Copilot" : "Claude Code and Copilot"] },
  ];
}
