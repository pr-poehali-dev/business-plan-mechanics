import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c2ff7195-b676-4c24-b753-d3b14814bb67/files/da437c45-b8f8-475d-a0da-9a8daf615970.jpg";

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
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

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function MetricCard({ value, suffix, label, delay, start }: { value: number; suffix: string; label: string; delay: string; start: boolean }) {
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

function SectionHeader({ num, title, subtitle }: { num: string; title: string; subtitle?: string }) {
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

const NAV_SECTIONS = [
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

function Nav({ active }: { active: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'rgba(10, 13, 18, 0.92)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: 'hsl(28 100% 55%)', background: 'rgba(255,140,30,0.1)' }}>
            <Icon name="Settings2" size={16} style={{ color: 'hsl(28 100% 55%)' }} />
          </div>
          <span className="font-bold text-white text-sm" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.2em' }}>МЕХАНИКИ</span>
          <span className="tech-tag ml-2">БИЗНЕС-ПЛАН</span>
        </div>
        <div className="hidden md:flex items-center gap-5">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                color: active === s.id ? 'hsl(28 100% 55%)' : 'rgba(255,255,255,0.35)'
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");
  const { ref: statsRef, inView: statsInView } = useInView();
  const { ref: marketRef, inView: marketInView } = useInView();

  const rev40 = useCountUp(40, 1800, statsInView);
  const rev3 = useCountUp(3, 1800, statsInView);
  const rev180 = useCountUp(180, 1800, statsInView);
  const rev12 = useCountUp(12, 1800, statsInView);

  const mTAM = useCountUp(4200, 2000, marketInView);
  const mSAM = useCountUp(380, 2000, marketInView);
  const mSOM = useCountUp(42, 2000, marketInView);

  useEffect(() => {
    const handleScroll = () => {
      for (const s of NAV_SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom > 100) { setActiveSection(s.id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(220 20% 6%)' }}>
      <Nav active={activeSection} />

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid animate-grid" />
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-20" style={{ mixBlendMode: 'luminosity' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,13,18,0.98) 0%, rgba(10,13,18,0.7) 50%, rgba(10,13,18,0.95) 100%)' }} />
        </div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(28 100% 55%), transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(195 100% 50%), transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
              <div className="animate-pulse-orange w-2 h-2 rounded-full" style={{ background: 'hsl(28 100% 55%)' }} />
              <span className="tech-tag">Конфиденциальный документ — 2026</span>
            </div>

            <h1 className="font-bold leading-none mb-6 text-glow-orange opacity-0-init animate-fade-in-up delay-200"
                style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(60px, 10vw, 130px)', color: 'white' }}>
              МЕ<span style={{ color: 'hsl(28 100% 55%)' }}>ХА</span>НИ<br />КИ
            </h1>

            <div className="text-xl text-white/50 mb-3 font-light opacity-0-init animate-fade-in-up delay-300">
              Интеллектуальная платформа автоматизации, аналитики и интеграций
            </div>
            <div className="text-base text-white/30 mb-10 font-mono-brand opacity-0-init animate-fade-in-up delay-400">
              // Предложение о внедрении в Газпром нефть
            </div>

            <div className="flex flex-wrap gap-4 mb-20 opacity-0-init animate-fade-in-up delay-500">
              <a href="#proposal" className="px-8 py-3 font-semibold text-sm tracking-widest uppercase transition-all hover:opacity-90"
                 style={{ background: 'hsl(28 100% 55%)', color: 'hsl(220 20% 6%)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
                Перейти к предложению
              </a>
              <a href="#solution" className="px-8 py-3 font-semibold text-sm tracking-widest uppercase border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
                 style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
                Изучить решение
              </a>
            </div>

            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { count: rev40, suf: "%", label: "Сокращение издержек" },
                { count: rev3, suf: "x", label: "Рост эффективности" },
                { count: rev180, suf: "+", label: "Интеграций и API" },
                { count: rev12, suf: " мес", label: "Срок окупаемости" },
              ].map((m, i) => (
                <div key={i} className="relative p-6 border border-white/10 bg-white/[0.03] hover-card">
                  <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    <span style={{ color: 'hsl(28 100% 55%)' }}>{m.count}</span>
                    <span className="text-2xl ml-1" style={{ color: 'hsl(195 100% 50%)' }}>{m.suf}</span>
                  </div>
                  <div className="text-sm text-white/50 font-light">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/20 tracking-widest font-mono-brand">SCROLL</span>
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, hsl(28 100% 55%), transparent)' }} />
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section id="problem" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="01" title="ПРОБЛЕМА" subtitle="Текущее состояние рынка" />
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-lg text-white/60 leading-relaxed mb-8 font-light">
                Крупнейшие российские компании теряют миллиарды рублей ежегодно из-за устаревших процессов управления, разрозненных данных и отсутствия аналитики реального времени.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "AlertTriangle", title: "Разрозненные данные", desc: "Информация хранится в десятках несвязанных систем. Решения принимаются вслепую." },
                  { icon: "Clock", title: "Ручные процессы", desc: "До 60% рабочего времени уходит на рутинные операции, которые можно автоматизировать." },
                  { icon: "TrendingDown", title: "Упущенная выгода", desc: "Отсутствие предиктивной аналитики не позволяет предотвращать потери заблаговременно." },
                  { icon: "Link2Off", title: "Нет интеграции", desc: "Разные отделы работают изолированно, дублируя усилия и накапливая ошибки." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 border border-white/5 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                      <Icon name={item.icon} size={18} style={{ color: 'hsl(28 100% 55%)' }} />
                    </div>
                    <div>
                      <div className="text-white font-medium mb-1" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{item.title}</div>
                      <div className="text-sm text-white/40 font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative p-8 border border-white/10" style={{ background: 'rgba(255,140,30,0.05)' }}>
                <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// ПОТЕРИ ОТРАСЛИ В ГОД</div>
                {[
                  { label: "Неэффективность логистики", pct: 78, val: "₽2.4 трлн" },
                  { label: "Дублирование процессов", pct: 62, val: "₽1.8 трлн" },
                  { label: "Ошибки планирования", pct: 55, val: "₽1.2 трлн" },
                  { label: "Потери от простоев", pct: 40, val: "₽890 млрд" },
                ].map((item) => (
                  <div key={item.label} className="mb-5">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/60 font-light">{item.label}</span>
                      <span className="font-mono-brand text-xs" style={{ color: 'hsl(28 100% 55%)' }}>{item.val}</span>
                    </div>
                    <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="progress-bar" style={{ width: `${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-l-2" style={{ borderColor: 'hsl(195 100% 50%)', background: 'rgba(0,210,255,0.04)' }}>
                <div className="text-sm text-white/30 font-mono-brand mb-3 tracking-wider">// ВЫВОД</div>
                <p className="text-white/70 font-light leading-relaxed">
                  Российский рынок enterprise-автоматизации на переломной точке. Санкционное давление создало критический запрос на отечественные технологические решения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION ═══ */}
      <section id="solution" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="02" title="РЕШЕНИЕ" subtitle="Платформа Механики" />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "BarChart3", tag: "АНАЛИТИКА", color: "hsl(28 100% 55%)", title: "Реальная аналитика", desc: "Единый дашборд с данными в режиме реального времени. Предиктивные модели на основе ИИ.", features: ["Потоковая обработка данных", "ML-прогнозирование", "Кастомные дашборды"] },
              { icon: "Cpu", tag: "АВТОМАТИЗАЦИЯ", color: "hsl(195 100% 50%)", title: "Умная автоматизация", desc: "RPA-боты для рутинных задач. No-code конструктор бизнес-процессов. Умная маршрутизация.", features: ["RPA-роботы", "No-code конструктор", "AI-оркестрация"] },
              { icon: "GitMerge", tag: "ИНТЕГРАЦИИ", color: "hsl(120 60% 50%)", title: "Бесшовные интеграции", desc: "Готовые коннекторы для SAP, 1С, Oracle и 180+ систем. Синхронизация без остановки.", features: ["180+ коннекторов", "REST/SOAP/GraphQL", "Реал-тайм синхронизация"] },
            ].map((card) => (
              <div key={card.title} className="relative p-8 border border-white/10 hover-card group" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-all" style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
                <div className="w-12 h-12 flex items-center justify-center border mb-6" style={{ borderColor: `${card.color}40`, background: `${card.color}15` }}>
                  <Icon name={card.icon} size={22} style={{ color: card.color }} />
                </div>
                <div className="tech-tag mb-4" style={{ borderColor: `${card.color}30`, color: card.color }}>{card.tag}</div>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>{card.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-6 font-light">{card.desc}</p>
                <div className="space-y-2">
                  {card.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-white/40">
                      <div className="w-1 h-1 rounded-full" style={{ background: card.color }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="relative p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// АРХИТЕКТУРА ПЛАТФОРМЫ</div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["ERP / 1С", "SAP", "Oracle", "Excel", "CRM", "IoT"].map((src, i) => (
                <div key={src} className="flex items-center gap-2">
                  <div className="px-3 py-2 border border-white/10 text-xs text-white/50 font-mono-brand">{src}</div>
                  {i < 5 && <Icon name="ArrowRight" size={12} style={{ color: 'rgba(255,255,255,0.15)' }} />}
                </div>
              ))}
              <div className="flex items-center gap-2">
                <Icon name="ArrowRight" size={18} style={{ color: 'hsl(28 100% 55%)' }} />
                <div className="px-6 py-3 border font-bold text-sm" style={{ borderColor: 'hsl(28 100% 55%)', background: 'rgba(255,140,30,0.1)', color: 'hsl(28 100% 55%)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                  МЕХАНИКИ CORE
                </div>
                <Icon name="ArrowRight" size={18} style={{ color: 'hsl(195 100% 50%)' }} />
              </div>
              {["Дашборды", "Отчёты", "Алерты", "API"].map((out) => (
                <div key={out} className="px-3 py-2 border border-white/10 text-xs text-white/50 font-mono-brand">{out}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARKET ═══ */}
      <section id="market" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="03" title="РЫНОК" subtitle="Объём и потенциал" />
          <div ref={marketRef} className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { label: "TAM — Весь рынок", count: mTAM, suf: "₽ млрд", desc: "Мировой рынок enterprise-автоматизации к 2027", col: "hsl(28 100% 55%)", letter: "T" },
              { label: "SAM — Доступный рынок", count: mSAM, suf: "₽ млрд", desc: "Российский enterprise B2B рынок автоматизации", col: "hsl(195 100% 50%)", letter: "S" },
              { label: "SOM — Целевой рынок", count: mSOM, suf: "₽ млрд", desc: "Нефтегазовый и промышленный сектор РФ", col: "hsl(120 60% 50%)", letter: "S" },
            ].map((m) => (
              <div key={m.label} className="relative p-8 border border-white/10 hover-card overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/[0.03]" style={{ fontFamily: 'Oswald, sans-serif' }}>{m.letter}</div>
                <div className="text-xs text-white/30 font-mono-brand mb-4 tracking-widest">{m.label}</div>
                <div className="text-5xl font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: m.col }}>{m.count}</div>
                <div className="text-lg text-white/40 font-light mb-4">{m.suf}</div>
                <p className="text-sm text-white/40 font-light">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// РОСТ РЫНКА (%/ГОД)</div>
              {[{ year: "2023", grow: 45 }, { year: "2024", grow: 62 }, { year: "2025", grow: 78 }, { year: "2026", grow: 89 }, { year: "2027П", grow: 100 }].map((row) => (
                <div key={row.year} className="flex items-center gap-4 mb-4">
                  <div className="w-12 text-xs font-mono-brand text-white/30">{row.year}</div>
                  <div className="flex-1 h-6" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div className="h-full" style={{ width: `${row.grow}%`, background: `linear-gradient(90deg, hsl(28 100% 55%), hsl(195 100% 50%))`, opacity: row.grow / 100 * 0.8 + 0.2 }} />
                  </div>
                  <div className="w-12 text-xs font-mono-brand text-right" style={{ color: 'hsl(28 100% 55%)' }}>+{row.grow}%</div>
                </div>
              ))}
            </div>
            <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// КОНКУРЕНТНОЕ ПРЕИМУЩЕСТВО</div>
              {[
                { label: "Локализация (российское ПО)", score: 95 },
                { label: "Интеграция с 1С / SAP", score: 92 },
                { label: "Нейросетевая аналитика", score: 88 },
                { label: "Время внедрения", score: 85 },
                { label: "Стоимость владения (TCO)", score: 90 },
              ].map((item) => (
                <div key={item.label} className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/50">{item.label}</span>
                    <span className="font-mono-brand" style={{ color: 'hsl(28 100% 55%)' }}>{item.score}/100</span>
                  </div>
                  <div className="h-1 w-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ width: `${item.score}%`, height: '100%', background: 'linear-gradient(90deg, hsl(28 100% 55%), hsl(195 100% 50%))' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT ═══ */}
      <section id="product" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(195 100% 50%), transparent)' }} />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="04" title="ПРОДУКТ" subtitle="Функциональные возможности" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { module: "МОДУЛЬ 01", title: "Аналитика и BI", items: ["Единое хранилище данных (Data Lake)", "Дашборды реального времени", "Предиктивные ML-модели", "Аномали-детектор", "Автоматические отчёты"] },
              { module: "МОДУЛЬ 02", title: "Автоматизация процессов", items: ["RPA-роботы для рутинных операций", "Конструктор бизнес-процессов (no-code)", "Умная маршрутизация задач", "AI-ассистент для сотрудников", "Автоматический документооборот"] },
              { module: "МОДУЛЬ 03", title: "Интеграции и API", items: ["180+ готовых коннекторов", "Поддержка REST, SOAP, GraphQL", "Синхронизация в реальном времени", "API-шлюз с аутентификацией", "Мониторинг интеграций"] },
              { module: "МОДУЛЬ 04", title: "Безопасность и контроль", items: ["Соответствие ФЗ-152 и ГОСТ", "Ролевая модель доступа (RBAC)", "Полный аудит действий", "Шифрование данных (AES-256)", "Развёртывание on-premise"] },
            ].map((mod, i) => (
              <div key={mod.title} className="relative p-8 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="tech-tag">{mod.module}</div>
                  <div className="w-6 h-6 flex items-center justify-center text-xs font-mono-brand border border-white/10 text-white/20">{String(i + 1).padStart(2, '0')}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>{mod.title}</h3>
                <div className="space-y-3">
                  {mod.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/50 font-light">
                      <Icon name="ChevronRight" size={14} style={{ color: 'hsl(28 100% 55%)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODEL ═══ */}
      <section id="model" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="05" title="БИЗНЕС-МОДЕЛЬ" subtitle="Монетизация и ценообразование" />
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { plan: "СТАРТ", price: "от ₽2 млн", period: "/ год", desc: "Для среднего бизнеса", features: ["До 500 пользователей", "3 модуля", "Облачное развёртывание", "SLA 99.5%", "Тех. поддержка 8/5"], color: "hsl(195 100% 50%)", featured: false },
              { plan: "КОРПОРАТ", price: "от ₽15 млн", period: "/ год", desc: "Для крупного бизнеса", features: ["Без лимита пользователей", "Все модули", "On-premise / гибрид", "SLA 99.9%", "Поддержка 24/7", "Выделенный менеджер"], color: "hsl(28 100% 55%)", featured: true },
              { plan: "ENTERPRISE+", price: "Индивид.", period: "проект", desc: "Для госкорпораций", features: ["Кастомная разработка", "Полная интеграция", "Сертификация ФСТЭК", "Dedicated-инфра", "SLA 99.99%", "Команда in-house"], color: "hsl(120 60% 50%)", featured: false },
            ].map((p) => (
              <div key={p.plan} className={`relative p-8 border hover-card ${p.featured ? 'border-orange-500/50' : 'border-white/10'}`} style={{ background: p.featured ? 'rgba(255,140,30,0.06)' : 'rgba(255,255,255,0.02)' }}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold tracking-widest" style={{ background: 'hsl(28 100% 55%)', color: 'hsl(220 20% 6%)', fontFamily: 'Oswald, sans-serif' }}>РЕКОМЕНДУЕМ</div>
                )}
                <div className="tech-tag mb-4" style={{ borderColor: `${p.color}40`, color: p.color }}>{p.plan}</div>
                <div className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>{p.price}</div>
                <div className="text-sm text-white/30 font-mono-brand mb-2">{p.period}</div>
                <div className="text-xs text-white/40 mb-6">{p.desc}</div>
                <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="space-y-3">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/50 font-light">
                      <Icon name="Check" size={14} style={{ color: p.color }} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-4 tracking-widest">// ДОПОЛНИТЕЛЬНЫЕ ПОТОКИ ДОХОДА</div>
              {[{ label: "Внедрение и интеграция", rev: "Проектно" }, { label: "Обучение персонала", rev: "₽150–500 тыс." }, { label: "Кастомная разработка", rev: "₽2–20 млн" }, { label: "Сопровождение и аудит", rev: "15% от контракта" }].map((r) => (
                <div key={r.label} className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-sm text-white/50 font-light">{r.label}</span>
                  <span className="text-xs font-mono-brand" style={{ color: 'hsl(28 100% 55%)' }}>{r.rev}</span>
                </div>
              ))}
            </div>
            <div className="p-6 border-l-2" style={{ borderColor: 'hsl(28 100% 55%)', background: 'rgba(255,140,30,0.04)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-4 tracking-widest">// ЮНИТ-ЭКОНОМИКА</div>
              {[{ label: "LTV клиента (5 лет)", val: "₽87 млн" }, { label: "CAC (привлечение)", val: "₽3.2 млн" }, { label: "LTV / CAC", val: "27x" }, { label: "Gross Margin", val: "74%" }, { label: "Churn Rate (год)", val: "<4%" }].map((r) => (
                <div key={r.label} className="flex justify-between items-center py-3 border-b border-white/5">
                  <span className="text-sm text-white/50 font-light">{r.label}</span>
                  <span className="text-sm font-bold font-mono-brand" style={{ color: 'hsl(195 100% 50%)' }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ROADMAP ═══ */}
      <section id="roadmap" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="06" title="ДОРОЖНАЯ КАРТА" subtitle="Этапы внедрения" />
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, hsl(28 100% 55%), hsl(195 100% 50%), transparent)', left: '20px' }} />
            <div className="space-y-8 pl-16">
              {[
                { phase: "ФАЗА 01", period: "Q1 2026 — 3 месяца", status: "Старт", color: "hsl(28 100% 55%)", title: "Аудит и подготовка", items: ["Анализ текущей IT-инфраструктуры", "Картирование бизнес-процессов", "Техническое задание", "Команда внедрения"] },
                { phase: "ФАЗА 02", period: "Q2 2026 — 3 месяца", status: "Пилот", color: "hsl(195 100% 50%)", title: "Пилотное внедрение", items: ["Развёртывание на 1 подразделении", "Интеграция с ключевыми системами", "Обучение 50 пользователей", "Первые результаты"] },
                { phase: "ФАЗА 03", period: "Q3–Q4 2026 — 6 месяцев", status: "Масштаб", color: "hsl(120 60% 50%)", title: "Масштабирование", items: ["Развёртывание на всю компанию", "Подключение всех модулей", "Обучение всего персонала", "Полноценная поддержка"] },
                { phase: "ФАЗА 04", period: "2027 — Постоянно", status: "Развитие", color: "hsl(270 70% 65%)", title: "Оптимизация и рост", items: ["Кастомные AI-модели под задачи", "Расширение интеграций", "Новые модули по запросу", "Стратегическое партнёрство"] },
              ].map((phase) => (
                <div key={phase.phase} className="relative flex gap-6">
                  <div className="absolute flex items-center justify-center w-8 h-8 border rounded-full" style={{ borderColor: phase.color, background: `${phase.color}20`, left: '-36px', top: '20px' }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: phase.color }} />
                  </div>
                  <div className="flex-1 p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="flex items-center gap-4 mb-4 flex-wrap">
                      <div className="tech-tag" style={{ borderColor: `${phase.color}40`, color: phase.color }}>{phase.phase}</div>
                      <div className="text-xs font-mono-brand text-white/30">{phase.period}</div>
                      <div className="ml-auto px-3 py-1 text-xs border" style={{ borderColor: `${phase.color}30`, color: phase.color, background: `${phase.color}10` }}>{phase.status}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>{phase.title}</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-white/40 font-light">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: phase.color }} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINANCIALS ═══ */}
      <section id="financials" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="07" title="ФИНАНСЫ" subtitle="Прогноз и инвестиции" />
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Инвестиции в проект", val: "₽45 млн", icon: "TrendingUp", color: "hsl(28 100% 55%)" },
              { label: "Срок окупаемости", val: "12 мес.", icon: "Clock", color: "hsl(195 100% 50%)" },
              { label: "ROI за 3 года", val: "340%", icon: "BarChart3", color: "hsl(120 60% 50%)" },
              { label: "Экономия в год", val: "₽1.2 млрд", icon: "Zap", color: "hsl(270 70% 65%)" },
            ].map((m) => (
              <div key={m.label} className="p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="w-10 h-10 flex items-center justify-center border mb-4" style={{ borderColor: `${m.color}40`, background: `${m.color}15` }}>
                  <Icon name={m.icon} size={18} style={{ color: m.color }} />
                </div>
                <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: m.color }}>{m.val}</div>
                <div className="text-xs text-white/40 font-light">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="p-8 border border-white/10 mb-8" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// ПРОГНОЗ P&L (ДЛЯ ГАЗПРОМ НЕФТЬ), ₽ МЛН</div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-xs font-mono-brand text-white/30 pb-3 pr-8">Показатель</th>
                    {["Q1 2026", "Q2 2026", "Q3-Q4 2026", "2027", "2028"].map((y) => (
                      <th key={y} className="text-right text-xs font-mono-brand text-white/30 pb-3 px-4">{y}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Инвестиции", vals: ["-15", "-12", "-10", "-5", "-3"], color: "text-red-400" },
                    { label: "Операц. экономия", vals: ["0", "+45", "+180", "+680", "+1200"], color: "text-green-400" },
                    { label: "Рост выручки", vals: ["0", "+20", "+120", "+450", "+900"], color: "text-green-400" },
                    { label: "ИТОГО эффект", vals: ["-15", "+53", "+290", "+1125", "+2097"], color: "font-bold text-orange-400" },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-white/5">
                      <td className="py-3 pr-8 text-sm text-white/50 font-light">{row.label}</td>
                      {row.vals.map((v, i) => (
                        <td key={i} className={`py-3 px-4 text-right text-sm font-mono-brand ${row.color}`}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-6 border-l-2 flex gap-8 items-center flex-wrap" style={{ borderColor: 'hsl(195 100% 50%)', background: 'rgba(0,210,255,0.04)' }}>
            {[
              { label: "// ИТОГ ЗА 3 ГОДА", val: "₽3.5 млрд", sub: "Суммарный экономический эффект", col: "hsl(195 100% 50%)" },
              { label: "// ВЛОЖЕНИЯ", val: "₽45 млн", sub: "Совокупные инвестиции", col: "hsl(28 100% 55%)" },
              { label: "// МУЛЬТИПЛИКАТОР", val: "78x", sub: "Каждый вложенный рубль", col: "hsl(120 60% 50%)" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div className="h-12 w-px bg-white/10 hidden md:block" />}
                <div>
                  <div className="text-xs font-mono-brand text-white/30 mb-1">{s.label}</div>
                  <div className="text-4xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: s.col }}>{s.val}</div>
                  <div className="text-sm text-white/40 font-light">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section id="team" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-8">
          <SectionHeader num="08" title="КОМАНДА" subtitle="Ключевые специалисты" />
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Алексей Соколов", role: "CEO & Co-founder", exp: "18 лет", prev: "Экс Яндекс, Сбер", icon: "User" },
              { name: "Мария Новикова", role: "CTO & Co-founder", exp: "15 лет", prev: "Экс Лукойл Digital", icon: "Code2" },
              { name: "Дмитрий Орлов", role: "CPO", exp: "12 лет", prev: "Экс Mail.ru Group", icon: "Layout" },
              { name: "Анна Крылова", role: "Head of Sales", exp: "10 лет", prev: "Экс McKinsey", icon: "TrendingUp" },
            ].map((person) => (
              <div key={person.name} className="p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="w-14 h-14 flex items-center justify-center border mb-4" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                  <Icon name={person.icon} size={24} style={{ color: 'hsl(28 100% 55%)' }} />
                </div>
                <div className="text-white font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{person.name}</div>
                <div className="text-xs font-mono-brand mb-3" style={{ color: 'hsl(28 100% 55%)' }}>{person.role}</div>
                <div className="text-xs text-white/30 font-light">{person.exp} опыта</div>
                <div className="text-xs text-white/30 font-light">{person.prev}</div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{ num: "47", label: "Специалистов в команде", icon: "Users" }, { num: "12", label: "Успешных внедрений", icon: "CheckCircle" }, { num: "6", label: "Лет на рынке", icon: "Calendar" }].map((s) => (
              <div key={s.label} className="flex items-center gap-4 p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="w-12 h-12 flex items-center justify-center border flex-shrink-0" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                  <Icon name={s.icon} size={20} style={{ color: 'hsl(28 100% 55%)' }} />
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(28 100% 55%)' }}>{s.num}</div>
                  <div className="text-sm text-white/40 font-light">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROPOSAL ═══ */}
      <section id="proposal" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(28 100% 55%), transparent)' }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-8 text-center">
          <div className="section-number mb-6">09 // ПРЕДЛОЖЕНИЕ</div>
          <h2 className="text-7xl font-bold text-white mb-4 leading-none text-glow-orange" style={{ fontFamily: 'Oswald, sans-serif' }}>
            СЛЕДУЮЩИЙ<br /><span style={{ color: 'hsl(28 100% 55%)' }}>ШАГ</span>
          </h2>
          <p className="text-lg text-white/50 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Предлагаем провести бесплатный технический аудит инфраструктуры Газпром нефть и подготовить персонализированное предложение по внедрению платформы Механики.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[{ step: "01", title: "Аудит", desc: "Бесплатный технический анализ за 5 дней", icon: "Search" }, { step: "02", title: "Пилот", desc: "30-дневный пилот на выбранном подразделении", icon: "Play" }, { step: "03", title: "Контракт", desc: "Согласование условий и старт проекта", icon: "FileCheck" }].map((s) => (
              <div key={s.step} className="p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="text-4xl font-bold mb-3 text-white/10" style={{ fontFamily: 'Oswald, sans-serif' }}>{s.step}</div>
                <Icon name={s.icon} size={28} style={{ color: 'hsl(28 100% 55%)', marginBottom: '12px' }} />
                <div className="text-white font-bold mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{s.title}</div>
                <div className="text-sm text-white/40 font-light">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-10 py-4 font-bold text-base tracking-widest uppercase transition-all hover:opacity-90"
                    style={{ background: 'hsl(28 100% 55%)', color: 'hsl(220 20% 6%)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
              Запросить аудит
            </button>
            <button className="px-10 py-4 font-bold text-base tracking-widest uppercase border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition-all"
                    style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
              Скачать PDF
            </button>
          </div>
          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs font-mono-brand text-white/30 mb-6 tracking-widest">// КОНТАКТЫ</div>
            <div className="flex flex-wrap justify-center gap-12">
              {[{ icon: "Mail", label: "info@mechaniki.ru" }, { icon: "Phone", label: "+7 (495) 000-00-00" }, { icon: "Globe", label: "www.mechaniki.ru" }].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <Icon name={c.icon} size={16} style={{ color: 'hsl(28 100% 55%)' }} />
                  <span className="text-sm text-white/50 font-mono-brand">{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center border" style={{ borderColor: 'hsl(28 100% 55%)', background: 'rgba(255,140,30,0.1)' }}>
              <Icon name="Settings2" size={12} style={{ color: 'hsl(28 100% 55%)' }} />
            </div>
            <span className="text-sm font-bold text-white/30 tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>МЕХАНИКИ</span>
          </div>
          <div className="text-xs font-mono-brand text-white/20">© 2026 Механики. Конфиденциально.</div>
          <div className="text-xs font-mono-brand text-white/20">v1.0 // Для Газпром нефть</div>
        </div>
      </footer>
    </div>
  );
}