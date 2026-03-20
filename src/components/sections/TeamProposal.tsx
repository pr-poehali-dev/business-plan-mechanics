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

// ─── ИНВЕСТИЦИОННОЕ ПРЕДЛОЖЕНИЕ ─────────────────────────────────────────────────

const USE_OF_FUNDS = [
  { icon: "Users",        label: "Команда мастеров",        pct: 38, amount: "₽6.8M",  color: "#4F9EFF",
    desc: "Найм 50 мастеров, обучение, сертификация, форменное оснащение" },
  { icon: "Cpu",          label: "Платформа и телематика",  pct: 28, amount: "₽5.0M",  color: "#A78BFA",
    desc: "MVP-приложение, OBD-блоки, диспетчерская система, AI-предикция" },
  { icon: "Truck",        label: "Техника и оборудование",  pct: 20, amount: "₽3.6M",  color: "#FFD700",
    desc: "4 эвакуатора, 12 лёгких бригад, специнструмент и ЗИП-комплекты" },
  { icon: "Megaphone",    label: "Маркетинг и запуск",      pct: 14, amount: "₽2.6M",  color: "#FC3F1D",
    desc: "Первые 2 000 подписчиков, реферальная программа, PR в сообществах" },
];

const FINANCIALS = [
  { year: "2026",  arr: "₽410M",  margin: "12%",   color: "#4F9EFF",  note: "Пилот → Регионы" },
  { year: "2027",  arr: "₽2.9B",  margin: "27%",   color: "#A78BFA",  note: "5 городов-млн." },
  { year: "2028",  arr: "₽9.5B",  margin: "38%",   color: "#FFD700",  note: "Федеральный охват" },
];

const DEAL_TERMS = [
  { label: "Раунд",               value: "Pre-Seed",             icon: "Layers" },
  { label: "Ищем",                value: "₽18M",                 icon: "DollarSign" },
  { label: "Оценка (pre-money)",  value: "₽120M",                icon: "BarChart2" },
  { label: "Доля",                value: "13%",                  icon: "PieChart" },
  { label: "IRR проекта",         value: "47%",                  icon: "TrendingUp" },
  { label: "Горизонт выхода",     value: "3–4 года",             icon: "Calendar" },
  { label: "Формат участия",      value: "Деньги + экспертиза",  icon: "Handshake" },
  { label: "Точка безубыточности",value: "Q4 2026",              icon: "Target" },
];

function InvestSection() {
  return (
    <section id="invest" className="m-section relative overflow-hidden" style={{ background: 'var(--m-surface)' }}>
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.03] pointer-events-none" style={{ background: '#4F9EFF' }} />
      <div className="relative max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <SectionLabel>Раздел 6 · Инвестиции</SectionLabel>
          <SectionTitle>Инвестиционное<br /><span style={{ color: 'var(--m-yellow)' }}>предложение</span></SectionTitle>
          <SectionSubtitle>
            Pre-Seed раунд ₽18M на запуск пилота в Москве. IRR 47%, выход через 3–4 года при масштабировании на федеральный рынок.
          </SectionSubtitle>
        </ScrollReveal>

        {/* Условия сделки */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-14 mb-14">
            {DEAL_TERMS.map((t, i) => (
              <ScrollReveal key={t.label} delay={i * 60}>
                <div className="m-card p-5 h-full">
                  <div className="m-icon-box mb-3" style={{ width: 36, height: 36, borderRadius: 10 }}>
                    <Icon name={t.icon} size={15} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: 'var(--m-text3)' }}>{t.label}</div>
                  <div className="font-black text-white text-lg">{t.value}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 mb-14">

          {/* Использование средств */}
          <ScrollReveal delay={100}>
            <div className="m-card p-8 h-full">
              <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-6">Использование средств</h3>
              <div className="space-y-5">
                {USE_OF_FUNDS.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon name={item.icon} size={14} style={{ color: item.color }} />
                        <span className="text-sm font-black text-white">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-black" style={{ color: item.color }}>{item.amount}</span>
                        <span className="text-xs font-black" style={{ color: 'var(--m-text3)' }}>{item.pct}%</span>
                      </div>
                    </div>
                    <div className="w-full rounded-full h-1.5 mb-1.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-1.5 rounded-full transition-all" style={{ width: `${item.pct}%`, background: item.color, boxShadow: `0 0 8px ${item.color}60` }} />
                    </div>
                    <div className="text-xs" style={{ color: 'var(--m-text3)' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Финансовый прогноз */}
          <ScrollReveal delay={200}>
            <div className="m-card p-8 h-full flex flex-col">
              <h3 className="text-lg font-black uppercase tracking-tighter text-white mb-6">Прогноз ARR по годам</h3>
              <div className="space-y-4 flex-1">
                {FINANCIALS.map((f) => (
                  <div key={f.year} className="p-5 rounded-2xl" style={{ background: `${f.color}08`, border: `1px solid ${f.color}20` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: f.color }}>{f.year} · {f.note}</div>
                        <div className="text-2xl font-black text-white">{f.arr}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: 'var(--m-text3)' }}>EBITDA</div>
                        <div className="text-2xl font-black" style={{ color: f.color }}>{f.margin}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(255,204,0,0.06)', border: '1px solid rgba(255,204,0,0.15)' }}>
                <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: 'var(--m-yellow)' }}>Мультипликатор для инвестора</div>
                <div className="text-sm" style={{ color: 'var(--m-text2)' }}>
                  При ARR ₽9.5B в 2028 и EV/ARR 2.5× оценка компании составит <strong className="text-white">₽23.75B</strong>.
                  Возврат на ₽18M при доле 13% — <strong className="text-white">₽3.1B (×170)</strong>.
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="m-card p-10 text-center" style={{ border: '1px solid rgba(255,204,0,0.15)' }}>
            <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'var(--m-yellow)' }}>Готов к разговору</div>
            <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Давайте обсудим<br />детали</h3>
            <p className="text-sm max-w-xl mx-auto mb-8" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
              Пилот стартует в Q2 2026. Ищу стратегического партнёра или инвестора — с деньгами, экспертизой или обоими. Готов к NDA, due diligence и защите перед командой.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:bgs1990st@mail.ru" className="m-btn-primary" style={{ fontSize: 12, padding: '14px 28px' }}>
                Написать инвестору
                <Icon name="ArrowRight" size={14} />
              </a>
              <a href="tel:+79145145303" className="m-btn-secondary" style={{ fontSize: 12, padding: '14px 28px' }}>
                <Icon name="Phone" size={14} />
                +7 914 514-53-03
              </a>
            </div>
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
      <InvestSection />
      <TeamSection />
    </>
  );
}