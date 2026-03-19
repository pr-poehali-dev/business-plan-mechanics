import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

const UNIT_ROWS = [
  { label: "Подписчик Стандарт", revenue: "₽1 490/мес", cost: "₽420", margin: "72%", color: "#FFD700" },
  { label: "Подписчик Люкс", revenue: "₽2 990/мес", cost: "₽680", margin: "77%", color: "#FFD700" },
  { label: "B2B авто (парк)", revenue: "₽890/авт/мес", cost: "₽190", margin: "79%", color: "#4F9EFF" },
  { label: "Продажа данных (профиль)", revenue: "₽800–2 000", cost: "₽0", margin: "~100%", color: "#FC3F1D" },
];

const ROADMAP = [
  {
    period: "Q2 2026",
    color: "#FFD700",
    items: ["Пилот «Снег» — 1 район Москвы", "50 первых подписчиков", "Первые 3 СТО-партнёра"],
  },
  {
    period: "Q3 2026",
    color: "#4F9EFF",
    items: ["Запуск «Паспорт» (бета)", "500 цифровых досье", "Первый B2B контракт"],
  },
  {
    period: "Q4 2026",
    color: "#A78BFA",
    items: ["Запуск «Страховка»", "5 000 пользователей", "Первые продажи данных"],
  },
  {
    period: "2027",
    color: "#FC3F1D",
    items: ["50 000 пользователей", "3 города", "Выручка ₽180M ARR"],
  },
];

function FinanceSection() {
  const { ref, inView } = useInView();
  return (
    <section id="finance" className="ya-section" style={{ background: 'var(--ya-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Юнит-экономика</SectionLabel>
          <SectionTitle>Финансовая модель</SectionTitle>
          <SectionSubtitle>
            Высокомаржинальная модель за счёт минимальных переменных затрат. Данные монетизируются без дополнительных расходов.
          </SectionSubtitle>
        </div>

        {/* Unit economics table */}
        <div className={`ya-card overflow-hidden mb-8 ${inView ? 'ya-anim-up delay-200' : 'opacity-0'}`}>
          <div className="grid grid-cols-4 px-6 py-3" style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--ya-border)' }}>
            {["Продукт", "Выручка", "Себестоимость", "Маржа"].map((h) => (
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

        {/* Прогноз */}
        <div className={`grid md:grid-cols-3 gap-3 ${inView ? 'ya-anim-up delay-400' : 'opacity-0'}`}>
          {[
            { year: "2026", arr: "₽12M", users: "5 000", note: "Пилот, Москва" },
            { year: "2027", arr: "₽180M", users: "50 000", note: "3 города" },
            { year: "2028", arr: "₽1.2B", users: "500 000", note: "10 городов + данные" },
          ].map((p) => (
            <div key={p.year} className="ya-card p-6">
              <div className="text-xs font-semibold mb-3" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{p.year} · {p.note}</div>
              <div className="text-4xl font-bold mb-1" style={{ color: 'var(--ya-yellow)' }}>{p.arr}</div>
              <div className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>ARR · {p.users} пользователей</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  const { ref, inView } = useInView();
  return (
    <section className="ya-section" style={{ background: 'var(--ya-black)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Роадмап</SectionLabel>
          <SectionTitle>План запуска</SectionTitle>
        </div>

        <div className="relative">
          {/* Линия */}
          <div className="absolute left-6 top-6 bottom-6 w-px hidden md:block" style={{ background: 'var(--ya-border)' }} />

          <div className="space-y-4">
            {ROADMAP.map((r, i) => (
              <div key={r.period} className={`flex gap-6 ${inView ? `ya-anim-up delay-${(i + 1) * 150}` : 'opacity-0'}`}>
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0 z-10" style={{ background: r.color }} />
                </div>
                <div className="ya-card p-6 flex-1">
                  <div className="font-bold mb-3" style={{ color: r.color }}>{r.period}</div>
                  <div className="flex flex-wrap gap-2">
                    {r.items.map((item) => (
                      <span key={item} className="ya-ecosystem-badge">{item}</span>
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

export default function BusinessSections() {
  return (
    <>
      <FinanceSection />
      <RoadmapSection />
    </>
  );
}
