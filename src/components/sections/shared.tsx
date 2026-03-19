import { useEffect, useRef, useState } from "react";

export const NAV_SECTIONS = [
  { id: "hero",             label: "Главная"    },
  { id: "summary",          label: "Резюме"     },
  { id: "finance",          label: "Финансы"    },
  { id: "operations",       label: "Техплан"    },
  { id: "lichniy-mechanik", label: "Механик"    },
  { id: "marketing",        label: "Маркетинг"  },
  { id: "risks",            label: "Риски"      },
  { id: "pitch",            label: "Показатели" },
  { id: "team",             label: "Об авторе"  },
];

/* ── useInView (старый хук, используется в секциях) ── */
export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── ScrollReveal — новый компонент анимации ── */
export function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </div>
  );
}

export function useCountUp(target: number, inView: boolean, duration = 1800) {
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
  return <div className="m-tag mb-5">{children}</div>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-5xl md:text-7xl font-black text-white mb-5 uppercase tracking-tighter">
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base max-w-2xl" style={{ color: 'var(--m-text2)', lineHeight: 1.75 }}>
      {children}
    </p>
  );
}
