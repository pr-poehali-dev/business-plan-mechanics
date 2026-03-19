import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

// ─── ФИНАНСОВАЯ МОДЕЛЬ ─────────────────────────────────────────────────────────

const B2C_PLANS = [
  {
    name: "Базовый",
    tag: "Аддон к подписке Плюс",
    price: "449",
    color: "#4F9EFF",
    features: [
      "1 бесплатная эвакуация до 100 км в год",
      "Замена колеса — без ограничений",
      "Запуск двигателя в мороз",
      "Подвоз топлива до 10 л",
      "Вскрытие авто",
      "Кешбэк баллами Плюс",
    ],
  },
  {
    name: "Семейный",
    tag: "До 3 автомобилей",
    price: "799",
    color: "#FFD700",
    highlight: true,
    features: [
      "3 эвакуации до 150 км в год",
      "Все услуги Базового",
      "Приоритетный вызов (до 15 мин)",
      "Telegram-чат с мастером",
      "Страховой ассистент 24/7",
      "Скидка 20% на внеплановые работы",
    ],
  },
  {
    name: "Экстрим",
    tag: "Для путешественников",
    price: "1 290",
    color: "#FC3F1D",
    features: [
      "Неограниченные эвакуации (до 300 км)",
      "Тяжёлая техника и внедорожники",
      "Эвакуация с обледенелых склонов",
      "Вертолётная разведка маршрута*",
      "Спутниковый трекер в подарок",
      "Персональный мастер-менеджер",
    ],
  },
];

const B2B_ROWS = [
  { range: "1–9 авто", price: "₽890/ТС/мес", discount: "—", features: "Базовый пакет, SLA 30 мин" },
  { range: "10–49 авто", price: "₽690/ТС/мес", discount: "−22%", features: "Приоритет, SLA 20 мин, персональный менеджер" },
  { range: "50–199 авто", price: "₽490/ТС/мес", discount: "−45%", features: "API интеграция, SLA 15 мин, дашборд парка" },
  { range: "200+ авто", price: "Договорная", discount: "Enterprise", features: "Выделенная бригада, SLA 10 мин, кастомные KPI" },
];

const UNIT_ROWS = [
  { label: "B2C Базовый", revenue: "₽449/мес", cost: "₽80", margin: "82%", color: "#4F9EFF" },
  { label: "B2C Семейный", revenue: "₽799/мес", cost: "₽180", margin: "77%", color: "#FFD700" },
  { label: "B2C Экстрим", revenue: "₽1 290/мес", cost: "₽340", margin: "74%", color: "#FC3F1D" },
  { label: "B2B (парк 10+)", revenue: "₽690/ТС/мес", cost: "₽120", margin: "83%", color: "#A78BFA" },
];

