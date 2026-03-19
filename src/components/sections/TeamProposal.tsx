import Icon from "@/components/ui/icon";
import { SectionHeader } from "./shared";

function ProposalSection() {
  return (
    <section id="proposal" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(28 100% 55%), transparent)' }} />
      </div>
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <div className="section-number mb-6">09 // СЛЕДУЮЩИЙ ШАГ</div>
        <h2 className="text-7xl font-bold text-white mb-4 leading-none text-glow-orange" style={{ fontFamily: 'Oswald, sans-serif' }}>
          ЗАПУСТИМ<br /><span style={{ color: 'hsl(28 100% 55%)' }}>ВМЕСТЕ</span>
        </h2>
        <p className="text-lg text-white/50 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Предлагаем начать с пилотного запуска сервиса «Снег» в одном районе Москвы — это минимальный риск и максимальная скорость проверки гипотез.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12 text-left">
          {[
            { step: "01", title: "Пилот «Снег»", desc: "30 дней, один район Москвы. Первые 50 подписчиков — бесплатно.", icon: "Snowflake" },
            { step: "02", title: "Цифровой паспорт", desc: "Подключение 3–5 СТО-партнёров, запуск API, фото-регламент.", icon: "FileText" },
            { step: "03", title: "B2B контракт", desc: "Логистическая компания на тарифе «Хэви» — первый корпоративный клиент.", icon: "Handshake" },
          ].map((s) => (
            <div key={s.step} className="p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="text-4xl font-bold mb-3 text-white/10" style={{ fontFamily: 'Oswald, sans-serif' }}>{s.step}</div>
              <Icon name={s.icon} size={28} style={{ color: 'hsl(28 100% 55%)', marginBottom: '12px' }} />
              <div className="text-white font-bold mb-2" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{s.title}</div>
              <div className="text-sm text-white/40 font-light">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-10 py-4 font-bold text-base tracking-widest uppercase transition-all hover:opacity-90"
                  style={{ background: 'hsl(28 100% 55%)', color: 'hsl(220 20% 6%)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
            Запустить пилот
          </button>
          <button className="px-10 py-4 font-bold text-base tracking-widest uppercase border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition-all"
                  style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
            Скачать PDF
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-6 border border-white/10 text-left" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs font-mono-brand text-white/30 mb-4 tracking-widest">// ГЛОССАРИЙ</div>
            <div className="space-y-2">
              {[
                { term: "VIN", def: "17-значный код картотеки ТС" },
                { term: "Визуальное Досье", def: "Архив HD-фото осмотров и пруфов ремонта" },
                { term: "Порог чувствительности", def: "Фильтр ИИ: < 5 см царапины, < 2 см вмятины" },
                { term: "Asset-Light", def: "Бизнес-модель без владения активами" },
                { term: "BYOD", def: "Bring Your Own Device — личный инструмент мастера" },
                { term: "КТГ", def: "Коэффициент технической готовности > 92%" },
              ].map((g) => (
                <div key={g.term} className="flex gap-3 py-2 border-b border-white/5">
                  <span className="text-xs font-mono-brand flex-shrink-0 w-36" style={{ color: 'hsl(28 100% 55%)' }}>{g.term}</span>
                  <span className="text-xs text-white/40 font-light">{g.def}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 border border-white/10 text-left" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs font-mono-brand text-white/30 mb-4 tracking-widest">// КОНТАКТЫ</div>
            <div className="space-y-4 mb-6">
              {[
                { icon: "Mail", label: "info@mechanika.ru" },
                { icon: "Phone", label: "+7 (495) 000-00-00" },
                { icon: "Globe", label: "www.mechanika.ru" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <Icon name={c.icon} size={16} style={{ color: 'hsl(28 100% 55%)' }} />
                  <span className="text-sm text-white/50 font-mono-brand">{c.label}</span>
                </div>
              ))}
            </div>
            <div className="p-4 border-l-2 text-xs text-white/40 font-light leading-relaxed" style={{ borderColor: 'hsl(195 100% 50%)', background: 'rgba(0,210,255,0.04)' }}>
              Документ содержит конфиденциальную информацию. Распространение без согласования с автором запрещено.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 flex items-center justify-center border" style={{ borderColor: 'hsl(28 100% 55%)', background: 'rgba(255,140,30,0.1)' }}>
            <Icon name="Wrench" size={12} style={{ color: 'hsl(28 100% 55%)' }} />
          </div>
          <span className="text-sm font-bold text-white/30 tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>МЕХАНИКА</span>
        </div>
        <div className="text-xs font-mono-brand text-white/20">© 2026 Механика. Конфиденциально.</div>
        <div className="text-xs font-mono-brand text-white/20">v1.0 // Мастер-план</div>
      </div>
    </footer>
  );
}

export default function TeamProposal() {
  return (
    <>
      <ProposalSection />
      <Footer />
    </>
  );
}
