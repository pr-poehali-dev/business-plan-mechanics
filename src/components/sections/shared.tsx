import { useState, useEffect, useRef } from "react";

export const NAV_SECTIONS = [
  { id: "hero", label: "Обзор" },
  { id: "summary", label: "Резюме" },
  { id: "market", label: "Рынок" },
  { id: "snow", label: "Снег" },
  { id: "passport", label: "Паспорт ТС" },
  { id: "financials", label: "Финансы" },
  { id: "b2b", label: "B2B" },
  { id: "roadmap", label: "Роадмап" },
  { id: "kpi", label: "KPI" },
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
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function SectionHeader({ num, title, subtitle, accent = "orange" }: {
  num: string; title: string; subtitle?: string; accent?: "orange" | "cyan" | "green";
}) {
  const colors: Record<string, string> = {
    orange: "hsl(28 100% 55%)",
    cyan: "hsl(195 100% 50%)",
    green: "hsl(142 70% 50%)",
  };
  return (
    <div className="mb-12">
      <div className="section-number mb-3">{num} // {subtitle?.toUpperCase()}</div>
      <h2 className="text-5xl font-bold text-white leading-none" style={{ fontFamily: 'Oswald, sans-serif' }}>
        {title}
      </h2>
      <div className="mt-4 h-px w-24" style={{ background: `linear-gradient(90deg, ${colors[accent]}, transparent)` }} />
    </div>
  );
}
