import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, ScrollReveal } from "./shared";

// ─── ОБОСНОВАНИЕ ТАРИФОВ ────────────────────────────────────────────────────────
// Источники: РАМК открытый прайс 2024, Авто.ру/Авито — средние цены на услуги,
// данные РСА по инцидентности, опросы водителей (2022–2024)
//
// Средняя частота инцидентов: 1.8 случаев/год на авто (ГИБДД, 2023)
// Рыночная цена эвакуации до 100 км: ₽4 500 (среднее по РФ)
// Средняя стоимость прочих услуг: ₽1 100 за вызов
// Себестоимость 1 выезда (ФОТ мастера + ГСМ + амортизация + накладные): ₽2 100
// Ожидаемых выездов к 1 подписчику/год: 0.9 (не все подписчики попадают в инцидент)
// → Ожидаемые переменные затраты/мес: ₽2 100 × 0.9 / 12 = ~₽158/мес

const B2C_PLANS = [
  {
    name: "Старт", tag: "Базовая защита", price: "590", color: "#4F9EFF",
    marketPrice: "₽4 500–6 000",
    features: [
      "1 эвакуация до 100 км в год",
      "Замена колеса без ограничений",
      "Запуск двигателя в мороз",
      "Подвоз топлива до 10 л",
      "Вскрытие авто",
      "Кешбэк 5% в партнёрских сервисах",
    ],
    economics: { revenue: 590, varCost: 158, contribution: 432, margin: 73 },
  },
  {
    name: "Семейный", tag: "До 3 автомобилей", price: "990", color: "#FFD700", highlight: true,
    marketPrice: "₽12 000–18 000/год",
    features: [
      "До 3 автомобилей на счёте",
      "3 эвакуации до 150 км в год",
      "Все услуги тарифа Старт × 3 авто",
      "Приоритетный вызов — до 15 мин",
      "Чат с мастером в приложении",
      "Страховой ассистент 24/7",
      "Скидка 20% на внеплановые работы",
    ],
    economics: { revenue: 990, varCost: 320, contribution: 670, margin: 68 },
  },
  {
    name: "Экстрим", tag: "Длинные маршруты", price: "1 490", color: "#FC3F1D",
    marketPrice: "₽8 000–15 000/год у конкурентов",
    features: [
      "Неограниченные эвакуации до 300 км",
      "Тяжёлая техника и внедорожники",
      "Эвакуация с обледеневших дорог",
      "Спутниковый трекер в подарок",
      "Персональный мастер-менеджер",
      "Расширенная диагностика (ЭБУ)",
    ],
    economics: { revenue: 1490, varCost: 510, contribution: 980, margin: 66 },
  },
];

const B2B_ROWS = [
  { range: "1–9 авто",    price: "₽990/ТС/мес",  discount: "—",     features: "Базовый пакет, SLA 30 мин" },
  { range: "10–49 авто",  price: "₽790/ТС/мес",  discount: "−20%",  features: "Приоритет, SLA 20 мин, персональный менеджер" },
  { range: "50–199 авто", price: "₽590/ТС/мес",  discount: "−40%",  features: "API интеграция, SLA 15 мин, дашборд парка" },
  { range: "200+ авто",   price: "Договорная",    discount: "Корп.", features: "Выделенная бригада, SLA 10 мин, кастомные KPI" },
];

// Переменные затраты B2B ниже: корпоративные парки лучше обслуживаются → меньше инцидентов
// Ожидаемых выездов B2B: 0.6/авто/год → себестоимость ≈ ₽105/мес/ТС
const UNIT_ROWS = [
  { label: "Старт",         revenue: "₽590/мес",    varCost: "₽158/мес",  contribution: "₽432", margin: "73%", color: "#4F9EFF",
    note: "0.9 выезда/год на подп., 1 эвак в год включена" },
  { label: "Семейный",      revenue: "₽990/мес",    varCost: "₽320/мес",  contribution: "₽670", margin: "68%", color: "#FFD700",
    note: "3 авто × 0.9 вызова / 3 = 0.9 выездов/мес суммарно" },
  { label: "Экстрим",       revenue: "₽1 490/мес",  varCost: "₽510/мес",  contribution: "₽980", margin: "66%", color: "#FC3F1D",
    note: "Более частые выезды, дальние маршруты" },
  { label: "Корп. (10–49)", revenue: "₽790/ТС/мес", varCost: "₽105/ТС/мес",contribution: "₽685", margin: "87%", color: "#A78BFA",
    note: "0.6 вызова/год/ТС, корп. парки хорошо обслуживаются" },
];

