import Icon from "@/components/ui/icon";

const STATS = [
  { value: "45М+", label: "автомобилей в России" },
  { value: "₽2.1T", label: "объём авторынка" },
  { value: "0", label: "прозрачных платформ" },
  { value: "2026", label: "год запуска" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: 'var(--ya-black)' }}>
      {/* Subtle grid */}
      <div className="absolute inset-0 ya-grid-bg opacity-60" />

      {/* Yellow glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-[0.06]" style={{ background: 'var(--ya-yellow)' }} />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Лейбл */}
          <div className="flex items-center gap-3 mb-8 ya-anim-up">
            <span className="ya-tag">Концепция продукта</span>
            <span className="ya-tag ya-tag-white">2026</span>
          </div>

          {/* Заголовок */}
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-[1.08] mb-6 ya-anim-up delay-100" style={{ letterSpacing: '-0.02em' }}>
            Механики<span style={{ color: 'var(--ya-red)' }}>.</span>
          </h1>

          <p className="text-2xl font-medium mb-4 ya-anim-up delay-200" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
            Экосистема умного обслуживания автомобилей
          </p>

          <p className="text-base mb-10 max-w-xl ya-anim-up delay-300" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
            Три микросервиса, которые формируют первый в России прозрачный рынок автомобильных данных — с добровольным участием пользователей и монетизацией через экосистему.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-16 ya-anim-up delay-400">
            <a href="#services" className="ya-btn-primary">
              Смотреть концепцию
              <Icon name="ArrowDown" size={16} />
            </a>
            <a href="#data" className="ya-btn-secondary">
              Ценность данных
            </a>
          </div>

          {/* Метрики */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px ya-anim-up delay-500" style={{ background: 'var(--ya-border)', borderRadius: 16, overflow: 'hidden' }}>
            {STATS.map((s) => (
              <div key={s.value} className="px-6 py-5" style={{ background: 'var(--ya-card)' }}>
                <div className="ya-metric ya-metric-yellow mb-1">{s.value}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 ya-anim-in delay-800">
        <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>листать</div>
        <Icon name="ChevronDown" size={16} style={{ color: 'var(--ya-text-muted)' }} />
      </div>
    </section>
  );
}
