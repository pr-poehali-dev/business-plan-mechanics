import Icon from "@/components/ui/icon";
import { useCountUp, useInView } from "./shared";

export default function HeroSection() {
  const { ref: statsRef, inView: statsInView } = useInView();

  const cSavings = useCountUp(57, 1800, statsInView);
  const cPartners = useCountUp(180, 1800, statsInView);
  const cROI = useCountUp(100, 1800, statsInView);
  const cSLA = useCountUp(90, 1800, statsInView);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid animate-grid" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,13,18,0.98) 0%, rgba(10,13,18,0.75) 60%, rgba(10,13,18,0.97) 100%)' }} />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(28 100% 55%), transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(195 100% 50%), transparent)' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-8 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(142 70% 50%), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-8 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
              <div className="animate-pulse-orange w-2 h-2 rounded-full" style={{ background: 'hsl(28 100% 55%)' }} />
              <span className="tech-tag">Мастер-план 2026 — Конфиденциально</span>
            </div>

            <h1 className="font-bold leading-none mb-4 text-glow-orange opacity-0-init animate-fade-in-up delay-200"
                style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(64px, 10vw, 120px)', color: 'white' }}>
              МЕ<span style={{ color: 'hsl(28 100% 55%)' }}>ХА</span>НИ<br />КА
            </h1>

            <div className="text-xl text-white/50 mb-3 font-light opacity-0-init animate-fade-in-up delay-300">
              Профессиональная экосистема техпомощи и управления жизненным циклом автомобиля
            </div>
            <div className="text-sm text-white/30 mb-10 font-mono-brand opacity-0-init animate-fade-in-up delay-400">
              // Первый в России «Цифровой паспорт жизненного цикла ТС»
            </div>

            <div className="flex flex-wrap gap-4 opacity-0-init animate-fade-in-up delay-500">
              <a href="#proposal" className="px-8 py-3 font-semibold text-sm tracking-widest uppercase transition-all hover:opacity-90"
                 style={{ background: 'hsl(28 100% 55%)', color: 'hsl(220 20% 6%)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
                К предложению
              </a>
              <a href="#summary" className="px-8 py-3 font-semibold text-sm tracking-widest uppercase border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
                 style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
                Резюме проекта
              </a>
            </div>
          </div>

          <div className="space-y-4 opacity-0-init animate-fade-in-up delay-300">
            {[
              { icon: "Eye", title: "Единое окно правды", desc: "Визуальные доказательства каждого этапа обслуживания — HD-фото запчастей до и после установки", color: "hsl(28 100% 55%)" },
              { icon: "Snowflake", title: "Сервис «Снег»", desc: "Гибридная очистка кузова обдувом. Страховка мастера — обязательный входной билет в премиум", color: "hsl(195 100% 50%)" },
              { icon: "Shield", title: "ИИ-Арбитраж", desc: "Сравнение 360-обзоров. Порог чувствительности: дефекты < 5 см игнорируются", color: "hsl(142 70% 50%)" },
              { icon: "Cpu", title: "VIN-контроль", desc: "Цифровой паспорт ТС с полной историей обслуживания, обязательный ввод госномера и VIN при онбординге", color: "hsl(270 70% 65%)" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 border border-white/5 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: `${item.color}40`, background: `${item.color}15` }}>
                  <Icon name={item.icon} size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{item.title}</div>
                  <div className="text-xs text-white/40 font-light leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
          {[
            { count: cSavings, suf: "%", label: "Маржа при 3 выездах за зиму" },
            { count: cPartners, suf: "+", label: "Партнёрских СТО в плане" },
            { count: cROI, suf: "%", label: "Прибыль без снегопада" },
            { count: cSLA, suf: " мин", label: "SLA прибытия (трасса B2B)" },
          ].map((m, i) => (
            <div key={i} className="relative p-6 border border-white/10 bg-white/[0.03] hover-card opacity-0-init animate-fade-in-up" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
              <div className="text-4xl font-bold text-white mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                <span style={{ color: 'hsl(28 100% 55%)' }}>{m.count}</span>
                <span className="text-2xl ml-1" style={{ color: 'hsl(195 100% 50%)' }}>{m.suf}</span>
              </div>
              <div className="text-sm text-white/50 font-light tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-init animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <Icon name="ChevronDown" size={20} style={{ color: 'rgba(255,255,255,0.2)' }} />
      </div>
    </section>
  );
}
