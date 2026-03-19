import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, ScrollReveal } from "./shared";

const KEY_FACTS = [
  { value: "$32.8B", label: "объём мирового рынка", color: "var(--m-yellow)" },
  { value: "5.60%",  label: "CAGR до 2035 года",    color: "var(--m-blue)"   },
  { value: "7.28%",  label: "CAGR B2B сегмента",    color: "var(--m-purple)" },
  { value: "82%",    label: "водителей РФ в Навигаторе", color: "var(--m-red)" },
  { value: "30 мин", label: "SLA в городах",         color: "var(--m-yellow)" },
  { value: "60 мин", label: "SLA на трассах",        color: "var(--m-blue)"   },
];

const DRIVERS = [
  { icon: "Car",      title: "Старение автопарка",         desc: "Средний возраст автомобилей в России — 14 лет. Вероятность поломки растёт экспоненциально после 7 лет эксплуатации." },
  { icon: "Cpu",      title: "Рост сложности электроники", desc: "Современный автомобиль содержит 100+ ЭБУ. Самостоятельная диагностика невозможна — нужен специалист с оборудованием." },
  { icon: "Package",  title: "Логистика последней мили",   desc: "B2B сегмент растёт с темпом 7.28% CAGR. Простой грузовика в РФ стоит ₽25 000–80 000 в сутки." },
  { icon: "Shield",   title: "Запрос на безопасность",    desc: "После пандемии резко вырос спрос на автопутешествия. Семьи готовы платить за спокойствие, а не экономить на безопасности." },
];

const CHAPTERS = [
  { icon: "Cpu",           label: "Глава 1", title: "Технический план",     href: "#operations"        },
  { icon: "BarChart2",     label: "Глава 2", title: "Финансовая стратегия", href: "#finance"           },
  { icon: "Wrench",        label: "Глава 3", title: "Личный механик",       href: "#lichniy-mechanik"  },
  { icon: "Megaphone",     label: "Глава 4", title: "Маркетинговый план",   href: "#marketing"         },
  { icon: "AlertTriangle", label: "Глава 5", title: "Анализ рисков",        href: "#risks"             },
];

export default function SummarySection() {
  return (
    <section id="summary" className="m-section" style={{ background: 'var(--m-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Заголовок */}
        <ScrollReveal>
          <SectionLabel>Резюме проекта</SectionLabel>
          <SectionTitle>Механики —<br /><span style={{ color: 'var(--m-yellow)' }}>бизнес-план</span></SectionTitle>
        </ScrollReveal>

        {/* Описание + позиционирование */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 mb-16">
          <ScrollReveal delay={100}>
            <p className="text-base mb-4" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
              <strong className="text-white">Механики</strong> — подписочный сервис экстренной помощи на дорогах с глубокой интеграцией в навигационные и телематические системы. Продукт закрывает критический пробел: при охвате 82% водителей через навигаторы на рынке нет монетизированного сервиса физической помощи.
            </p>
            <p className="text-base mb-4" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
              Мировой рынок — <strong className="text-white">$32.8 млрд</strong> с ростом <strong className="text-white">5.6%</strong> ежегодно. B2B сегмент растёт быстрее — <strong className="text-white">7.28% CAGR</strong>.
            </p>
            <p className="text-base" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
              Платформа включает два продукта: <strong className="text-white">экстренная помощь на дороге</strong> и <strong className="text-white">«Личный механик»</strong> — система умного обслуживания, которая предупреждает о проблеме до её возникновения.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {[
                { color: 'var(--m-yellow)', label: 'МИССИЯ', text: 'Обеспечить бесперебойное движение и безопасность на дорогах России, минимизируя простои транспорта и риски для водителей.' },
                { color: 'var(--m-blue)',   label: 'ПОЗИЦИОНИРОВАНИЕ', text: 'Не «эвакуатор по звонку», а предиктивный ассистент. Первый сервис, предлагающий помощь до того, как водитель осознал проблему.' },
                { color: 'var(--m-red)',    label: 'КЛЮЧЕВОЙ КОНКУРЕНТ', text: 'РАМК и страховые ассистанс-службы. Их слабость — реактивность. Механики действуют проактивно через телематику.' },
              ].map(item => (
                <div key={item.label} className="m-card p-5">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: item.color }}>{item.label}</div>
                  <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Ключевые цифры */}
        <ScrollReveal delay={100}>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Ключевые цифры рынка</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px mb-16" style={{ borderRadius: 20, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
            {KEY_FACTS.map((f) => (
              <div key={f.label} className="px-7 py-6" style={{ background: 'var(--m-card)' }}>
                <div className="text-4xl font-black mb-1" style={{ color: f.color }}>{f.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--m-text3)' }}>{f.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Драйверы */}
        <ScrollReveal delay={150}>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Драйверы роста рынка</h3>
          <div className="grid md:grid-cols-2 gap-3 mb-16">
            {DRIVERS.map((d, i) => (
              <ScrollReveal key={d.title} delay={i * 100}>
                <div className="m-card p-6 flex gap-4">
                  <div className="m-icon-box flex-shrink-0">
                    <Icon name={d.icon} size={20} />
                  </div>
                  <div>
                    <div className="font-black text-white uppercase tracking-tight mb-1">{d.title}</div>
                    <div className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>{d.desc}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Структура плана */}
        <ScrollReveal delay={200}>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Структура бизнес-плана</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {CHAPTERS.map((ch, i) => (
              <ScrollReveal key={ch.title} delay={i * 80}>
                <a href={ch.href} className="m-card p-5 block group h-full">
                  <div className="m-icon-box mb-4" style={{ width: 40, height: 40, borderRadius: 12 }}>
                    <Icon name={ch.icon} size={17} />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: 'var(--m-text3)' }}>{ch.label}</div>
                  <div className="font-black text-white text-sm uppercase tracking-tight group-hover:text-yellow-400 transition-colors leading-snug">{ch.title}</div>
                  <div className="mt-4">
                    <Icon name="ArrowRight" size={13} style={{ color: 'var(--m-yellow)' }} />
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