// ─── СРАВНЕНИЕ С КОНКУРЕНТАМИ ────────────────────────────────────────────────────
// РАМК базовый пакет 2024: ~₽5 500/год = ₽458/мес, 1 эвакуация 50 км
// Страховые ассистанс (КАСКО): включены в полис, но привязаны к страховке
// Аналогичные пакеты Европомощи: ₽4 800–7 200/год
const COMPETITOR_COMPARE = [
  { name: "Механики — Старт",      price: "₽590/мес", perYear: "₽7 080/год",  evac: "до 100 км",  extra: "телематика, чат, кешбэк",         highlight: true },
  { name: "РАМК Базовый",          price: "₽458/мес", perYear: "₽5 500/год",  evac: "до 50 км",   extra: "без телематики и чата",            highlight: false },
  { name: "Европомощь",            price: "₽500/мес", perYear: "₽6 000/год",  evac: "до 100 км",  extra: "без предиктивных функций",         highlight: false },
  { name: "Разовый вызов эвакуатора",price: "₽4 500",  perYear: "₽8 100/год*",evac: "до 100 км",  extra: "* при 1.8 инцидента/год",          highlight: false },
];

// ─── ПРОГНОЗ ARR ─────────────────────────────────────────────────────────────────
// Расчёт: 2026 — старт Москва, 40 000 подп. × ср. чек ₽780/мес × 12 мес + B2B
// 2027 — 5 городов, 280 000 подп. × ₽820 + B2B масштаб
// 2028 — федеральный охват

const FORECAST = [
  { year: "2026", arr: "₽410M",  users: "40 000",  b2b: "150 парков",   note: "Пилот — Москва" },
  { year: "2027", arr: "₽2.9B",  users: "280 000", b2b: "900 парков",   note: "5 городов-миллионников" },
  { year: "2028", arr: "₽9.1B",  users: "850 000", b2b: "2 500 парков", note: "Федеральный масштаб" },
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
            Тарифы рассчитаны на основе реальных рыночных цен 2022–2024, данных РАМК, РСА и анализа частоты инцидентов ГИБДД.
          </SectionSubtitle>
        </ScrollReveal>

        {/* Методология */}
        <ScrollReveal delay={80}>
          <div className="m-card p-5 flex gap-4 mb-10 mt-10" style={{ border: '1px solid rgba(255,204,0,0.15)' }}>
            <Icon name="Calculator" size={18} style={{ color: 'var(--m-yellow)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <div className="font-black text-white uppercase tracking-tight mb-1 text-sm">Методология расчёта переменных затрат</div>
              <p className="text-xs" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
                Средняя себестоимость 1 выезда (ФОТ мастера ~₽1 100 + ГСМ ~₽400 + амортизация ~₽350 + накладные ~₽250) = <strong className="text-white">₽2 100</strong>.
                Средняя частота инцидентов по данным ГИБДД 2023 — <strong className="text-white">1.8 случая/авто/год</strong>, но не все требуют выезда мастера.
                С поправкой на тип инцидента — ожидаемых оплачиваемых выездов: <strong className="text-white">0.9/подписчик/год</strong>, или ₽158/мес в переменных затратах (тариф Старт).
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
            * Прогноз строится на среднем чеке ₽780/мес (B2C) и ₽790/ТС/мес (B2B 10–49 ТС). Рост числа подписчиков — по модели «реферал + нативная интеграция в Навигатор».
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="m-card p-5 flex gap-4 mt-10" style={{ border: '1px solid rgba(255,204,0,0.12)' }}>
            <Icon name="TrendingUp" size={20} style={{ color: 'var(--m-yellow)', flexShrink: 0, marginTop: 2 }} />
            <div>
              <div className="font-black text-white uppercase tracking-tight mb-1">Почему подписка выгоднее разовых вызовов</div>
              <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                Средний автовладелец платит ₽4 500–6 000 за один вызов эвакуатора. При статистике 1.8 инцидента/год — это ₽8 100–10 800 в год. Тариф «Старт» стоит <strong className="text-white">₽7 080/год</strong> и покрывает все случаи. Экономия — очевидна. В месяц без инцидентов переменные затраты платформы равны нулю — маржа 100%.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
