import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, useInView } from "./shared";

const SUMMARY_CHAPTERS = [
  { icon: "Cpu",         label: "Глава 1", title: "Технический план",      href: "#operations" },
  { icon: "BarChart2",   label: "Глава 2", title: "Финансовая стратегия",  href: "#finance"    },
  { icon: "Megaphone",   label: "Глава 3", title: "Маркетинговый план",    href: "#marketing"  },
  { icon: "AlertTriangle", label: "Глава 4", title: "Анализ рисков",       href: "#risks"      },
];

const KEY_FACTS = [
  { value: "$32.8B",  label: "объём мирового рынка", color: "#FFD700" },
  { value: "5.60%",  label: "CAGR до 2035 года", color: "#4F9EFF" },
  { value: "7.28%",  label: "CAGR B2B сегмента", color: "#A78BFA" },
  { value: "82%",    label: "водителей РФ в Навигаторе", color: "#FC3F1D" },
  { value: "30 мин", label: "SLA в городах", color: "#FFD700" },
  { value: "60 мин", label: "SLA на трассах", color: "#4F9EFF" },
];

const DRIVERS = [
  {
    icon: "Car",
    title: "Старение автопарка",
    desc: "Средний возраст автомобилей в России — 14 лет. Вероятность поломки растёт экспоненциально после 7 лет эксплуатации.",
  },
  {
    icon: "Cpu",
    title: "Рост сложности электроники",
    desc: "Современный автомобиль содержит 100+ ЭБУ. Самостоятельная диагностика невозможна — нужен специалист с оборудованием.",
  },
  {
    icon: "Package",
    title: "Логистика последней мили",
    desc: "B2B сегмент растёт с темпом 7.28% CAGR. Простой грузовика в РФ стоит ₽25 000–80 000 в сутки.",
  },
  {
    icon: "Shield",
    title: "Запрос на безопасность",
    desc: "После пандемии резко вырос спрос на автопутешествия. Семьи готовы платить за спокойствие, а не экономить на безопасности.",
  },
];

export default function SummarySection() {
  const { ref, inView } = useInView();

  return (
    <section id="summary" className="ya-section" style={{ background: 'var(--ya-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Резюме ── */}
        <div ref={ref} className={`mb-14 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Резюме · Executive Summary</SectionLabel>
          <SectionTitle>
            Механики —<br />
            <span style={{ color: 'var(--ya-yellow)' }}>бизнес-план</span>
          </SectionTitle>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-base mb-4" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.8 }}>
                <strong className="text-white">Механики</strong> — подписочный сервис экстренной помощи на дорогах с глубокой интеграцией в навигационные и телематические системы. Продукт закрывает критический пробел: при охвате 82% водителей через навигаторы на рынке нет монетизированного сервиса физической помощи.
              </p>
              <p className="text-base mb-4" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.8 }}>
                Мировой рынок roadside assistance — <strong className="text-white">$32.8 млрд</strong> с ежегодным ростом <strong className="text-white">5.6%</strong>. B2B сегмент (грузовые перевозки) растёт быстрее — <strong className="text-white">7.28% CAGR</strong> — за счёт бума логистики последней мили.
              </p>
              <p className="text-base" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.8 }}>
                Конкурентное преимущество: навигационные сервисы видят каждый автомобиль на дороге и знают условия маршрута. Это позволяет <strong className="text-white">предсказывать инциденты до их возникновения</strong> и отправлять помощь превентивно — чего не умеет ни один конкурент на рынке.
              </p>
            </div>
            <div className="space-y-3">
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.15)' }}>
                <div className="text-xs font-semibold mb-2" style={{ color: 'var(--ya-yellow)', letterSpacing: '0.06em' }}>МИССИЯ</div>
                <p className="text-sm text-white font-medium leading-relaxed">
                  «Обеспечить бесперебойное движение и безопасность на дорогах России, минимизируя простои коммерческого транспорта и риски для семейных путешественников.»
                </p>
              </div>
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(79,158,255,0.05)', border: '1px solid rgba(79,158,255,0.15)' }}>
                <div className="text-xs font-semibold mb-2" style={{ color: '#4F9EFF', letterSpacing: '0.06em' }}>СТРАТЕГИЧЕСКОЕ ПОЗИЦИОНИРОВАНИЕ</div>
                <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
                  Не «эвакуатор по звонку», а <strong className="text-white">предиктивный ассистент</strong>, интегрированный в ежедневный маршрут. Первый сервис, который предлагает помощь до того, как водитель осознал проблему.
                </p>
              </div>
              <div className="p-5 rounded-2xl" style={{ background: 'rgba(252,63,29,0.05)', border: '1px solid rgba(252,63,29,0.15)' }}>
                <div className="text-xs font-semibold mb-2" style={{ color: '#FC3F1D', letterSpacing: '0.06em' }}>КЛЮЧЕВОЙ КОНКУРЕНТ</div>
                <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
                  РАМК и страховые ассистанс-службы. Их слабость — <strong className="text-white">реактивность</strong>: ждут звонка. Механики действуют проактивно, используя данные телематики и навигации, недоступные конкурентам.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Ключевые цифры ── */}
        <div className={`mb-14 ${inView ? 'ya-anim-up delay-200' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Ключевые цифры рынка</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'var(--ya-border)', borderRadius: 16, overflow: 'hidden' }}>
            {KEY_FACTS.map((f) => (
              <div key={f.label} className="px-6 py-5" style={{ background: 'var(--ya-card)' }}>
                <div className="text-3xl font-bold mb-1" style={{ color: f.color }}>{f.value}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Драйверы рынка ── */}
        <div className={`mb-14 ${inView ? 'ya-anim-up delay-300' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Драйверы роста рынка</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {DRIVERS.map((d, i) => (
              <div key={d.title} className={`ya-card p-5 flex gap-4 ${inView ? `ya-anim-up delay-${(i + 1) * 100 + 300}` : 'opacity-0'}`}>
                <div className="ya-icon-circle flex-shrink-0">
                  <Icon name={d.icon} size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">{d.title}</div>
                  <div className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Структура документа ── */}
        <div className={`${inView ? 'ya-anim-up delay-500' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Структура бизнес-плана</h3>
          <div className="grid md:grid-cols-4 gap-3">
            {SUMMARY_CHAPTERS.map((ch) => (
              <a key={ch.title} href={ch.href} className="ya-card p-5 block group">
                <div className="ya-icon-circle mb-3" style={{ width: 40, height: 40, borderRadius: 10 }}>
                  <Icon name={ch.icon} size={17} />
                </div>
                <div className="text-xs font-semibold mb-1" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{ch.label}</div>
                <div className="font-semibold text-white text-sm group-hover:text-yellow-400 transition-colors">{ch.title}</div>
                <div className="mt-3">
                  <Icon name="ArrowRight" size={14} style={{ color: 'var(--ya-yellow)' }} />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}