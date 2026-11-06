"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { assistantText, type AssistantLocale } from "./hassaanAssistantText";
import styles from "./HassaanAssistant.module.css";

const PHONE = "31104857673"; // Preserved from the existing website widget.
const TOPICS = ["Flights & prices", "Latest offers", "Holiday packages", "Umrah packages", "Visa assistance", "eSIM & connectivity", "Hotels & stays", "Change / cancel booking", "Custom travel quote"];
const SYMBOLS = ["✈", "✦", "☀", "☾", "✓", "◎", "⌂", "↻", "◇"];
const SESSION_KEY = "ht:assistant:nudges:v1";

export default function FloatingWhatsApp() {
  const { language } = useLanguage();
  const t = assistantText[language as AssistantLocale] || assistantText.en;
  const rtl = language === "ur" || language === "ar";
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<number | null>(null);
  const [nudge, setNudge] = useState(false);
  const [question, setQuestion] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travellers, setTravellers] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const stopped = useRef(false);
  const count = useRef(0);
  const id = useId();

  useEffect(() => {
    try { count.current = Math.min(3, Math.max(0, Number(sessionStorage.getItem(SESSION_KEY)) || 0)); } catch { /* Private mode: memory fallback. */ }
    let elapsed = 0;
    const timer = window.setInterval(() => {
      if (document.hidden || stopped.current || count.current >= 3) return;
      elapsed += 1;
      if (elapsed % 30 === 0) {
        count.current += 1;
        try { sessionStorage.setItem(SESSION_KEY, String(count.current)); } catch { /* Optional storage. */ }
        setNudge(true);
      }
      if (elapsed % 30 === 8) setNudge(false);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => panel.current?.querySelector<HTMLButtonElement>("button")?.focus());
    function keyboard(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); launcher.current?.focus(); }
      if (event.key !== "Tab") return;
      const elements = panel.current?.querySelectorAll<HTMLElement>('button, a[href], input, textarea, select, [tabindex="0"]');
      if (!elements?.length) return;
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    document.addEventListener("keydown", keyboard);
    return () => { cancelAnimationFrame(frame); document.removeEventListener("keydown", keyboard); };
  }, [open]);

  function show() { stopped.current = true; setNudge(false); setOpen(true); }
  function dismiss() { stopped.current = true; setNudge(false); }
  function whatsappUrl() {
    const lines = ["Hello Hassaan Travel!", `Enquiry: ${topic === null ? "General question" : TOPICS[topic]}`, `Visitor language: ${language}`];
    if (destination.trim()) lines.push(`Destination / route: ${destination.trim()}`);
    if (dates.trim()) lines.push(`Travel dates: ${dates.trim()}`);
    if (travellers.trim()) lines.push(`Travellers: ${travellers.trim()}`);
    if (budget.trim()) lines.push(`Budget: ${budget.trim()}`);
    if (question.trim()) lines.push(`Question: ${question.trim()}`);
    lines.push("Please confirm current prices, offers and availability.");
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
  }

  return <div className={styles.widget} dir={rtl ? "rtl" : "ltr"} lang={language}>
    {nudge && !open && <div className={styles.nudge} role="status">
      <button onClick={show}>{t.nudge} <span aria-hidden="true">↗</span></button>
      <button className={styles.dismiss} onClick={dismiss} aria-label={t.close}>×</button>
    </div>}
    {open && <div ref={panel} id={id} className={styles.panel} role="dialog" aria-modal="true" aria-labelledby={`${id}-title`}>
      <header className={styles.header}>
        <img src="/assets/hassaan-assistant/captain.png" alt="" className={styles.portrait} />
        <div><span className={styles.brand}>HASSAAN TRAVEL</span><h2 id={`${id}-title`}>{t.subtitle}</h2><small>WhatsApp</small></div>
        <button className={styles.close} onClick={() => {setOpen(false); launcher.current?.focus();}} aria-label={t.close}>×</button>
      </header>
      <div className={styles.body}>
        <h3>{t.title}</h3><p className={styles.intro}>{t.intro}</p>
        <div className={styles.services}>{t.services.map((label, i) => <button key={i} aria-pressed={topic === i} className={topic === i ? styles.selected : ""} onClick={() => {setTopic(i); setError(false);}}><span aria-hidden="true">{SYMBOLS[i]}</span>{label}<b aria-hidden="true">↗</b></button>)}</div>
        <form onSubmit={event => event.preventDefault()}>
          {topic !== null && <div className={styles.fields}>
            <label>{t.destination}<input value={destination} onChange={e => setDestination(e.target.value)} maxLength={140} /></label>
            <label>{t.dates}<input value={dates} onChange={e => setDates(e.target.value)} maxLength={100} /></label>
            <label>{t.travellers}<input value={travellers} onChange={e => setTravellers(e.target.value)} maxLength={60} /></label>
            <label>{t.budget}<input value={budget} onChange={e => setBudget(e.target.value)} maxLength={80} /></label>
          </div>}
          <label className={styles.question}>{t.question}<textarea value={question} onChange={e => {setQuestion(e.target.value); setError(false);}} placeholder={t.placeholder} maxLength={1500} rows={3} aria-invalid={error} aria-describedby={error ? `${id}-error` : undefined} /></label>
          {error && <p id={`${id}-error`} role="alert" className={styles.error}>{t.error}</p>}
          <a className={styles.send} href={whatsappUrl()} target="_blank" rel="noopener noreferrer" onClick={event => {if (topic === null && !question.trim()) {event.preventDefault(); setError(true);} }}> <span>{t.send}</span><span aria-hidden="true">↗</span></a>
          <p className={styles.privacy}>{t.privacy}</p>
        </form>
      </div>
    </div>}
    <button ref={launcher} type="button" className={`${styles.launcher} ${open ? styles.active : ""}`} onClick={() => {if(open) setOpen(false); else show();}} aria-label={open ? t.close : t.subtitle} aria-expanded={open} aria-controls={open ? id : undefined} aria-haspopup="dialog">
      <span className={styles.smoke} aria-hidden="true" />
      <img src="/assets/hassaan-assistant/captain.png" alt="" />
      <span className={styles.badge} aria-hidden="true">↗</span>
    </button>
  </div>;
}
