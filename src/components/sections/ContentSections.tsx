import Icon from "@/components/ui/icon";
import { SectionHeader, useInView, useCountUp } from "./shared";

function ProblemSection() {
  return (
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
  );
}

function SolutionSection() {
  return (
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
  );
}

function MarketSection() {
  const { ref: marketRef, inView: marketInView } = useInView();
  const mTAM = useCountUp(4200, 2000, marketInView);
  const mSAM = useCountUp(380, 2000, marketInView);
  const mSOM = useCountUp(42, 2000, marketInView);

  return (
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
  );
}

function ProductSection() {
  return (
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
  );
}

export default function ContentSections() {
  return (
    <>
      <ProblemSection />
      <SolutionSection />
      <MarketSection />
      <ProductSection />
    </>
  );
}
