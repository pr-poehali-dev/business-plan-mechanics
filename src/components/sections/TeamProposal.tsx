import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

const WHY_YANDEX = [
  {
    icon: "Database",
    title: "Яндекс уже владеет экосистемой",
    desc: "Яндекс.Авто, Яндекс Go, Яндекс.Страхование — идеальная инфраструктура для интеграции. Механики органично встраиваются в существующие продукты.",
  },
  {
    icon: "Users",
    title: "Готовая аудитория",
    desc: "60+ млн активных пользователей Яндекса. Запуск «Механики» внутри экосистемы даёт мгновенный доступ без маркетинговых затрат.",
  },
  {
    icon: "TrendingUp",
    title: "Данные усиливают друг друга",
    desc: "Авто-данные «Механики» обогащают профили пользователей Яндекса. Это повышает точность рекламной таргетировки и финансовых продуктов.",
  },
  {
    icon: "Globe",
    title: "Масштаб без риска",
    desc: "Asset-light модель: Яндекс не покупает флот, не строит СТО. Только платформа, данные и маркетплейс услуг.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Пилот «Снег»",
    desc: "30 дней, один район Москвы. 50 первых пользователей, замер метрик и NPS.",
    icon: "Snowflake",
  },
  {
    num: "02",
    title: "Цифровой паспорт",
    desc: "5 партнёрских СТО, запуск VIN-верификации, первые 500 досье.",
    icon: "FileText",
  },
  {
    num: "03",
    title: "Data продукт",
    desc: "Первые сделки по продаже данных страховщикам и дилерам.",
    icon: "Database",
  },
];

function PitchSection() {
  const { ref, inView } = useInView();
  return (
    <section id="pitch" className="ya-section relative overflow-hidden" style={{ background: 'var(--ya-dark)' }}>
      {/* Yellow glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-[100px] opacity-[0.05]" style={{ background: 'var(--ya-yellow)' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Предложение</SectionLabel>
          <SectionTitle>
            Почему это проект<br />
            <span style={{ color: 'var(--ya-yellow)' }}>для Яндекса</span>
          </SectionTitle>
          <SectionSubtitle>
            «Механики» — не конкурент экосистеме Яндекса. Это недостающий слой, который соединяет физический авторынок с цифровым профилем пользователя.
          </SectionSubtitle>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-12">
          {WHY_YANDEX.map((w, i) => (
            <div key={w.title} className={`ya-card p-6 flex gap-4 ${inView ? `ya-anim-up delay-${(i + 1) * 150}` : 'opacity-0'}`}>
              <div className="ya-icon-circle flex-shrink-0">
                <Icon name={w.icon} size={20} />
              </div>
              <div>
                <div className="font-semibold text-white mb-2">{w.title}</div>
                <div className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>{w.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Первые шаги */}
        <div className={`mb-12 ${inView ? 'ya-anim-up delay-500' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-6">Первые три шага</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {STEPS.map((s) => (
              <div key={s.num} className="ya-card p-6">
                <div className="text-4xl font-bold mb-4" style={{ color: 'rgba(255,215,0,0.15)' }}>{s.num}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(255,215,0,0.1)' }}>
                  <Icon name={s.icon} size={18} style={{ color: 'var(--ya-yellow)' }} />
                </div>
                <div className="font-semibold text-white mb-2">{s.title}</div>
                <div className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA блок */}
        <div className={`p-8 md:p-10 rounded-2xl ${inView ? 'ya-anim-up delay-700' : 'opacity-0'}`} style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.15)' }}>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="text-2xl font-bold text-white mb-2">Готов запустить пилот</div>
              <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
                Есть концепция, юнит-экономика и понимание рынка. Ищу команду и ресурсы Яндекса, чтобы проверить гипотезу за 30 дней.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button className="ya-btn-primary">
                Обсудить проект
                <Icon name="ArrowRight" size={16} />
              </button>
              <button className="ya-btn-secondary">
                Скачать PDF
              </button>
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
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white">Механики</span>
          <span style={{ color: 'var(--ya-red)' }}>.</span>
        </div>
        <div className="text-sm" style={{ color: 'var(--ya-text-muted)' }}>
          Концепция продукта · 2026 · Конфиденциально
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm" style={{ color: 'var(--ya-text-muted)' }}>v2.0</span>
        </div>
      </div>
    </footer>
  );
}

export default function TeamProposal() {
  return (
    <>
      <PitchSection />
      <Footer />
    </>
  );
}
