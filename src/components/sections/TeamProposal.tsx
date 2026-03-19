import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

// ─── KPI ПЕРВОГО ГОДА ──────────────────────────────────────────────────────────

const KPIS = [
  {
    icon: "Users",
    category: "Подписчики",
    color: "#4F9EFF",
    items: [
      { label: "B2C подписчики (конец года)", target: "40 000", stretch: "70 000" },
      { label: "B2B парков подключено", target: "150", stretch: "300" },
      { label: "Средний чек B2C", target: "₽620/мес", stretch: "₽750/мес" },
      { label: "Отток подписчиков", target: "< 5%/мес", stretch: "< 3%/мес" },
    ],
  },
  {
    icon: "Clock",
    category: "Операционные",
    color: "#FFD700",
    items: [
      { label: "Время прибытия экипажа (Москва)", target: "< 20 мин", stretch: "< 15 мин" },
      { label: "Время прибытия (регионы)", target: "< 35 мин", stretch: "< 25 мин" },
      { label: "NPS (индекс лояльности)", target: "> 55", stretch: "> 70" },
      { label: "Решение с первого выезда", target: "> 85%", stretch: "> 92%" },
    ],
  },
  {
    icon: "TrendingUp",
    category: "Финансовые",
    color: "#A78BFA",
    items: [
      { label: "ARR (годовая выручка)", target: "₽240M", stretch: "₽380M" },
      { label: "Точка безубыточности", target: "Q3 2026", stretch: "Q2 2026" },
      { label: "EBITDA маржа (конец года)", target: "18%", stretch: "25%" },
      { label: "LTV:CAC (соотношение)", target: "> 3x", stretch: "> 5x" },
    ],
  },
  {
    icon: "Cpu",
    category: "Технологические",
    color: "#FC3F1D",
    items: [
      { label: "Доля предиктивных вызовов", target: "20%", stretch: "35%" },
      { label: "Точность предсказания инцидента", target: "> 70%", stretch: "> 82%" },
      { label: "Доступность платформы", target: "99.5%", stretch: "99.9%" },
      { label: "Охват телематикой (от парка)", target: "60%", stretch: "85%" },
    ],
  },
];

