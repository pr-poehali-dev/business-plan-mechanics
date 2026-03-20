import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, ScrollReveal } from "./shared";

// ─── KPI ПЕРВОГО ГОДА ──────────────────────────────────────────────────────────

// Март 2026 — время идёт. Пилот стартует в Q2 2026.
// KPI на конец 2026 года (декабрь 2026).
// ARR скорректирован: 40 000 подп. × ₽780/мес × 12 мес ≈ ₽374M + B2B ≈ ₽410M
const KPIS = [
  { icon: "Users", category: "Подписчики (декабрь 2026)", color: "#4F9EFF",
    items: [
      { label: "Частные подписчики (конец 2026 г.)", target: "40 000",   stretch: "70 000" },
      { label: "Корпоративных парков подключено",     target: "150",       stretch: "300" },
      { label: "Средний чек",                         target: "₽780/мес", stretch: "₽920/мес" },
      { label: "Отток подписчиков",                   target: "< 5%/мес", stretch: "< 3%/мес" },
    ] },
  { icon: "Clock", category: "Операционные", color: "#FFD700",
    items: [
      { label: "Время прибытия (Москва)",  target: "< 20 мин", stretch: "< 15 мин" },
      { label: "Время прибытия (регионы)", target: "< 35 мин", stretch: "< 25 мин" },
      { label: "NPS (индекс лояльности)",  target: "> 55",     stretch: "> 70" },
      { label: "Решение с первого выезда", target: "> 85%",    stretch: "> 92%" },
    ] },
  { icon: "TrendingUp", category: "Финансовые", color: "#A78BFA",
    items: [
      { label: "ARR к декабрю 2026",       target: "₽410M",   stretch: "₽620M" },
      { label: "Точка безубыточности",     target: "Q4 2026", stretch: "Q3 2026" },
      { label: "EBITDA маржа (конец 2026)",target: "12%",     stretch: "22%" },
      { label: "LTV:CAC",                  target: "> 3x",    stretch: "> 5x" },
    ] },
  { icon: "Cpu", category: "Технологические", color: "#FC3F1D",
    items: [
      { label: "Доля предиктивных вызовов",   target: "20%",   stretch: "35%" },
      { label: "Точность предсказания",        target: "> 70%", stretch: "> 82%" },
      { label: "Доступность платформы",        target: "99.5%", stretch: "99.9%" },
      { label: "Охват телематикой (от парка)", target: "60%",   stretch: "85%" },
    ] },
];

// Март 2026 — стартовая точка. Расписание скорректировано под реальные даты.
const ROADMAP = [
  { period: "Q2 2026", color: "#4F9EFF", title: "Пилот",    items: ["50 мастеров в Москве", "2 000 первых подписчиков", "MVP-приложение + OBD-интеграция"] },
  { period: "Q3 2026", color: "#FFD700", title: "Масштаб",  items: ["200 мастеров, покрытие МКАД + 30 км", "15 000 подписчиков", "Запуск корп. тарифа (50 парков)"] },
  { period: "Q4 2026", color: "#A78BFA", title: "Регионы",  items: ["СПб + Екатеринбург", "40 000 подписчиков", "Предиктивная диагностика v1.0"] },
  { period: "2027",    color: "#FC3F1D", title: "Федерал",  items: ["5 городов-миллионников", "280 000 подписчиков", "ARR ₽2.9B, интеграция Авто.ру"] },
];

