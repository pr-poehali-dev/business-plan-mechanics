import Icon from "@/components/ui/icon";
import { ScrollReveal } from "./shared";

const STATS = [
  { value: "$32.8B", label: "мировой рынок" },
  { value: "5.6%",  label: "CAGR до 2035" },
  { value: "82%",   label: "водителей в Навигаторе" },
  { value: "30 мин",label: "SLA в городе" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: 'var(--m-black)' }}>
      <div className="absolute inset-0 m-grid-bg opacity-50" />
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[160px] pointer-events-none" style={{ background: 'rgba(255,204,0,0.055)' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-36 w-full">
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="m-tag">Бизнес-план</span>
            <span className="m-tag m-tag-white">Механики · 2026</span>
            <span className="m-tag m-tag-red">Конфиденциально</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-[clamp(4rem,12vw,10rem)] font-black leading-[0.88] tracking-tighter uppercase mb-8">
            <span style={{ color: 'var(--m-yellow)' }}>Механики</span>
            <span style={{ color: 'var(--m-red)' }}>.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Помощь на дорогах по подписке
          </p>
        </ScrollReveal>

        <ScrollReveal delay={280}>
          <p className="text-base max-w-xl mb-8" style={{ color: 'var(--m-text2)', lineHeight: 1.75 }}>
            Предиктивный сервис экстренной помощи — приходим до того, как водитель нажал кнопку. Телематика автомобиля, охват 82% водителей через навигационные сервисы, эвакуация до 60 тонн.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={360}>
          <div className="flex flex-wrap gap-3 mb-14">
            <a href="#summary" className="m-btn-primary">
              Читать резюме
              <Icon name="ArrowDown" size={15} />
            </a>
            <a href="#pitch" className="m-btn-secondary">
              Показатели года
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={440}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden" style={{ borderRadius: 20, background: 'rgba(255,255,255,0.05)' }}>
            {STATS.map((s) => (
              <div key={s.value} className="px-7 py-6" style={{ background: 'var(--m-surface)' }}>
                <div className="text-3xl font-black mb-1" style={{ color: 'var(--m-yellow)' }}>{s.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--m-text3)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'var(--m-text3)' }}>
        <span className="text-[10px] font-black tracking-[0.3em] uppercase">листать</span>
        <Icon name="ChevronDown" size={14} />
      </div>
    </section>
  );
}
