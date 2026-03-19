import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

const HOW_STEPS = [
  {
    num: "01", icon: "PlusCircle", color: "#4F9EFF",
    title: "Заводите карточку авто",
    desc: "Марка, модель, год, пробег. Вносите данные о последнем ТО: масло, тормозные колодки, ремень ГРМ, шины — всё в одном месте.",
  },
  {
    num: "02", icon: "Cpu", color: "#FFD700",
    title: "Блок OBD следит за пробегом",
    desc: "Телематическое устройство в реальном времени передаёт актуальный пробег. Вам не нужно ничего считать вручную.",
  },
  {
    num: "03", icon: "Bell", color: "#A78BFA",
    title: "Система предупреждает заранее",
    desc: "За 100–500 км до плановой замены приходит уведомление: «Пора менять масло». Никаких просроченных ТО.",
  },
  {
    num: "04", icon: "MapPin", color: "#FC3F1D",
    title: "Предлагаем проверенный сервис",
    desc: "Платформа подбирает автосервис — из тех, что вы уже посещали, или рядом, или с высоким рейтингом доверия.",
  },
];

const MAINTENANCE_ITEMS = [
  { icon: "Droplets", label: "Масло двигателя", note: "по пробегу" },
  { icon: "Circle", label: "Тормозные колодки", note: "передние и задние" },
  { icon: "Settings", label: "Ремень ГРМ", note: "по пробегу / годам" },
  { icon: "Wind", label: "Воздушный фильтр", note: "по сезону" },
  { icon: "Thermometer", label: "Антифриз", note: "по сезону" },
  { icon: "Zap", label: "АКБ", note: "по состоянию" },
  { icon: "RotateCcw", label: "Шины", note: "сезонная смена" },
  { icon: "Gauge", label: "Давление в шинах", note: "ежемесячно" },
];

const RATING_RULES = [
  "Приезд мастера точно в срок по SLA",
  "Фото и видеофиксация работ в платформе",
  "Подтверждение замены оригинальных запчастей",
  "Отсутствие жалоб и возвратов в течение 30 дней",
  "Соответствие прайса платформы — без скрытых доплат",
];

export default function LichniyMechanik() {
  const { ref, inView } = useInView();

  return (
    <section id="lichniy-mechanik" className="ya-section" style={{ background: 'var(--ya-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Продукт · Личный механик</SectionLabel>
          <SectionTitle>Ваш автомобиль<br />под контролем</SectionTitle>
          <SectionSubtitle>
            Система сама следит за состоянием авто, напоминает о плановом обслуживании и подбирает проверенный сервис — вы просто едете.
          </SectionSubtitle>
        </div>

        {/* Как это работает */}
        <div className={`mb-12 ${inView ? 'ya-anim-up delay-100' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-6">Как это работает</h3>
          <div className="grid md:grid-cols-4 gap-3">
            {HOW_STEPS.map((step, i) => (
              <div key={step.num} className={`ya-card p-5 ${inView ? `ya-anim-up delay-${(i + 1) * 120}` : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: step.color, color: '#000' }}>{step.num}</div>
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${step.color}18` }}>
                  <Icon name={step.icon} size={16} style={{ color: step.color }} />
                </div>
                <div className="font-bold text-white mb-2 text-sm">{step.title}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Что отслеживает система */}
        <div className={`mb-12 ${inView ? 'ya-anim-up delay-500' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Что отслеживает система</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {MAINTENANCE_ITEMS.map((item) => (
              <div key={item.label} className="ya-card p-4">
                <div className="ya-icon-circle mb-3" style={{ width: 36, height: 36, borderRadius: 10 }}>
                  <Icon name={item.icon} size={16} />
                </div>
                <div className="font-medium text-white text-sm mb-1">{item.label}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Рейтинг доверия + пример уведомления */}
        <div className={`grid md:grid-cols-2 gap-4 ${inView ? 'ya-anim-up delay-700' : 'opacity-0'}`}>

          {/* Рейтинг доверия автосервисов */}
          <div className="ya-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(252,63,29,0.12)' }}>
                <Icon name="ShieldCheck" size={18} style={{ color: '#FC3F1D' }} />
              </div>
              <div>
                <div className="font-bold text-white">Рейтинг доверия</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>Только реальные критерии — без поддельных оценок</div>
              </div>
            </div>
            <p className="text-sm mb-4" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
              Рейтинг автосервиса формируется не отзывами, а выполнением стандартов платформы. Накрутить его невозможно.
            </p>
            <div className="space-y-2">
              {RATING_RULES.map((rule) => (
                <div key={rule} className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={14} style={{ color: '#4CAF50', marginTop: 2, flexShrink: 0 }} />
                  <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Пример уведомления */}
          <div className="ya-card p-6 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(167,139,250,0.12)' }}>
                <Icon name="Smartphone" size={18} style={{ color: '#A78BFA' }} />
              </div>
              <div>
                <div className="font-bold text-white">Пример уведомления</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>Что увидит пользователь</div>
              </div>
            </div>

            <div className="rounded-2xl p-4 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(255,215,0,0.15)' }}>
                  <Icon name="Wrench" size={16} style={{ color: '#FFD700' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white mb-1">Пора менять масло</div>
                  <div className="text-xs mb-3" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>
                    До плановой замены осталось <strong className="text-white">92 км</strong>. Ваш Toyota Camry, пробег 87 340 км.
                  </div>
                  <div className="rounded-xl p-3" style={{ background: 'rgba(79,158,255,0.08)', border: '1px solid rgba(79,158,255,0.15)' }}>
                    <div className="text-xs font-semibold mb-1" style={{ color: '#4F9EFF' }}>Рекомендуем</div>
                    <div className="text-xs font-medium text-white">Автосервис «Мотор» — 1.2 км</div>
                    <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>Рейтинг платформы · вы уже посещали</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs p-3 rounded-xl" style={{ background: 'rgba(76,175,80,0.08)', border: '1px solid rgba(76,175,80,0.15)', color: '#4CAF50' }}>
              Запись к мастеру — прямо из уведомления, без звонков
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
