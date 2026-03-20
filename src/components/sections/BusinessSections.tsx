import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, ScrollReveal } from "./shared";

// ─── ОБОСНОВАНИЕ ТАРИФОВ ────────────────────────────────────────────────────────
// Источники: рыночные цены эвакуации Москва 2026 (подача от 4 000 ₽ + 100 ₽/км),
// РАМК прайс 2025, данные РСА по инцидентности, ГИБДД 2025
//
// Рыночная цена эвакуации легкового авто в Москве 2026:
//   подача 4 000 ₽ + 100 ₽/км → поездка 30 км = 7 000 ₽ за вызов
// Среднее число инцидентов: 1,8 случая/год (ГИБДД, 2025)
// Не все инциденты требуют выезда, с поправкой: 0,9 выезда/подписчик/год
// Себестоимость 1 выезда: ~2 500 ₽ (ФОТ мастера + топливо + амортизация + накладные)
// Переменные затраты/мес (тариф Старт): 2 500 × 0,9 / 12 = ~188 ₽

const B2C_PLANS = [
  {
    name: "Старт", tag: "Базовая защита", price: "690", color: "#4F9EFF",
    marketPrice: "₽7 000–10 000 за один вызов",
    features: [
      "1 эвакуация до 100 км в год",
      "Замена колеса без ограничений",
      "Запуск двигателя в мороз",
      "Подвоз топлива до 10 литров",
      "Вскрытие автомобиля",
      "Кешбэк 5% в партнёрских сервисах",
    ],
    economics: { revenue: 690, varCost: 188, contribution: 502, margin: 73 },
  },
  {
    name: "Семейный", tag: "До 3 автомобилей", price: "1 190", color: "#FFD700", highlight: true,
    marketPrice: "₽21 000–30 000 за три вызова",
    features: [
      "До 3 автомобилей на счёте",
      "3 эвакуации до 150 км в год",
      "Все услуги тарифа «Старт» для каждого авто",
      "Приоритетный вызов — прибытие до 15 минут",
      "Чат с мастером в приложении",
      "Страховой ассистент круглосуточно",
      "Скидка 20% на внеплановые работы",
    ],
    economics: { revenue: 1190, varCost: 380, contribution: 810, margin: 68 },
  },
  {
    name: "Экстрим", tag: "Длинные маршруты", price: "1 890", color: "#FC3F1D",
    marketPrice: "₽8 000–15 000/год у конкурентов без покрытия дальних маршрутов",
    features: [
      "Неограниченные эвакуации до 300 км",
      "Тяжёлая техника и внедорожники",
      "Эвакуация с обледенелых дорог",
      "Спутниковый трекер в подарок",
      "Персональный мастер-менеджер",
      "Расширенная диагностика электронных блоков",
    ],
    economics: { revenue: 1890, varCost: 640, contribution: 1250, margin: 66 },
  },
];

const B2B_ROWS = [
  { range: "1–9 автомобилей",    price: "₽1 190/авто/мес",  discount: "—",      features: "Базовый пакет, прибытие до 30 минут" },
  { range: "10–49 автомобилей",  price: "₽950/авто/мес",    discount: "−20%",   features: "Приоритет, прибытие до 20 минут, персональный менеджер" },
  { range: "50–199 автомобилей", price: "₽710/авто/мес",    discount: "−40%",   features: "Интеграция по API, прибытие до 15 минут, дашборд парка" },
  { range: "200 и более",        price: "По договору",       discount: "Корпор.", features: "Выделенная бригада, прибытие до 10 минут, индивидуальные показатели" },
];

// Переменные затраты B2B ниже: корпоративные парки лучше обслуживаются → меньше инцидентов
// Ожидаемых выездов B2B: 0,6/авто/год → себестоимость ≈ ₽125/мес/авто
const UNIT_ROWS = [
  { label: "Старт",              revenue: "₽690/мес",     varCost: "₽188/мес",    contribution: "₽502", margin: "73%", color: "#4F9EFF",
    note: "0,9 выезда/год на подписчика, 1 эвакуация в год включена" },
  { label: "Семейный",           revenue: "₽1 190/мес",   varCost: "₽380/мес",    contribution: "₽810", margin: "68%", color: "#FFD700",
    note: "3 автомобиля × 0,9 вызова/год = суммарно до 2,7 выезда/год" },
  { label: "Экстрим",            revenue: "₽1 890/мес",   varCost: "₽640/мес",    contribution: "₽1 250", margin: "66%", color: "#FC3F1D",
    note: "Более частые выезды, дальние маршруты до 300 км" },
  { label: "Корпоративный (10–49 авто)", revenue: "₽950/авто/мес", varCost: "₽125/авто/мес", contribution: "₽825", margin: "87%", color: "#A78BFA",
    note: "0,6 вызова/год/авто — корпоративные парки обслуживаются регулярно" },
];

