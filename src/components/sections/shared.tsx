import { useState, useEffect, useRef } from "react";

export const HERO_IMAGE = "https://cdn.poehali.dev/projects/c2ff7195-b676-4c24-b753-d3b14814bb67/files/da437c45-b8f8-475d-a0da-9a8daf615970.jpg";

export const NAV_SECTIONS = [
  { id: "hero", label: "Обзор" },
  { id: "problem", label: "Проблема" },
  { id: "solution", label: "Решение" },
  { id: "market", label: "Рынок" },
  { id: "product", label: "Продукт" },
  { id: "model", label: "Модель" },
  { id: "roadmap", label: "Карта" },
  { id: "financials", label: "Финансы" },
  { id: "team", label: "Команда" },
  { id: "proposal", label: "Предложение" },
];

export function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function MetricCard({ value, suffix, label, delay, start }: { value: number; suffix: string; label: string; delay: string; start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className={`relative p-6 border border-white/10 bg-white/[0.03] hover-card opacity-0-init animate-fade-in-up ${delay}`}>
      <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
        <span style={{ color: 'hsl(28 100% 55%)' }}>{count}</span>
        <span className="text-2xl ml-1" style={{ color: 'hsl(195 100% 50%)' }}>{suffix}</span>
      </div>
      <div className="text-sm text-white/50 font-light tracking-wide">{label}</div>
    </div>
  );
}

export function SectionHeader({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <div className="section-number mb-3">{num} // {subtitle?.toUpperCase()}</div>
      <h2 className="text-5xl font-bold text-white leading-none" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {title}
      </h2>
      <div className="mt-4 h-px w-24" style={{ background: 'linear-gradient(90deg, hsl(28 100% 55%), transparent)' }} />
    </div>
  );
}
