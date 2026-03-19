import Icon from "@/components/ui/icon";
import { SectionHeader } from "./shared";

function TeamSection() {
  return (
    <section id="team" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="08" title="КОМАНДА" subtitle="Ключевые специалисты" />
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { name: "Алексей Соколов", role: "CEO & Co-founder", exp: "18 лет", prev: "Экс Яндекс, Сбер", icon: "User" },
            { name: "Мария Новикова", role: "CTO & Co-founder", exp: "15 лет", prev: "Экс Лукойл Digital", icon: "Code2" },
            { name: "Дмитрий Орлов", role: "CPO", exp: "12 лет", prev: "Экс Mail.ru Group", icon: "Layout" },
            { name: "Анна Крылова", role: "Head of Sales", exp: "10 лет", prev: "Экс McKinsey", icon: "TrendingUp" },
          ].map((person) => (
            <div key={person.name} className="p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="w-14 h-14 flex items-center justify-center border mb-4" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                <Icon name={person.icon} size={24} style={{ color: 'hsl(28 100% 55%)' }} />
              </div>
              <div className="text-white font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{person.name}</div>
              <div className="text-xs font-mono-brand mb-3" style={{ color: 'hsl(28 100% 55%)' }}>{person.role}</div>
              <div className="text-xs text-white/30 font-light">{person.exp} опыта</div>
              <div className="text-xs text-white/30 font-light">{person.prev}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[{ num: "47", label: "Специалистов в команде", icon: "Users" }, { num: "12", label: "Успешных внедрений", icon: "CheckCircle" }, { num: "6", label: "Лет на рынке", icon: "Calendar" }].map((s) => (
            <div key={s.label} className="flex items-center gap-4 p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="w-12 h-12 flex items-center justify-center border flex-shrink-0" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                <Icon name={s.icon} size={20} style={{ color: 'hsl(28 100% 55%)' }} />
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: 'hsl(28 100% 55%)' }}>{s.num}</div>
                <div className="text-sm text-white/40 font-light">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProposalSection() {
  return (
    <section id="proposal" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, hsl(28 100% 55%), transparent)' }} />
      </div>
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <div className="section-number mb-6">09 // ПРЕДЛОЖЕНИЕ</div>
        <h2 className="text-7xl font-bold text-white mb-4 leading-none text-glow-orange" style={{ fontFamily: 'Oswald, sans-serif' }}>
          СЛЕДУЮЩИЙ<br /><span style={{ color: 'hsl(28 100% 55%)' }}>ШАГ</span>
        </h2>
        <p className="text-lg text-white/50 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Предлагаем провести бесплатный технический аудит инфраструктуры Газпром нефть и подготовить персонализированное предложение по внедрению платформы Механики.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[{ step: "01", title: "Аудит", desc: "Бесплатный технический анализ за 5 дней", icon: "Search" }, { step: "02", title: "Пилот", desc: "30-дневный пилот на выбранном подразделении", icon: "Play" }, { step: "03", title: "Контракт", desc: "Согласование условий и старт проекта", icon: "FileCheck" }].map((s) => (
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
            Запросить аудит
          </button>
          <button className="px-10 py-4 font-bold text-base tracking-widest uppercase border border-white/20 text-white/60 hover:border-white/40 hover:text-white transition-all"
                  style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.15em' }}>
            Скачать PDF
          </button>
        </div>
        <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
          <div className="text-xs font-mono-brand text-white/30 mb-6 tracking-widest">// КОНТАКТЫ</div>
          <div className="flex flex-wrap justify-center gap-12">
            {[{ icon: "Mail", label: "info@mechaniki.ru" }, { icon: "Phone", label: "+7 (495) 000-00-00" }, { icon: "Globe", label: "www.mechaniki.ru" }].map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <Icon name={c.icon} size={16} style={{ color: 'hsl(28 100% 55%)' }} />
                <span className="text-sm text-white/50 font-mono-brand">{c.label}</span>
              </div>
            ))}
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
            <Icon name="Settings2" size={12} style={{ color: 'hsl(28 100% 55%)' }} />
          </div>
          <span className="text-sm font-bold text-white/30 tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>МЕХАНИКИ</span>
        </div>
        <div className="text-xs font-mono-brand text-white/20">© 2026 Механики. Конфиденциально.</div>
        <div className="text-xs font-mono-brand text-white/20">v1.0 // Для Газпром нефть</div>
      </div>
    </footer>
  );
}

export default function TeamProposal() {
  return (
    <>
      <TeamSection />
      <ProposalSection />
      <Footer />
    </>
  );
}