// ─── СРАВНЕНИЕ С КОНКУРЕНТАМИ ────────────────────────────────────────────────────
// РАМК прайс 2025: базовый ₽6 900/год (~₽575/мес), «Комфорт» ₽9 500/год
// Страховые ассистанс в КАСКО: обычно не более 50 км эвакуации, без предиктивных функций
// Разовый вызов эвакуатора в Москве 2026: от 4 000 ₽ подача + 100 ₽/км (данные пользователя)
// При поездке 30 км: 4 000 + 3 000 = 7 000 ₽ за вызов × 1,8 инцидента = ~12 600 ₽/год
const COMPETITOR_COMPARE = [
  { name: "Механики — Старт",                 price: "₽690/мес",         perYear: "₽8 280/год",   evac: "до 100 км",        extra: "телематика, чат, предиктивный алгоритм",          highlight: true },
  { name: "РАМК Базовый (2025)",              price: "₽575/мес",         perYear: "₽6 900/год",   evac: "до 50 км",         extra: "без телематики и предиктивных функций",           highlight: false },
  { name: "РАМК Комфорт (2025)",              price: "₽792/мес",         perYear: "₽9 500/год",   evac: "до 100 км",        extra: "нет проактивных оповещений",                      highlight: false },
  { name: "Страховой ассистанс в КАСКО",      price: "в составе полиса", perYear: "привязан к страховке", evac: "не более 50 км", extra: "теряется при смене страховщика",          highlight: false },
  { name: "Разовый вызов эвакуатора (Москва 2026)", price: "от ₽7 000", perYear: "₽12 600/год*",  evac: "до 100 км",        extra: "* из расчёта 1,8 инцидента в год (ГИБДД, 2025)", highlight: false },
];

// ─── ПРОГНОЗ ARR ─────────────────────────────────────────────────────────────────
// Старт: Q2 2026 — пилот Москва. На март 2026 рынок ещё не консолидирован.
// 2026 (H2): 2 000 → 40 000 подп. к декабрю × ср. чек ₽780/мес
// 2027: 5 городов, 280 000 подп. × ₽820
// 2028: федеральный охват, интеграции с маркетплейсами авто (Авто.ру, Дром)

const FORECAST = [
  { year: "2026", arr: "₽410M",  users: "40 000",  b2b: "150 парков",   note: "Пилот — Москва (Q2 2026)" },
  { year: "2027", arr: "₽2.9B",  users: "280 000", b2b: "900 парков",   note: "5 городов-миллионников" },
  { year: "2028", arr: "₽9.5B",  users: "900 000", b2b: "2 800 парков", note: "Федеральный масштаб + B2B2C" },
];

// ─── ПОСТОЯННЫЕ ИЗДЕРЖКИ (для прозрачности) ─────────────────────────────────────
const FIXED_COSTS = [
  { label: "ФОТ управленческий (HQ)",    amount: "₽3.2M/мес",  note: "CEO, CFO, CTO, CMO + команда 20 чел." },
  { label: "IT-инфраструктура и разработка", amount: "₽1.8M/мес", note: "серверы, API Навигатора, мобильное приложение" },
  { label: "Маркетинг и привлечение",    amount: "₽2.5M/мес",  note: "целевой CAC ₽800–1 200 на подписчика" },
  { label: "Офис и операционные расходы",amount: "₽0.8M/мес",  note: "аренда, юрлицо, страхование ответственности" },
  { label: "Итого постоянных издержек",  amount: "₽8.3M/мес",  note: "точка безубыточности: ~19 000 подписчиков" },
];

