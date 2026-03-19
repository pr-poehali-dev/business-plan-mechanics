import Icon from "@/components/ui/icon";
import { SectionHeader } from "./shared";

function ModelSection() {
  return (
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
  );
}

function RoadmapSection() {
  return (
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
  );
}

function FinancialsSection() {
  return (
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
              <div className="w-10 h-10 flex items-center justify-center border mb-4" style={{ borderColor: `${m.color}40`, background: `${m.color}10` }}>
                <Icon name={m.icon} size={18} style={{ color: m.color }} />
              </div>
              <div className="text-3xl font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: m.color }}>{m.val}</div>
              <div className="text-xs text-white/40 font-light">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="mb-8 p-8 border border-white/10 overflow-x-auto" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// P&L ПРОГНОЗ (₽ МЛН)</div>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-xs font-mono-brand text-white/30 pb-3 pr-8">Показатель</th>
                {["2026", "2027", "2028", "2029", "2030"].map((y) => (
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
  );
}

export default function BusinessSections() {
  return (
    <>
      <ModelSection />
      <RoadmapSection />
      <FinancialsSection />
    </>
  );
}
