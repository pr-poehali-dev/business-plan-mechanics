import { useEffect, useRef, useState } from "react";

export const NAV_SECTIONS = [
  { id: "hero",     label: "Главная" },
  { id: "services", label: "Сервисы" },
  { id: "data",     label: "Данные" },
  { id: "market",   label: "Рынок" },
  { id: "finance",  label: "Финансы" },
  { id: "pitch",    label: "Предложение" },
];

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function useCountUp(target: number, inView: boolean, duration = 1500) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * p * target));
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return val;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="ya-tag mb-4">{children}</div>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base max-w-2xl" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
      {children}
    </p>
  );
}
