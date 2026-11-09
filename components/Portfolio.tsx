"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { st } from "@/lib/st";
import {
  CONTACT, dict, getFilters, getProjects, getServices, getSkills, getTimeline,
  type FilterId, type Lang,
} from "@/lib/content";

const NAME_WORDS = ["José", "Simón", "Díaz"];

function makeStars() {
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  return Array.from({ length: 110 }, () => {
    const s = rnd() < 0.15 ? 3 : rnd() < 0.5 ? 2 : 1;
    return {
      left: (rnd() * 100).toFixed(2) + "%",
      top: (rnd() * 100).toFixed(2) + "%",
      size: s,
      delay: (rnd() * 6).toFixed(2) + "s",
      dur: (3 + rnd() * 4).toFixed(1) + "s",
    };
  });
}
const STARS = makeStars();

function Icon({ size = 20, sw = 1.8, stroke = "currentColor", children }: { size?: number; sw?: number; stroke?: string; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <>
      <div className="reveal eyebrow mono">{eyebrow}</div>
      <h2 className="reveal sg h2 stitle">{title}</h2>
      {sub && <p className="reveal ssub">{sub}</p>}
    </>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [filter, setFilter] = useState<FilterId>("all");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const d = document.documentElement;
    setTheme(d.getAttribute("data-theme") === "light" ? "light" : "dark");
    setLang(d.getAttribute("lang") === "en" ? "en" : "es");
  }, []);

  useEffect(() => {
    const d = document.documentElement;
    d.setAttribute("data-theme", theme);
    d.setAttribute("lang", lang);
    try { localStorage.setItem("theme", theme); localStorage.setItem("lang", lang); } catch {}
  }, [theme, lang]);

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenu(false); };
    window.addEventListener("keydown", onKey);
    const onResize = () => { if (window.innerWidth > 900) setMenu(false); };
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); document.body.style.overflow = ""; };
  }, [menu]);

  const t = dict[lang];
  const es = lang === "es";
  const isDark = theme === "dark";
  const filters = getFilters(lang);
  const projects = useMemo(() => getProjects(lang).filter((p) => filter === "all" || p.cat === filter), [lang, filter]);
  const services = getServices(lang);
  const timeline = getTimeline(lang);
  const skills = getSkills(lang);

  const N = timeline.length;
  const vb = "0 0 160 " + N * 330;
  let mainD = "M80 165";
  for (let i = 0; i < N - 1; i++) {
    const y = 165 + i * 330;
    const dx = i % 2 === 0 ? 150 : 10;
    mainD += ` C ${dx} ${y + 105}, ${dx} ${y + 225}, 80 ${y + 330}`;
  }

  const waHref = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.waMsg)}`;
  const mailHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(t.mailSubject)}`;

  const pill = (on: boolean) =>
    st(`height: 38px; min-width: 44px; padding: 0 12px; border-radius: 999px; border: 0; font-size: 13px; letter-spacing: 1px; background: ${on ? "var(--ac)" : "transparent"}; color: ${on ? "var(--onac)" : "var(--mu)"}`);

  const navLinks = [
    { href: "#proyectos", label: t.navProjects },
    { href: "#servicios", label: t.navServices },
    { href: "#trayectoria", label: t.navExp },
    { href: "#stack", label: t.navStack },
  ];

  return (
    <div className="page">
      {/* FONDO */}
      <div style={st("position: absolute; inset: 0; overflow: hidden; pointer-events: none")} aria-hidden="true">
        <div className="neb" style={st("position: absolute; top: 380px; right: -240px; width: 820px; height: 820px; border-radius: 50%; background: radial-gradient(circle, var(--n1), transparent 65%)")} />
        <div className="neb" style={st("position: absolute; top: 2200px; left: -320px; width: 780px; height: 780px; border-radius: 50%; background: radial-gradient(circle, var(--n2), transparent 65%); animation-delay: -8s")} />
        <div className="neb" style={st("position: absolute; top: 4600px; right: -300px; width: 800px; height: 800px; border-radius: 50%; background: radial-gradient(circle, var(--n1), transparent 65%); animation-delay: -14s")} />
        {STARS.map((s, i) => (
          <span key={i} className="star" style={{ left: s.left, top: s.top, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.dur }} />
        ))}
        <div className="streak" style={st("top: 140px; left: 8%; animation-delay: 1s")} />
        <div className="streak" style={st("top: 320px; left: 38%; animation-delay: 4.5s; width: 220px")} />
        <div className="streak" style={st("top: 60px; left: 62%; animation-delay: 7s")} />
      </div>

      {/* NAV */}
      <header style={st("position: sticky; top: 0; z-index: 50")}>
        <div className={"drawer" + (menu ? " on" : "")}>
          <div className="dback" onClick={() => setMenu(false)} />
          <nav className="dpanel sg" aria-label="Menu">
            <div className="mono" style={st("font-size: 12px; letter-spacing: 3px; color: var(--fa); margin-bottom: 18px")}>{t.menu}</div>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenu(false)} className="dlink">{l.label}</a>
            ))}
            <a href="#contacto" onClick={() => setMenu(false)} style={st("margin-top: 22px; padding: 16px; border-radius: 14px; text-align: center; background: var(--ac); color: var(--onac); font-weight: 500; font-size: 18px")}>{t.cta}</a>
          </nav>
        </div>
        <div className="navbar" style={st("position: relative; z-index: 2")}>
          <div className="prog" style={st("height: 3px; background: linear-gradient(90deg, #6D7BFF, #B27BFF, #F5B84B); transform-origin: left; transform: scaleX(0)")} />
          <div className="wrap" style={st("display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 74px")}>
            <a href="#top" aria-label="JSD" style={st("display: flex; align-items: center; gap: 12px")}>
              <span className="glass" style={st("width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center")}>
                <Icon size={22} stroke="var(--ac)"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></Icon>
              </span>
              <span className="sg" style={st("font-size: 22px; font-weight: 700; letter-spacing: -0.3px")}>JSD.</span>
            </a>
            <nav className="dnav" aria-label="Principal" style={st("display: flex; gap: 38px; font-size: 15px; color: var(--mu)")}>
              {navLinks.map((l) => (<a key={l.href} className="ul" href={l.href}>{l.label}</a>))}
            </nav>
            <div style={st("display: flex; align-items: center; gap: 10px")}>
              <div className="glass" style={st("display: flex; padding: 3px; border-radius: 999px")}>
                <button className="mono" onClick={() => setLang("es")} aria-label="Español" aria-pressed={es} style={pill(es)}>ES</button>
                <button className="mono" onClick={() => setLang("en")} aria-label="English" aria-pressed={!es} style={pill(!es)}>EN</button>
              </div>
              <button className="glass" onClick={() => setTheme(isDark ? "light" : "dark")} aria-label={t.themeLabel} style={st("width: 46px; height: 46px; border-radius: 50%; display: flex; align-items: center; justify-content: center; padding: 0")}>
                <Icon size={19} sw={1.7}>
                  {isDark
                    ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>
                    : <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />}
                </Icon>
              </button>
              <a className="btn dnav" href="#contacto" style={st("align-items: center; height: 46px; padding: 0 24px; border-radius: 999px; background: var(--ac); color: var(--onac); font-size: 15px; font-weight: 500")}>{t.cta}</a>
              <button className={"hbbtn" + (menu ? " on" : "")} onClick={() => setMenu((m) => !m)} aria-label="Menu" aria-expanded={menu}>
                <span className="hb-box"><span className="hb-in" /></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="wrap" style={st("position: relative; padding-top: 70px; padding-bottom: 60px; min-height: 780px; box-sizing: border-box")}>
          <div className="hero">
            <div style={st("flex: 1 1 560px; min-width: 0")}>
              <div className="mono fade" style={st("display: flex; align-items: center; gap: 14px; font-size: 13px; letter-spacing: 4px; color: var(--mu)")}>
                <span style={st("width: 44px; height: 1px; background: var(--bd)")} />{t.loc}
              </div>
              <h1 className="sg" aria-label="José Simón Díaz" style={st("margin: 28px 0 0; font-size: clamp(60px, 9.4vw, 138px); line-height: 0.95; font-weight: 700; letter-spacing: -0.04em; display: flex; flex-wrap: wrap; column-gap: 0.28em")}>
                {NAME_WORDS.map((w, wi) => (
                  <span key={w} aria-hidden="true" style={st("display: inline-flex; white-space: nowrap")}>
                    {w.split("").map((ch, i) => (
                      <span key={i} className="lt" style={{ animationDelay: (0.15 + (wi * 5 + i) * 0.06).toFixed(2) + "s" }}>{ch}</span>
                    ))}
                  </span>
                ))}
              </h1>
              <div className="sg fade f1" style={st("margin-top: 26px; font-size: clamp(22px, 2.4vw, 30px); font-weight: 500")}>{t.role1} <span style={st("color: var(--ac)")}>{t.role2}</span></div>
              <div className="mono fade f1" style={st("margin-top: 16px; display: flex; align-items: center; gap: 10px; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase; color: #3DDC84")}>
                <span className="dot" style={st("width: 8px; height: 8px; border-radius: 50%; background: #3DDC84")} />{t.avail}
              </div>
              <p className="fade f2" style={st("margin: 26px 0 0; max-width: 540px; font-size: 19px; color: var(--mu)")}>{t.sub}</p>
              <div className="fade f3" style={st("margin-top: 34px; display: flex; flex-wrap: wrap; gap: 16px")}>
                <a className="btn glass hcard" href={t.cvHref} download style={st("border-color: rgba(245,184,75,.45)")}>
                  <div className="mono" style={st("font-size: 11px; letter-spacing: 2px; color: #F5B84B")}>{t.cvLabel}</div>
                  <div className="sg" style={st("margin-top: 6px; font-size: 21px; font-weight: 700")}>{t.cvBtn}</div>
                </a>
                <a className="btn glass hcard" href={CONTACT.github} target="_blank" rel="noopener noreferrer" style={st("border-color: rgba(141,157,255,.45)")}>
                  <div className="mono" style={st("font-size: 11px; letter-spacing: 2px; color: var(--ac)")}>{t.ghLabel}</div>
                  <div className="sg" style={st("margin-top: 6px; font-size: 21px; font-weight: 700; display: flex; align-items: center; gap: 10px")}>
                    <Icon size={22} sw={1.7}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></Icon>GitHub
                  </div>
                </a>
              </div>
              <div className="fade f4" style={st("margin-top: 26px; display: flex; flex-wrap: wrap; gap: 12px")}>
                {[{ text: t.b1, color: "#F5B84B" }, { text: t.b2, color: "var(--ac)" }].map((b) => (
                  <span key={b.text} className="glass badge"><span style={{ background: b.color }} />{b.text}</span>
                ))}
              </div>
            </div>

            <div className="fade f2" style={st("flex: 1 1 360px; min-width: 0; display: flex; justify-content: center")}>
              <svg viewBox="0 0 400 400" style={st("width: 100%; max-width: 460px; overflow: visible")} role="img" aria-label={t.vizLabel}>
                <defs>
                  <radialGradient id="cg" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor="#B8C3FF" /><stop offset="55%" stopColor="#6D7BFF" /><stop offset="100%" stopColor="#6D7BFF" stopOpacity="0" /></radialGradient>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="var(--bd)" strokeDasharray="2 8" />
                <circle cx="200" cy="200" r="95" fill="none" stroke="var(--bd)" />
                <g className="link" stroke="var(--ac)" strokeWidth="1.2" fill="none" opacity=".7">
                  <path d="M200 200L90 90" /><path d="M200 200L318 110" /><path d="M200 200L345 250" /><path d="M200 200L250 345" /><path d="M200 200L70 290" />
                </g>
                <circle className="core" cx="200" cy="200" r="46" fill="url(#cg)" />
                <circle cx="200" cy="200" r="13" fill="#fff" />
                <g className="d1"><circle cx="90" cy="90" r="9" fill="#F5B84B" /><text x="90" y="64" textAnchor="middle" className="mono" fontSize="14" fill="var(--tx)">TypeScript</text></g>
                <g className="d2"><circle cx="318" cy="110" r="9" fill="#9DB0FF" /><text x="318" y="84" textAnchor="middle" className="mono" fontSize="14" fill="var(--tx)">React</text></g>
                <g className="d1"><circle cx="345" cy="250" r="9" fill="#B27BFF" /><text x="345" y="282" textAnchor="middle" className="mono" fontSize="14" fill="var(--tx)">NestJS</text></g>
                <g className="d2"><circle cx="250" cy="345" r="9" fill="#3DDC84" /><text x="250" y="378" textAnchor="middle" className="mono" fontSize="14" fill="var(--tx)">PostgreSQL</text></g>
                <g className="d1"><circle cx="70" cy="290" r="9" fill="#F5B84B" /><text x="70" y="322" textAnchor="middle" className="mono" fontSize="14" fill="var(--tx)">AI agents</text></g>
              </svg>
            </div>
          </div>
          <div style={st("margin-top: 44px; display: flex; flex-direction: column; align-items: center; gap: 2px; color: var(--ac)")} aria-hidden="true">
            <svg className="chev" width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3l8 8 8-8" /></svg>
            <svg className="chev" style={{ animationDelay: ".25s" }} width="22" height="14" viewBox="0 0 22 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 3l8 8 8-8" /></svg>
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="wrap sect" style={st("position: relative")}>
          <SectionHead eyebrow={t.eyProjects} title={t.titleProjects} sub={t.subProjects} />
          <div className="reveal" style={st("margin-top: 36px; display: flex; gap: 10px; flex-wrap: wrap; justify-content: center")}>
            {filters.map((f) => {
              const on = filter === f.id;
              return (
                <button key={f.id} className="mono" onClick={() => setFilter(f.id)} aria-pressed={on}
                  style={st(`height: 40px; padding: 0 18px; border-radius: 999px; font-size: 12px; letter-spacing: 2px; border: 1px solid ${on ? "var(--ac)" : "var(--bd)"}; background: ${on ? "var(--ac)" : "transparent"}; color: ${on ? "var(--onac)" : "var(--mu)"}`)}>
                  {f.label}
                </button>
              );
            })}
          </div>
          <div className="proj" style={st("margin-top: 44px")}>
            {projects.map((p) => (
              <a key={p.title} href={p.href} {...(p.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="card glass reveal" style={st("display: block; border-radius: 24px; overflow: hidden")}>
                <div style={st("height: 230px; overflow: hidden")}>
                  <div className="thumb" style={st(`height: 100%; padding: 26px; box-sizing: border-box; background: linear-gradient(135deg, ${p.a}, ${p.b})`)}>
                    <div style={st("display: flex; gap: 7px")}>
                      {[0, 1, 2].map((k) => (<span key={k} style={st("width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.4)")} />))}
                    </div>
                    <div style={st("margin-top: 22px; width: 48%; height: 20px; border-radius: 7px; background: rgba(255,255,255,.9)")} />
                    <div style={st("margin-top: 10px; width: 30%; height: 10px; border-radius: 5px; background: rgba(255,255,255,.4)")} />
                    <div style={st("margin-top: 22px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px")}>
                      {[0, 1, 2].map((k) => (<div key={k} style={st("height: 60px; border-radius: 10px; background: rgba(255,255,255,.2)")} />))}
                    </div>
                  </div>
                </div>
                <div style={st("padding: 26px 28px 30px")}>
                  <div className="mono" style={st("font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #F5B84B")}>{p.meta}</div>
                  <h3 className="sg" style={st("margin: 10px 0 0; font-size: 27px; line-height: 1.12; font-weight: 700; letter-spacing: -0.02em")}>{p.title}</h3>
                  <p style={st("margin: 12px 0 0; color: var(--mu); font-size: 16px")}>{p.desc}</p>
                  <div className="mono" style={st("margin-top: 18px; font-size: 12px; color: var(--ac); letter-spacing: .5px")}>{p.tagline}</div>
                  <div style={st("margin-top: 20px; font-size: 15px; font-weight: 500")}>{p.cta}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="wrap sect" style={st("position: relative")}>
          <SectionHead eyebrow={t.eyServices} title={t.titleServices} />
          <div className="g4" style={st("margin-top: 52px")}>
            {services.map((s) => (
              <div key={s.title} className="card glass reveal" style={st("padding: 32px 26px; border-radius: 22px; min-height: 280px")}>
                <div style={st("width: 50px; height: 50px; border-radius: 14px; background: var(--pn2); border: 1px solid var(--bd); display: flex; align-items: center; justify-content: center")}>
                  <Icon size={24} sw={1.7} stroke="var(--ac)"><path d={s.icon} /></Icon>
                </div>
                <h3 className="sg" style={st("margin: 24px 0 0; font-size: 22px; line-height: 1.15; font-weight: 700")}>{s.title}</h3>
                <p style={st("margin: 10px 0 0; color: var(--mu); font-size: 15px")}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TRAYECTORIA */}
        <section id="trayectoria" className="wrap sect" style={st("position: relative; max-width: 1120px")}>
          <SectionHead eyebrow={t.eyExp} title={t.titleExp} sub={t.aboutP} />
          <div className="tl" style={st("margin-top: 72px; position: relative")}>
            <div className="mline" />
            <svg className="mainline" viewBox={vb} preserveAspectRatio="none" aria-hidden="true">
              <path d={mainD} fill="none" stroke="var(--bd)" strokeWidth="1.5" strokeDasharray="2 8" vectorEffect="non-scaling-stroke" />
              <path className="pdraw" pathLength={1} d={mainD} fill="none" stroke="var(--ac)" strokeWidth="10" opacity=".3" vectorEffect="non-scaling-stroke" style={{ filter: "blur(7px)" }} />
              <path className="pdraw" pathLength={1} d={mainD} fill="none" stroke="var(--ac)" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
            {timeline.map((e, i) => (
              <article key={e.role + e.when} className="trow">
                <div className={(i % 2 === 0 ? "cL" : "cR") + " sc"}>
                  <div className="card glass" style={st("padding: 30px 32px; border-radius: 22px")}>
                    <div style={st("display: flex; justify-content: space-between; align-items: baseline; gap: 16px; flex-wrap: wrap")}>
                      <h3 className="sg" style={st("margin: 0; font-size: 26px; line-height: 1.15; font-weight: 700")}>{e.role}</h3>
                      <div className="mono" style={st("font-size: 12px; letter-spacing: 1px; color: var(--mu)")}>{e.when}</div>
                    </div>
                    <div className="sg" style={st("margin-top: 10px; font-size: 18px; font-weight: 500; color: var(--ac)")}>{e.org}</div>
                    <p style={st("margin: 12px 0 0; color: var(--mu); font-size: 16px")}>{e.desc}</p>
                    <div className="mono" style={st("margin-top: 16px; font-size: 12px; color: var(--fa); line-height: 1.8")}>{e.tags}</div>
                  </div>
                </div>
                <div className="ncell"><span className="nd sc" /></div>
              </article>
            ))}
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="wrap sect" style={st("position: relative")}>
          <SectionHead eyebrow={t.eyStack} title={t.titleStack} />
          <div className="g4" style={st("margin-top: 52px")}>
            {skills.map((k) => (
              <div key={k.title} className="card glass reveal" style={st("padding: 28px 26px; border-radius: 22px")}>
                <div className="mono" style={st("font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #F5B84B")}>{k.title}</div>
                <ul style={st("margin: 18px 0 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 10px")}>
                  {k.items.map((it) => (
                    <li key={it} className="sg" style={st("font-size: 18px; display: flex; align-items: center; gap: 12px")}><span style={st("width: 6px; height: 6px; border-radius: 50%; background: var(--ac)")} />{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="wrap sect" style={st("position: relative; padding-bottom: 40px")}>
          <div className="glass reveal" style={st("padding: 84px 40px; border-radius: 36px; text-align: center; border-color: var(--ac); box-shadow: 0 0 140px var(--n1)")}>
            <div className="eyebrow mono">{t.eyContact}</div>
            <h2 className="sg" style={st("margin: 26px auto 0; max-width: 820px; font-size: clamp(40px, 6.2vw, 88px); line-height: 1; font-weight: 700; letter-spacing: -0.04em")}>{t.cTitle1} <span style={st("color: var(--ac)")}>{t.cTitle2}</span></h2>
            <p style={st("margin: 26px auto 0; max-width: 500px; color: var(--mu); font-size: 18px")}>{t.cSub}</p>
            <div style={st("margin-top: 42px; display: flex; flex-wrap: wrap; gap: 14px; justify-content: center")}>
              <a className="btn cbtn" href={waHref} target="_blank" rel="noopener noreferrer" style={st("background: var(--ac); color: var(--onac); border: 1px solid transparent")}>
                <Icon><path d="M21 11.5a8.4 8.4 0 01-12.4 7.4L3 20.5l1.6-5.4A8.4 8.4 0 1121 11.5z" /></Icon>WhatsApp
              </a>
              <a className="btn glass cbtn" href={mailHref}>
                <Icon><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 7l9 6 9-6" /></Icon>{t.mailBtn}
              </a>
              <a className="btn glass cbtn" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 100 4 2 2 0 000-4z" /></Icon>LinkedIn
              </a>
            </div>
            <div style={st("margin-top: 22px; font-size: 14px; color: var(--fa)")}>{t.formNote}</div>
          </div>
        </section>
      </main>

      <footer className="wrap" style={st("position: relative; padding-top: 40px; padding-bottom: 48px; display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; font-size: 14px; color: var(--mu)")}>
        <div style={st("display: flex; gap: 26px; flex-wrap: wrap")}>
          <a className="ul" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="ul" href={CONTACT.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="ul" href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div style={st("display: flex; gap: 26px; flex-wrap: wrap; color: var(--fa)")}>
          <span>© {new Date().getFullYear()} José Simón Díaz</span>
          <a className="ul" href="#top">{t.top} ↑</a>
        </div>
      </footer>
    </div>
  );
}