function FinanceSection() {
  const { ref, inView } = useInView();
  return (
    <section id="finance" className="ya-section" style={{ background: 'var(--ya-black)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Глава 2 · Финансовая стратегия</SectionLabel>
          <SectionTitle>Финансовая модель<br />и тарифы</SectionTitle>
          <SectionSubtitle>
            Подписочная модель обеспечивает рекуррентный доход даже в периоды отсутствия инцидентов. B2B сегмент растёт с темпом <strong style={{ color: 'var(--ya-yellow)' }}>7.28% CAGR</strong> — быстрее среднерыночного, за счёт логистики последней мили.
          </SectionSubtitle>
        </div>

        {/* B2C тарифы */}
        <h3 className={`text-xl font-bold text-white mb-5 ${inView ? 'ya-anim-up delay-100' : 'opacity-0'}`}>B2C — Физические лица</h3>
        <div className={`grid md:grid-cols-3 gap-3 mb-10 ${inView ? 'ya-anim-up delay-200' : 'opacity-0'}`}>
          {B2C_PLANS.map((plan) => (
            <div key={plan.name} className="ya-card p-6 flex flex-col" style={{ border: plan.highlight ? `1px solid ${plan.color}40` : '1px solid var(--ya-border)', position: 'relative' }}>
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full" style={{ background: plan.color, color: '#000' }}>
                  Популярный
                </div>
              )}
              <div className="text-xs font-semibold mb-1" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{plan.tag}</div>
              <div className="font-bold text-white text-lg mb-3">{plan.name}</div>
              <div className="flex items-end gap-1 mb-4 pb-4" style={{ borderBottom: '1px solid var(--ya-border)' }}>
                <span className="text-3xl font-bold" style={{ color: plan.color }}>₽{plan.price}</span>
                <span className="text-sm mb-1" style={{ color: 'var(--ya-text-muted)' }}>/мес</span>
              </div>
              <div className="space-y-2 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Icon name="Check" size={14} style={{ color: plan.color, marginTop: 2, flexShrink: 0 }} />
                    <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* B2B тарифы */}
        <h3 className={`text-xl font-bold text-white mb-3 ${inView ? 'ya-anim-up delay-400' : 'opacity-0'}`}>B2B — Логистические компании</h3>
        <div className={`ya-card overflow-hidden mb-10 ${inView ? 'ya-anim-up delay-500' : 'opacity-0'}`}>
          <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--ya-border)' }}>
            {["Размер парка", "Цена за ТС", "Скидка", "Условия"].map((h) => (
              <div key={h} className="text-xs font-semibold" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{h}</div>
            ))}
          </div>
          {B2B_ROWS.map((row, i) => (
            <div key={row.range} className="grid grid-cols-4 px-6 py-4" style={{ borderBottom: i < B2B_ROWS.length - 1 ? '1px solid var(--ya-border)' : 'none' }}>
              <div className="text-sm font-medium text-white">{row.range}</div>
              <div className="text-sm font-bold" style={{ color: '#FFD700' }}>{row.price}</div>
              <div className="text-sm font-semibold" style={{ color: row.discount === '—' ? 'var(--ya-text-muted)' : '#4CAF50' }}>{row.discount}</div>
              <div className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{row.features}</div>
            </div>
          ))}
        </div>

        {/* Unit economics */}
        <h3 className={`text-xl font-bold text-white mb-3 ${inView ? 'ya-anim-up delay-600' : 'opacity-0'}`}>Юнит-экономика</h3>
        <div className={`ya-card overflow-hidden mb-10 ${inView ? 'ya-anim-up delay-700' : 'opacity-0'}`}>
          <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--ya-border)' }}>
            {["Тариф", "Выручка", "Перем. затраты", "Маржа"].map((h) => (
              <div key={h} className="text-xs font-semibold" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{h}</div>
            ))}
          </div>
          {UNIT_ROWS.map((row, i) => (
            <div key={row.label} className="grid grid-cols-4 px-6 py-4" style={{ borderBottom: i < UNIT_ROWS.length - 1 ? '1px solid var(--ya-border)' : 'none' }}>
              <div className="text-sm font-medium text-white">{row.label}</div>
              <div className="text-sm font-bold" style={{ color: row.color }}>{row.revenue}</div>
              <div className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>{row.cost}</div>
              <div className="text-sm font-bold text-white">{row.margin}</div>
            </div>
          ))}
        </div>

        {/* Прогноз ARR */}
        <div className={`grid md:grid-cols-3 gap-3 ${inView ? 'ya-anim-up delay-800' : 'opacity-0'}`}>
          {[
            { year: "2026", arr: "₽240M", users: "40 000", b2b: "150 парков", note: "Пилот Москва" },
            { year: "2027", arr: "₽1.8B", users: "280 000", b2b: "900 парков", note: "5 городов" },
            { year: "2028", arr: "₽6.4B", users: "850 000", b2b: "2 500 парков", note: "Федеральный масштаб" },
          ].map((p) => (
            <div key={p.year} className="ya-card p-6">
              <div className="text-xs font-semibold mb-3" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{p.year} · {p.note}</div>
              <div className="text-4xl font-bold mb-1" style={{ color: 'var(--ya-yellow)' }}>{p.arr}</div>
              <div className="text-sm mb-1" style={{ color: 'var(--ya-text-secondary)' }}>{p.users} B2C подписчиков</div>
              <div className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>{p.b2b} B2B контрактов</div>
            </div>
          ))}
        </div>

        {/* Плашка про рекуррентность */}
        <div className={`mt-4 p-5 rounded-2xl flex gap-4 ${inView ? 'ya-anim-up delay-800' : 'opacity-0'}`} style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.15)' }}>
          <Icon name="TrendingUp" size={20} style={{ color: 'var(--ya-yellow)', flexShrink: 0, marginTop: 2 }} />
          <div>
            <div className="font-semibold text-white mb-1">Почему подписка побеждает транзакционную модель</div>
            <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
              В месяц без инцидентов подписчик платит полную стоимость, а переменные затраты равны нулю — маржа 100%. Это выгодно обеим сторонам: пользователь получает спокойствие, платформа — стабильный денежный поток. При сезонном провале в 60% вызовов выручка не падает.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessSections() {
  return <FinanceSection />;
}