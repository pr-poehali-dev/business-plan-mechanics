import Icon from "@/components/ui/icon";
import { HERO_IMAGE, useCountUp, useInView } from "./shared";

export default function HeroSection() {
  const { ref: statsRef, inView: statsInView } = useInView();

  const rev40 = useCountUp(40, 1800, statsInView);
  const rev3 = useCountUp(3, 1800, statsInView);
  const rev180 = useCountUp(180, 1800, statsInView);
  const rev12 = useCountUp(12, 1800, statsInView);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid animate-grid" />
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-20" style={{ mixBlendMode: 'luminosity' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,13,18,0.98) 0%, rgba(10,13,18,0.7) 50%, rgba(10,13,18,0.95) 100%)' }} />
      </div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(28 100% 55%), transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(195 100% 50%), transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-8 py-24 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8 opacity-0-init animate-fade-in">
            <div className="animate-pulse-orange w-2 h-2 rounded-full" style={{ background: 'hsl(28 100% 55%)' }} />
            <span className="tech-tag">Конфиденциальный документ — 2026</span>
          </div>

          <h1 className="font-bold leading-none mb-6 text-glow-orange opacity-0-init animate-fade-in-up delay-200"
              style={{ fontFamily: 'Oswald, sans-serif', fontSize: 'clamp(60px, 10vw, 130px)', color: 'white' }}>
            МЕ<span style={{ color: 'hsl(28 100% 55%)' }}>ХА</span>НИ<br />КИ
          </h1>

          <div className="text-xl text-white/50 mb-3 font-light opacity-0-init animate-fade-in-up delay-300">
            Интеллектуальная платформа автоматизации, аналитики и интеграций
          </div>
          <div className="text-base text-white/30 mb-10 font-mono-brand opacity-0-init animate-fade-in-up delay-400">
            // Предложение о внедрении в Газпром нефть
          </div>

          <div className="flex flex-wrap gap-4 mb-20 opacity-0-init animate-fade-in-up delay-500">
            <a href="#proposal" className="px-8 py-3 font-semibold text-sm tracking-widest uppercase transition-all hover:opacity-90"
               style={{ background: 'hsl(28 100% 55%)', color: 'hsl(220 20% 6%)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
              Перейти к предложению
            </a>
            <a href="#solution" className="px-8 py-3 font-semibold text-sm tracking-widest uppercase border border-white/20 text-white/70 hover:border-white/40 hover:text-white transition-all"
               style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
              Изучить решение
            </a>
          </div>

          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { count: rev40, suf: "%", label: "Сокращение издержек" },
              { count: rev3, suf: "x", label: "Рост эффективности" },
              { count: rev180, suf: "+", label: "Интеграций и API" },
              { count: rev12, suf: " мес", label: "Срок окупаемости" },
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
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0-init animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <Icon name="ChevronDown" size={20} style={{ color: 'rgba(255,255,255,0.2)' }} />
      </div>
    </section>
  );
}
