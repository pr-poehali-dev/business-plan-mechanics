import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, ScrollReveal } from "./shared";

const B2C_PLANS = [
  {
    name: "Базовый", tag: "Аддон к подписке", price: "449", color: "#4F9EFF",
    features: ["1 бесплатная эвакуация до 100 км в год", "Замена колеса — без ограничений", "Запуск двигателя в мороз", "Подвоз топлива до 10 л", "Вскрытие авто", "Кешбэк баллами в партнёрских сервисах"],
  },
  {
    name: "Семейный", tag: "До 3 автомобилей", price: "799", color: "#FFD700", highlight: true,
    features: ["3 эвакуации до 150 км в год", "Все услуги Базового", "Приоритетный вызов (до 15 мин)", "Чат с мастером в приложении", "Страховой ассистент 24/7", "Скидка 20% на внеплановые работы"],
  },
  {
    name: "Экстрим", tag: "Для путешественников", price: "1 290", color: "#FC3F1D",
    features: ["Неограниченные эвакуации (до 300 км)", "Тяжёлая техника и внедорожники", "Эвакуация с обледеневших дорог", "Вертолётная разведка маршрута*", "Спутниковый трекер в подарок", "Персональный мастер-менеджер"],
  },
];

const B2B_ROWS = [
  { range: "1–9 авто",   price: "₽890/ТС/мес",  discount: "—",        features: "Базовый пакет, SLA 30 мин" },
  { range: "10–49 авто", price: "₽690/ТС/мес",  discount: "−22%",     features: "Приоритет, SLA 20 мин, персональный менеджер" },
  { range: "50–199 авто",price: "₽490/ТС/мес",  discount: "−45%",     features: "API интеграция, SLA 15 мин, дашборд парка" },
  { range: "200+ авто",  price: "Договорная",   discount: "Энтерпрайз",features: "Выделенная бригада, SLA 10 мин, кастомные KPI" },
];

const UNIT_ROWS = [
  { label: "Базовый",       revenue: "₽449/мес",    cost: "₽80",  margin: "82%", color: "#4F9EFF" },
  { label: "Семейный",      revenue: "₽799/мес",    cost: "₽180", margin: "77%", color: "#FFD700" },
  { label: "Экстрим",       revenue: "₽1 290/мес",  cost: "₽340", margin: "74%", color: "#FC3F1D" },
  { label: "Корп. (10+)",   revenue: "₽690/ТС/мес", cost: "₽120", margin: "83%", color: "#A78BFA" },
];

const FORECAST = [
  { year: "2026", arr: "₽240M", users: "40 000",  b2b: "150 парков",   note: "Пилот Москва" },
  { year: "2027", arr: "₽1.8B", users: "280 000", b2b: "900 парков",   note: "5 городов" },
  { year: "2028", arr: "₽6.4B", users: "850 000", b2b: "2 500 парков", note: "Федеральный масштаб" },
];

export default function BusinessSections() {
  return (
    <section id="finance" className="m-section" style={{ background: 'var(--m-black)' }}>
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <SectionLabel>Глава 2 · Финансовая стратегия</SectionLabel>
          <SectionTitle>Финансовая<br /><span style={{ color: 'var(--m-yellow)' }}>модель</span></SectionTitle>
          <SectionSubtitle>
            Подписочная модель обеспечивает рекуррентный доход даже в периоды отсутствия инцидентов. B2B сегмент растёт с темпом <strong style={{ color: 'var(--m-yellow)' }}>7.28% CAGR</strong>.
          </SectionSubtitle>
        </ScrollReveal>

        {/* B2C тарифы */}
        <div className="mt-14 mb-14">
          <ScrollReveal>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Частные лица — тарифы</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {B2C_PLANS.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 100}>
                <div className="m-card p-6 flex flex-col h-full relative" style={{ border: plan.highlight ? `1px solid ${plan.color}35` : undefined }}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full" style={{ background: plan.color, color: '#000' }}>
                      Популярный
                    </div>
                  )}
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: 'var(--m-text3)' }}>{plan.tag}</div>
                  <div className="font-black text-white text-xl uppercase tracking-tight mb-4">{plan.name}</div>
                  <div className="flex items-end gap-1 mb-5 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-4xl font-black" style={{ color: plan.color }}>₽{plan.price}</span>
                    <span className="text-sm mb-1" style={{ color: 'var(--m-text3)' }}>/мес</span>
                  </div>
                  <div className="space-y-2.5 flex-1">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Icon name="Check" size={13} style={{ color: plan.color, marginTop: 3, flexShrink: 0 }} />
                        <span className="text-xs" style={{ color: 'var(--m-text2)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* B2B тарифы */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Корпоративный тариф — логистические компании</h3>
          <div className="m-card overflow-hidden mb-14">
            <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {["Размер парка", "Цена за ТС", "Скидка", "Условия"].map((h) => (
                <div key={h} className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--m-text3)' }}>{h}</div>
              ))}
            </div>
            {B2B_ROWS.map((row, i) => (
              <div key={row.range} className="grid grid-cols-4 px-6 py-4" style={{ borderBottom: i < B2B_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div className="text-sm font-bold text-white">{row.range}</div>
                <div className="text-sm font-black" style={{ color: 'var(--m-yellow)' }}>{row.price}</div>
                <div className="text-sm font-black" style={{ color: row.discount === '—' ? 'var(--m-text3)' : '#4CAF50' }}>{row.discount}</div>
                <div className="text-xs" style={{ color: 'var(--m-text2)' }}>{row.features}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Юнит-экономика */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Юнит-экономика</h3>
          <div className="m-card overflow-hidden mb-14">
            <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {["Тариф", "Выручка", "Перем. затраты", "Маржа"].map((h) => (
                <div key={h} className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--m-text3)' }}>{h}</div>
              ))}
            </div>
            {UNIT_ROWS.map((row, i) => (
              <div key={row.label} className="grid grid-cols-4 px-6 py-4" style={{ borderBottom: i < UNIT_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div className="text-sm font-bold text-white">{row.label}</div>
                <div className="text-sm font-black" style={{ color: row.color }}>{row.revenue}</div>
                <div className="text-sm" style={{ color: 'var(--m-text2)' }}>{row.cost}</div>
                <div className="text-sm font-black text-white">{row.margin}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Прогноз ARR */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Прогноз ARR</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {FORECAST.map((p, i) => (
              <ScrollReveal key={p.year} delay={i * 100}>
                <div className="m-card p-6">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'var(--m-text3)' }}>{p.year} · {p.note}</div>
                  <div className="text-5xl font-black mb-2" style={{ color: 'var(--m-yellow)' }}>{p.arr}</div>
                  <div className="text-sm" style={{ color: 'var(--m-text2)' }}>{p.users} частных подписчиков</div>
                  <div className="text-sm" style={{ color: 'var(--m-text2)' }}>{p.b2b} корпоративных контрактов</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="m-card p-5 flex gap-4" style={{ border: '1px solid rgba(255,204,0,0.12)' }}>
            <Icon name="TrendingUp" size={20} style={{ color: 'var(--m-yellow)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <div className="font-black text-white uppercase tracking-tight mb-1">Почему подписка побеждает транзакционную модель</div>
              <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                В месяц без инцидентов подписчик платит полную стоимость, а переменные затраты равны нулю — маржа 100%. Пользователь получает спокойствие, платформа — стабильный денежный поток. При сезонном провале в 60% вызовов выручка не падает.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