function KpiSection() {
  return (
    <section id="pitch" className="m-section" style={{ background: 'var(--m-black)' }}>
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <SectionLabel>Показатели · Год 1</SectionLabel>
          <SectionTitle>Ключевые<br /><span style={{ color: 'var(--m-yellow)' }}>показатели</span></SectionTitle>
          <SectionSubtitle>
            Пилот стартует в Q2 2026. Цель года — 40 000 частных подписчиков, 150 корпоративных парков и среднее время прибытия менее 20 минут по Москве.
          </SectionSubtitle>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4 mt-14 mb-14">
          {KPIS.map((kpi, i) => (
            <ScrollReveal key={kpi.category} delay={i * 100}>
              <div className="m-card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${kpi.color}15` }}>
                    <Icon name={kpi.icon} size={18} style={{ color: kpi.color }} />
                  </div>
                  <div className="font-black text-white uppercase tracking-tight">{kpi.category}</div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {kpi.items.map((item) => (
                    <div key={item.label} className="py-3 flex items-center justify-between gap-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <div className="text-sm flex-1" style={{ color: 'var(--m-text2)' }}>{item.label}</div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-sm font-black text-white">{item.target}</span>
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider" style={{ background: `${kpi.color}15`, color: kpi.color }}>↑ {item.stretch}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Дорожная карта запуска</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {ROADMAP.map((stage, i) => (
              <ScrollReveal key={stage.period} delay={i * 100}>
                <div className="m-card p-5">
                  <div className="font-black mb-1 text-sm" style={{ color: stage.color }}>{stage.period}</div>
                  <div className="font-black text-white uppercase tracking-tight mb-4">{stage.title}</div>
                  {stage.items.map((item) => (
                    <div key={item} className="flex items-start gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: stage.color }} />
                      <span className="text-xs" style={{ color: 'var(--m-text2)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

// ─── ОБ АВТОРЕ ─────────────────────────────────────────────────────────────────

const AUTHOR_STRENGTHS = [
  { icon: "Route",    label: "Практик авто-путешествий",  desc: "10+ лет дальних поездок, знаю боль изнутри" },
  { icon: "BarChart2",label: "Анализ рынка",              desc: "Исследование конкурентов, сегментов и ценообразования" },
  { icon: "Layers",   label: "Системное мышление",        desc: "Экосистемный подход: продукт, данные, монетизация" },
  { icon: "Target",   label: "Ориентация на данные",      desc: "KPI, юнит-экономика, финансовые прогнозы" },
];

const AUTHOR_VISION = [
  "Механики — это не просто «эвакуатор по кнопке». Это платформа, которая знает о состоянии вашего автомобиля больше, чем вы сами.",
  "Я хочу построить сервис, который помогает людям не бояться дальних поездок. Где водитель знает: что бы ни случилось — помощь уже едет.",
  "Предиктивная телематика — это не техническая фича, это стратегическое преимущество. Нужно научить систему предсказывать проблемы.",
];

function TeamSection() {
  return (
    <section id="team" className="m-section relative overflow-hidden" style={{ background: 'var(--m-surface)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04] pointer-events-none" style={{ background: 'var(--m-yellow)' }} />
      <div className="relative max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <SectionLabel>Об авторе</SectionLabel>
          <SectionTitle>Кто за этим<br /><span style={{ color: 'var(--m-yellow)' }}>стоит</span></SectionTitle>
          <SectionSubtitle>Идея рождена из личного опыта — и оформлена как бизнес-кейс с конкретными цифрами и планом.</SectionSubtitle>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mt-14 mb-12">

          <ScrollReveal delay={100}>
            <div className="m-card p-8">
              <div className="flex items-center gap-5 mb-6 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl" style={{ background: 'rgba(255,204,0,0.08)' }}>🚗</div>
                <div className="flex-1">
                  <div className="font-black text-white text-xl uppercase tracking-tight">Беломестнов Геннадий Сергеевич</div>
                  <div className="text-xs mt-0.5 mb-1" style={{ color: 'var(--m-text3)' }}>ИНН 751601068341</div>
                  <div className="text-sm mb-3" style={{ color: 'var(--m-text2)' }}>Продуктовое мышление · Стратегия · Авторынок РФ</div>
                  <div className="flex flex-wrap gap-2">
                    <a href="mailto:bgs1990st@mail.ru" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl transition-colors" style={{ background: 'rgba(255,204,0,0.08)', color: 'var(--m-yellow)' }}>
                      <Icon name="Mail" size={11} />bgs1990st@mail.ru
                    </a>
                    <a href="https://vk.com/genas1990" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl transition-colors" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>
                      <Icon name="Users" size={11} />Профиль
                    </a>
                    <a href="https://t.me/genas1990" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl transition-colors" style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}>
                      <Icon name="Send" size={11} />Написать
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {AUTHOR_STRENGTHS.map((s) => (
                  <div key={s.label} className="p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="m-icon-box mb-3" style={{ width: 34, height: 34, borderRadius: 10 }}>
                      <Icon name={s.icon} size={15} />
                    </div>
                    <div className="font-black text-white text-xs uppercase tracking-tight mb-1">{s.label}</div>
                    <div className="text-xs" style={{ color: 'var(--m-text3)', lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col gap-5">
              {AUTHOR_VISION.map((text, i) => (
                <div key={i} className="m-card p-6">
                  <div className="flex gap-4">
                    <div className="text-2xl font-black" style={{ color: 'var(--m-yellow)', lineHeight: 1 }}>"</div>
                    <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>{text}</p>
                  </div>
                </div>
              ))}
              <div className="m-card p-6" style={{ border: '1px solid rgba(255,204,0,0.15)' }}>
                <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'var(--m-yellow)' }}>Следующий шаг</div>
                <p className="text-sm mb-5" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                  Ищу стратегического партнёра или инвестора для запуска пилота в Москве в Q2 2026. Бюджет старта — ₽18M. IRR проекта — 47%.
                </p>
                <a href="mailto:bgs1990st@mail.ru" className="m-btn-primary" style={{ fontSize: 11, padding: '12px 24px' }}>
                  Обсудить партнёрство
                  <Icon name="ArrowRight" size={13} />
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      <footer className="border-t mt-8" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-black uppercase tracking-tighter text-sm" style={{ color: 'var(--m-text3)' }}>
            Механики · Бизнес-план · 2026 · Конфиденциально
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--m-text3)' }}>
            Беломестнов Г.С. · ИНН 751601068341
          </div>
        </div>
      </footer>
    </section>
  );
}

export default function TeamProposal() {
  return (
    <>
      <KpiSection />
      <TeamSection />
    </>
  );
}