export default function BusinessSections() {
  return (
    <section id="finance" className="m-section" style={{ background: 'var(--m-black)' }}>
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <SectionLabel>Глава 2 · Финансовая стратегия</SectionLabel>
          <SectionTitle>Финансовая<br /><span style={{ color: 'var(--m-yellow)' }}>модель</span></SectionTitle>
          <SectionSubtitle>
            Тарифы рассчитаны на основе реальных рыночных цен эвакуации в Москве 2026, данных РАМК и РСА, а также анализа частоты инцидентов по статистике ГИБДД.
          </SectionSubtitle>
        </ScrollReveal>

        {/* Методология */}
        <ScrollReveal delay={80}>
          <div className="m-card p-5 flex gap-4 mb-10 mt-10" style={{ border: '1px solid rgba(255,204,0,0.15)' }}>
            <Icon name="Calculator" size={18} style={{ color: 'var(--m-yellow)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <div className="font-black text-white uppercase tracking-tight mb-1 text-sm">Методология расчёта переменных затрат</div>
              <p className="text-xs" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
                Себестоимость одного выезда: зарплата мастера ~₽1 300 + топливо ~₽500 + амортизация техники ~₽400 + накладные ~₽300 = <strong className="text-white">₽2 500</strong>.
                Средняя частота инцидентов по данным ГИБДД 2025 — <strong className="text-white">1,8 случая/авто/год</strong>, однако не все требуют выезда мастера.
                С поправкой на тип инцидента — ожидаемых оплачиваемых выездов: <strong className="text-white">0,9/подписчик/год</strong>, или ₽188/мес в переменных затратах (тариф «Старт»).
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* B2C тарифы */}
        <div className="mb-14">
          <ScrollReveal>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Тарифы для частных лиц</h3>
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
                  <div className="flex items-end gap-1 mb-3 pb-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span className="text-4xl font-black" style={{ color: plan.color }}>₽{plan.price}</span>
                    <span className="text-sm mb-1" style={{ color: 'var(--m-text3)' }}>/мес</span>
                  </div>
                  {/* Рыночная цена разово */}
                  <div className="text-xs mb-4 p-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--m-text3)' }}>
                    Разовый вызов на рынке: <span className="font-black text-white">{plan.marketPrice}</span>
                  </div>
                  <div className="space-y-2.5 flex-1 mb-5">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2">
                        <Icon name="Check" size={13} style={{ color: plan.color, marginTop: 3, flexShrink: 0 }} />
                        <span className="text-xs" style={{ color: 'var(--m-text2)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  {/* Экономика тарифа */}
                  <div className="pt-4 space-y-1.5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: 'var(--m-text3)' }}>Юнит-экономика</div>
                    <div className="flex justify-between text-xs">
                      <span style={{ color: 'var(--m-text3)' }}>Выручка</span>
                      <span className="font-black text-white">₽{plan.economics.revenue}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span style={{ color: 'var(--m-text3)' }}>Перем. затраты</span>
                      <span style={{ color: '#FC3F1D', fontWeight: 700 }}>−₽{plan.economics.varCost}</span>
                    </div>
                    <div className="flex justify-between text-xs font-black pt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <span style={{ color: plan.color }}>Маржинальная прибыль</span>
                      <span style={{ color: plan.color }}>₽{plan.economics.contribution} ({plan.economics.margin}%)</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Сравнение с конкурентами */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Сравнение с конкурентами на российском рынке</h3>
          <div className="m-card overflow-hidden mb-14">
            <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {["Сервис", "Цена/мес", "Стоимость в год", "Что включено"].map(h => (
                <div key={h} className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--m-text3)' }}>{h}</div>
              ))}
            </div>
            {COMPETITOR_COMPARE.map((row, i) => (
              <div key={row.name} className="grid grid-cols-4 px-6 py-4" style={{
                borderBottom: i < COMPETITOR_COMPARE.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                background: row.highlight ? 'rgba(255,204,0,0.04)' : 'transparent',
              }}>
                <div className="text-sm font-bold" style={{ color: row.highlight ? 'var(--m-yellow)' : 'white' }}>{row.name}</div>
                <div className="text-sm font-black" style={{ color: row.highlight ? 'var(--m-yellow)' : 'var(--m-text2)' }}>{row.price}</div>
                <div className="text-sm" style={{ color: 'var(--m-text2)' }}>{row.perYear}</div>
                <div className="text-xs" style={{ color: 'var(--m-text2)' }}>{row.extra}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* B2B тарифы */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Корпоративный тариф — логистические компании</h3>
          <div className="m-card overflow-hidden mb-14">
            <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {["Размер парка", "Цена за ТС", "Скидка", "Условия"].map(h => (
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
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Юнит-экономика по тарифам</h3>
          <p className="text-xs mb-5" style={{ color: 'var(--m-text3)' }}>Переменные затраты = себестоимость выездов. Не включают постоянные расходы (HQ, маркетинг, IT).</p>
          <div className="m-card overflow-hidden mb-6">
            <div className="grid grid-cols-5 px-6 py-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {["Тариф", "Выручка/мес", "Перем. затраты", "Маржинальная прибыль", "Маржа"].map(h => (
                <div key={h} className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--m-text3)' }}>{h}</div>
              ))}
            </div>
            {UNIT_ROWS.map((row, i) => (
              <div key={row.label} style={{ borderBottom: i < UNIT_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div className="grid grid-cols-5 px-6 py-4">
                  <div className="text-sm font-bold text-white">{row.label}</div>
                  <div className="text-sm font-black" style={{ color: row.color }}>{row.revenue}</div>
                  <div className="text-sm" style={{ color: 'var(--m-text2)' }}>{row.varCost}</div>
                  <div className="text-sm font-black text-white">{row.contribution}</div>
                  <div className="text-sm font-black" style={{ color: row.color }}>{row.margin}</div>
                </div>
                <div className="px-6 pb-3 text-xs" style={{ color: 'var(--m-text3)' }}>{row.note}</div>
              </div>
            ))}
          </div>
          <div className="m-card p-4 flex gap-3 mb-14" style={{ border: '1px solid rgba(252,63,29,0.15)' }}>
            <Icon name="Info" size={15} style={{ color: '#FC3F1D', flexShrink: 0, marginTop: 2 }} />
            <p className="text-xs" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
              Маржинальная прибыль не равна чистой прибыли. Из неё необходимо покрывать постоянные расходы (~₽8.3M/мес в год 1). Точка операционной безубыточности — <strong className="text-white">~19 000 подписчиков</strong> при среднем чеке ₽780.
            </p>
          </div>
        </ScrollReveal>

        {/* Постоянные издержки */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-4">Структура постоянных издержек (год 1)</h3>
          <div className="m-card overflow-hidden mb-14">
            {FIXED_COSTS.map((fc, i) => (
              <div key={fc.label} className="flex items-center justify-between px-6 py-4" style={{ borderBottom: i < FIXED_COSTS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', background: i === FIXED_COSTS.length - 1 ? 'rgba(255,204,0,0.04)' : 'transparent' }}>
                <div>
                  <div className="text-sm font-bold" style={{ color: i === FIXED_COSTS.length - 1 ? 'var(--m-yellow)' : 'white' }}>{fc.label}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--m-text3)' }}>{fc.note}</div>
                </div>
                <div className="text-sm font-black" style={{ color: i === FIXED_COSTS.length - 1 ? 'var(--m-yellow)' : 'var(--m-text2)', flexShrink: 0 }}>{fc.amount}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Прогноз ARR */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Прогноз годовой выручки (ARR)</h3>
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
          <p className="text-xs" style={{ color: 'var(--m-text3)' }}>
            * Прогноз строится на среднем чеке ₽780/мес (B2C) и ₽790/ТС/мес (B2B 10–49 ТС). Пилот — Москва, Q2 2026. Старение парка (67.7% авто старше 10 лет, ГИБДД 2025) ускоряет органический рост без дополнительных затрат на привлечение.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="m-card p-5 flex gap-4 mt-10" style={{ border: '1px solid rgba(255,204,0,0.12)' }}>
            <Icon name="TrendingUp" size={20} style={{ color: 'var(--m-yellow)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <div className="font-black text-white uppercase tracking-tight mb-1">Почему подписка выгоднее разовых вызовов</div>
              <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                В Москве 2025 года разовый вызов эвакуатора стоит ₽5 000–7 000. При статистике 1.8 инцидента/год (ГИБДД 2025) — это ₽9 000–12 600 в год. Тариф «Старт» стоит <strong className="text-white">₽7 080/год</strong> и покрывает все случаи. При росте цен на топливо и ФОТ водителей в 2025–2026 разовые вызовы дорожают — подписка выгоднее год от года. В месяц без инцидентов переменные затраты платформы равны нулю — маржа 100%.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}