function KpiSection() {
  const { ref, inView } = useInView();
  return (
    <section id="pitch" className="ya-section" style={{ background: 'var(--ya-black)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Показатели · Год 1</SectionLabel>
          <SectionTitle>Ключевые показатели<br />первого года</SectionTitle>
          <SectionSubtitle>
            Цель — 40 000 частных подписчиков и среднее время прибытия экипажа менее 20 минут в Москве к концу 2026 года.
          </SectionSubtitle>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {KPIS.map((kpi, i) => (
            <div key={kpi.category} className={`ya-card p-6 ${inView ? `ya-anim-up delay-${(i + 1) * 150}` : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${kpi.color}18` }}>
                  <Icon name={kpi.icon} size={18} style={{ color: kpi.color }} />
                </div>
                <div className="font-bold text-white">{kpi.category}</div>
              </div>
              <div className="space-y-0" style={{ borderTop: '1px solid var(--ya-border)' }}>
                {kpi.items.map((item) => (
                  <div key={item.label} className="py-3 flex items-center justify-between gap-4" style={{ borderBottom: '1px solid var(--ya-border)' }}>
                    <div className="text-sm flex-1" style={{ color: 'var(--ya-text-secondary)' }}>{item.label}</div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm font-semibold text-white">{item.target}</span>
                      <span className="text-xs px-2 py-0.5 rounded" style={{ background: `${kpi.color}15`, color: kpi.color }}>↑ {item.stretch}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Дорожная карта запуска */}
        <div className={`mb-10 ${inView ? 'ya-anim-up delay-600' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Дорожная карта запуска</h3>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { period: "Q2 2026", color: "#4F9EFF", title: "Пилот", items: ["50 мастеров в Москве", "2 000 первых подписчиков", "Интеграция с Навигатором"] },
              { period: "Q3 2026", color: "#FFD700", title: "Масштаб", items: ["200 мастеров", "15 000 подписчиков", "Запуск B2B (50 парков)"] },
              { period: "Q4 2026", color: "#A78BFA", title: "Регионы", items: ["СПб, Екатеринбург", "40 000 подписчиков", "Предиктивная диагностика"] },
              { period: "2027", color: "#FC3F1D", title: "Федерал", items: ["5 городов-миллионников", "280 000 подписчиков", "ARR ₽1.8B"] },
            ].map((stage) => (
              <div key={stage.period} className="ya-card p-5">
                <div className="font-bold mb-1" style={{ color: stage.color }}>{stage.period}</div>
                <div className="text-white font-semibold mb-3">{stage.title}</div>
                {stage.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: stage.color }} />
                    <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── О КОМАНДЕ / АВТОРЕ ────────────────────────────────────────────────────────

const AUTHOR_STRENGTHS = [
  { icon: "Route", label: "Практик авто-путешествий", desc: "10+ лет дальних поездок, знаю боль изнутри" },
  { icon: "BarChart2", label: "Анализ рынка", desc: "Исследование конкурентов, сегментов и ценообразования" },
  { icon: "Layers", label: "Системное мышление", desc: "Экосистемный подход: продукт, данные, монетизация" },
  { icon: "Target", label: "Ориентация на данные", desc: "KPI, юнит-экономика, финансовые прогнозы" },
];

const AUTHOR_VISION = [
  "Механики — это не просто «эвакуатор по кнопке». Это платформа, которая знает о состоянии вашего автомобиля больше, чем вы сами.",
  "Я хочу построить сервис, который помогает людям не бояться дальних поездок. Где водитель знает: что бы ни случилось — помощь уже едет.",
  "Предиктивная телематика и навигация — это не техническая фича, это стратегическое преимущество. Навигатор видит каждый автомобиль на дороге. Нужно просто научить его предсказывать проблемы.",
];

function TeamSection() {
  const { ref, inView } = useInView();
  return (
    <section id="team" className="ya-section relative overflow-hidden" style={{ background: 'var(--ya-dark)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-[0.04]" style={{ background: 'var(--ya-yellow)' }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Об авторе</SectionLabel>
          <SectionTitle>Кто за этим стоит</SectionTitle>
          <SectionSubtitle>
            Идея рождена из личного опыта — и оформлена как бизнес-кейс с конкретными цифрами и планом.
          </SectionSubtitle>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Левая — карточка автора */}
          <div className={`${inView ? 'ya-anim-up delay-200' : 'opacity-0'}`}>
            <div className="ya-card p-8">
              <div className="flex items-center gap-5 mb-6 pb-6" style={{ borderBottom: '1px solid var(--ya-border)' }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 text-3xl" style={{ background: 'rgba(255,215,0,0.1)' }}>
                  🚗
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white text-xl">Беломестнов Геннадий Сергеевич</div>
                  <div className="text-xs mt-0.5 mb-1" style={{ color: 'var(--ya-text-muted)' }}>ИНН 751601068341</div>
                  <div className="text-sm mb-3" style={{ color: 'var(--ya-text-secondary)' }}>Продуктовое мышление · Стратегия · Авторынок РФ</div>
                  <div className="flex flex-wrap gap-2">
                    <a href="mailto:bgs1990st@mail.ru" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors" style={{ background: 'rgba(255,215,0,0.1)', color: 'var(--ya-yellow)' }}>
                      <Icon name="Mail" size={12} />
                      bgs1990st@mail.ru
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors" style={{ background: 'rgba(79,158,255,0.1)', color: '#4F9EFF' }}>
                      <Icon name="Linkedin" size={12} />
                      Профиль
                    </a>
                    <a href="https://t.me/yourtg" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)' }}>
                      <Icon name="Send" size={12} />
                      Написать
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {AUTHOR_STRENGTHS.map((s) => (
                  <div key={s.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,215,0,0.1)' }}>
                      <Icon name={s.icon} size={15} style={{ color: 'var(--ya-yellow)' }} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{s.label}</div>
                      <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Правая — видение */}
          <div className={`flex flex-col gap-4 ${inView ? 'ya-anim-up delay-350' : 'opacity-0'}`}>
            <div className="text-xs font-semibold mb-2" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>ВИДЕНИЕ ПРОЕКТА</div>
            {AUTHOR_VISION.map((quote, i) => (
              <div key={i} className="ya-card p-5" style={{ borderLeft: `3px solid ${i === 0 ? '#FFD700' : i === 1 ? '#4F9EFF' : '#FC3F1D'}` }}>
                <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.8 }}>
                  «{quote}»
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Что ищу */}
        <div className={`p-8 rounded-2xl ${inView ? 'ya-anim-up delay-500' : 'opacity-0'}`} style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.2)' }}>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="text-2xl font-bold text-white mb-2">Готов к следующему шагу</div>
              <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
                Ищу партнёра или инвестора для реализации концепции. Готов защитить бизнес-план, пройти технический разбор и выйти на пилот за 90 дней.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="mailto:bgs1990st@mail.ru" className="ya-btn-primary">
                Связаться
                <Icon name="Mail" size={16} />
              </a>
              <a href="#pitch" className="ya-btn-secondary">
                Смотреть KPI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10" style={{ background: 'var(--ya-black)', borderTop: '1px solid var(--ya-border)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 font-bold text-white text-lg">
          Механики<span style={{ color: 'var(--ya-yellow)' }}>.</span>
        </div>
        <div className="text-sm" style={{ color: 'var(--ya-text-muted)' }}>
          Бизнес-план · 2026 · Конфиденциально
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--ya-text-muted)' }}>
          <Icon name="Globe" size={13} />
          Рынок $32.8B · CAGR 5.6%
        </div>
      </div>
    </footer>
  );
}

export default function TeamProposal() {
  return (
    <>
      <KpiSection />
      <TeamSection />
      <Footer />
    </>
  );
}