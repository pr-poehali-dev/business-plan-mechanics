import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

const HOW_STEPS = [
  {
    num: "01", icon: "PlusCircle", color: "#4F9EFF",
    title: "Заводите карточку авто",
    desc: "Марка, модель, год, пробег. Вносите данные о последнем ТО: масло, колодки, ремень ГРМ, шины — всё в одном месте.",
  },
  {
    num: "02", icon: "Cpu", color: "#FFD700",
    title: "Подключаете блок OBD",
    desc: "Небольшое устройство в разъём — и авто начинает «рассказывать» о себе само. Пробег, нагрузки, состояние систем. Вы просто едете.",
  },
  {
    num: "03", icon: "Bell", color: "#A78BFA",
    title: "Получаете заботливые подсказки",
    desc: "За 100–500 км до замены масла, при первых признаках слабого аккумулятора, при нестандартной температуре двигателя — мы скажем первыми.",
  },
  {
    num: "04", icon: "MapPin", color: "#FC3F1D",
    title: "Записываемся вместе",
    desc: "Платформа предложит проверенный автосервис — тот, что вы уже посещали, или ближайший с высоким рейтингом. Запись прямо из уведомления.",
  },
];

const CARE_ITEMS = [
  { icon: "Droplets", label: "Масло двигателя", note: "напомним до истечения ресурса", color: "#4F9EFF" },
  { icon: "Zap", label: "Аккумулятор", note: "заметим слабость раньше вас", color: "#FFD700" },
  { icon: "Thermometer", label: "Температура мотора", note: "предупредим о перегреве", color: "#FC3F1D" },
  { icon: "Gauge", label: "Давление в шинах", note: "следим автоматически", color: "#A78BFA" },
  { icon: "Circle", label: "Тормозные колодки", note: "по пробегу и нагрузке", color: "#4F9EFF" },
  { icon: "Settings", label: "Ремень ГРМ", note: "по пробегу и годам", color: "#FFD700" },
  { icon: "Wind", label: "Воздушный фильтр", note: "по сезону", color: "#A78BFA" },
  { icon: "RotateCcw", label: "Сезонная смена шин", note: "напомним в нужный момент", color: "#FC3F1D" },
  { icon: "Fuel", label: "Расход топлива", note: "покажем отклонения от нормы", color: "#4F9EFF" },
  { icon: "AlertTriangle", label: "Ошибки двигателя", note: "расшифруем Check Engine", color: "#FFD700" },
  { icon: "Activity", label: "Стиль вождения", note: "советы для продления ресурса", color: "#A78BFA" },
  { icon: "ShieldCheck", label: "Общее здоровье авто", note: "сводный балл состояния", color: "#FC3F1D" },
];

const RATING_RULES = [
  "Приезд мастера точно в срок по SLA",
  "Фото и видеофиксация выполненных работ",
  "Подтверждение замены оригинальных запчастей",
  "Отсутствие жалоб и возвратов в течение 30 дней",
  "Соответствие прайса платформы — без скрытых доплат",
];

const PUSH_EXAMPLES = [
  {
    icon: "Zap", color: "#FFD700",
    title: "Аккумулятор начинает сдавать",
    body: "Напряжение АКБ ниже нормы. При морозе ниже -10°C авто может не завестись. Лучше проверить заранее.",
    action: "Записаться на диагностику АКБ",
    actionColor: "#FFD700",
  },
  {
    icon: "Droplets", color: "#4F9EFF",
    title: "До замены масла — 98 км",
    body: "Toyota Camry, пробег 87 340 км. Плановая замена совсем скоро — поможем записаться в проверенный сервис.",
    action: "Выбрать автосервис рядом",
    actionColor: "#4F9EFF",
  },
];

export default function LichniyMechanik() {
  const { ref, inView } = useInView();

  return (
    <section id="lichniy-mechanik" className="ya-section" style={{ background: 'var(--ya-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Продукт · Личный механик</SectionLabel>
          <SectionTitle>Авто под заботой,<br />не под контролем</SectionTitle>
          <SectionSubtitle>
            Мы не следим — мы заботимся. Система сама замечает, когда что-то идёт не так, и предупреждает вас заранее. Вы просто едете — мы держим руку на пульсе вашего авто.
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

        {/* О чём мы позаботимся */}
        <div className={`mb-12 ${inView ? 'ya-anim-up delay-500' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-2">О чём мы позаботимся</h3>
          <p className="text-sm mb-5" style={{ color: 'var(--ya-text-secondary)' }}>
            Всё, что раньше нужно было помнить самому — теперь помним мы.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {CARE_ITEMS.map((item) => (
              <div key={item.label} className="ya-card p-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${item.color}15` }}>
                  <Icon name={item.icon} size={16} style={{ color: item.color }} />
                </div>
                <div className="font-medium text-white text-sm mb-1">{item.label}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-muted)', lineHeight: 1.5 }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Примеры подсказок + рейтинг */}
        <div className={`grid md:grid-cols-2 gap-4 ${inView ? 'ya-anim-up delay-700' : 'opacity-0'}`}>

          {/* Примеры уведомлений */}
          <div className="ya-card p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(167,139,250,0.12)' }}>
                <Icon name="Smartphone" size={18} style={{ color: '#A78BFA' }} />
              </div>
              <div>
                <div className="font-bold text-white">Примеры заботливых подсказок</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>Что увидит пользователь в приложении</div>
              </div>
            </div>
            <div className="space-y-3">
              {PUSH_EXAMPLES.map((p) => (
                <div key={p.title} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}18` }}>
                      <Icon name={p.icon} size={16} style={{ color: p.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white mb-1">{p.title}</div>
                      <div className="text-xs mb-3" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>{p.body}</div>
                      <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full" style={{ background: `${p.actionColor}18`, color: p.actionColor }}>
                        {p.action} →
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs p-3 rounded-xl" style={{ background: 'rgba(76,175,80,0.08)', border: '1px solid rgba(76,175,80,0.15)', color: '#4CAF50' }}>
              Запись к мастеру — прямо из уведомления, без звонков
            </div>
          </div>

          {/* Рейтинг доверия */}
          <div className="ya-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(252,63,29,0.12)' }}>
                <Icon name="ShieldCheck" size={18} style={{ color: '#FC3F1D' }} />
              </div>
              <div>
                <div className="font-bold text-white">Рейтинг доверия сервисов</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>Только реальные критерии — без накруток</div>
              </div>
            </div>
            <p className="text-sm mb-5" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
              Мы рекомендуем только те автосервисы, которые соответствуют стандартам платформы. Рейтинг формируется по объективным критериям — накрутить его невозможно.
            </p>
            <div className="space-y-2 mb-6">
              {RATING_RULES.map((rule) => (
                <div key={rule} className="flex items-start gap-2">
                  <Icon name="CheckCircle2" size={14} style={{ color: '#4CAF50', marginTop: 2, flexShrink: 0 }} />
                  <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{rule}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-2xl" style={{ background: 'rgba(255,215,0,0.05)', border: '1px solid rgba(255,215,0,0.12)' }}>
              <div className="text-xs font-semibold mb-1" style={{ color: '#FFD700' }}>Блок OBD — необязательно, но выгодно</div>
              <p className="text-xs" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>
                Без устройства система работает по вашим данным о ТО. С блоком OBD — добавляется автоматический мониторинг в реальном времени и проактивные подсказки по состоянию авто.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
