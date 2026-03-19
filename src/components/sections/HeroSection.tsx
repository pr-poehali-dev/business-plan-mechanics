import Icon from "@/components/ui/icon";

const STATS = [
  { value: "$32.8B", label: "мировой рынок, 2026" },
  { value: "5.6%", label: "CAGR до 2035 года" },
  { value: "82%", label: "водителей РФ в Навигаторе" },
  { value: "30 мин", label: "SLA прибытия в городе" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: 'var(--ya-black)' }}>
      <div className="absolute inset-0 ya-grid-bg opacity-60" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[140px] opacity-[0.07]" style={{ background: 'var(--ya-yellow)' }} />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 ya-anim-up">
            <span className="ya-tag">Бизнес-план</span>
            <span className="ya-tag ya-tag-white">Механики · 2026</span>
            <span className="ya-tag ya-tag-red">Конфиденциально</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.08] mb-6 ya-anim-up delay-100" style={{ letterSpacing: '-0.02em' }}>
            <span style={{ color: 'var(--ya-yellow)' }}>Механики</span>
            <span style={{ color: 'var(--ya-red)' }}>.</span>
          </h1>

          <p className="text-2xl font-medium mb-4 ya-anim-up delay-200" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
            Помощь на дорогах по подписке
          </p>

          <p className="text-base mb-6 max-w-xl ya-anim-up delay-300" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
            Миссия — обеспечить бесперебойное движение и безопасность на дорогах России. Предиктивная помощь через телематику автомобиля, охват 82% водителей через навигационные сервисы, эвакуация до 60 тонн с обледенелых склонов.
          </p>

          <div className="flex flex-wrap gap-3 mb-4 ya-anim-up delay-300">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--ya-border)' }}>
              <Icon name="Users" size={14} style={{ color: 'var(--ya-yellow)' }} />
              <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>B2C — подписка Плюс</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--ya-border)' }}>
              <Icon name="Truck" size={14} style={{ color: 'var(--ya-yellow)' }} />
              <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>B2B — корпоративный тариф</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--ya-border)' }}>
              <Icon name="MapPin" size={14} style={{ color: 'var(--ya-yellow)' }} />
              <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>Навигатор + телематика</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-16 ya-anim-up delay-400">
            <a href="#summary" className="ya-btn-primary">
              Читать резюме
              <Icon name="ArrowDown" size={16} />
            </a>
            <a href="#pitch" className="ya-btn-secondary">
              KPI первого года
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px ya-anim-up delay-500" style={{ background: 'var(--ya-border)', borderRadius: 16, overflow: 'hidden' }}>
            {STATS.map((s) => (
              <div key={s.value} className="px-6 py-5" style={{ background: 'var(--ya-card)' }}>
                <div className="ya-metric ya-metric-yellow mb-1 text-3xl">{s.value}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ya-anim-in delay-800">
        <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>листать</div>
        <Icon name="ChevronDown" size={16} style={{ color: 'var(--ya-text-muted)' }} />
      </div>
    </section>
  );
}