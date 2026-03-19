import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, ScrollReveal } from "./shared";

const HOW_STEPS = [
  { num: "01", icon: "PlusCircle", color: "#4F9EFF",
    title: "Заводите карточку авто",
    desc: "Марка, модель, год, пробег. Вносите данные о последнем ТО: масло, колодки, ремень ГРМ, шины — всё в одном месте." },
  { num: "02", icon: "Cpu", color: "#FFD700",
    title: "Подключаете блок OBD",
    desc: "Небольшое устройство в разъём — и авто начинает «рассказывать» о себе само. Пробег, нагрузки, состояние систем. Вы просто едете." },
  { num: "03", icon: "Bell", color: "#A78BFA",
    title: "Получаете заботливые подсказки",
    desc: "За 100–500 км до замены масла, при первых признаках слабого аккумулятора, при нестандартной температуре двигателя — мы скажем первыми." },
  { num: "04", icon: "MapPin", color: "#FC3F1D",
    title: "Записываемся вместе",
    desc: "Платформа предложит проверенный автосервис — тот, что вы уже посещали, или ближайший с высоким рейтингом. Запись прямо из уведомления." },
];

const CARE_ITEMS = [
  { icon: "Droplets",     label: "Масло двигателя",       note: "напомним до истечения ресурса", color: "#4F9EFF"  },
  { icon: "Zap",          label: "Аккумулятор",           note: "заметим слабость раньше вас",    color: "#FFD700"  },
  { icon: "Thermometer",  label: "Температура мотора",    note: "предупредим о перегреве",         color: "#FC3F1D"  },
  { icon: "Gauge",        label: "Давление в шинах",      note: "следим автоматически",            color: "#A78BFA"  },
  { icon: "Circle",       label: "Тормозные колодки",     note: "по пробегу и нагрузке",          color: "#4F9EFF"  },
  { icon: "Settings",     label: "Ремень ГРМ",            note: "по пробегу и годам",             color: "#FFD700"  },
  { icon: "Wind",         label: "Воздушный фильтр",      note: "по сезону",                      color: "#A78BFA"  },
  { icon: "RotateCcw",    label: "Сезонная смена шин",    note: "напомним в нужный момент",       color: "#FC3F1D"  },
  { icon: "Fuel",         label: "Расход топлива",        note: "покажем отклонения от нормы",    color: "#4F9EFF"  },
  { icon: "AlertTriangle",label: "Ошибки двигателя",      note: "расшифруем Check Engine",         color: "#FFD700"  },
  { icon: "Activity",     label: "Стиль вождения",        note: "советы для продления ресурса",   color: "#A78BFA"  },
  { icon: "ShieldCheck",  label: "Здоровье авто",         note: "сводный балл состояния",          color: "#FC3F1D"  },
];

const RATING_RULES = [
  "Приезд мастера точно в срок по SLA",
  "Фото и видеофиксация выполненных работ",
  "Подтверждение замены оригинальных запчастей",
  "Отсутствие жалоб и возвратов в течение 30 дней",
  "Соответствие прайса платформы — без скрытых доплат",
];

const PUSH_EXAMPLES = [
  { icon: "Zap", color: "#FFD700",
    title: "Аккумулятор начинает сдавать",
    body: "Напряжение АКБ ниже нормы. При морозе ниже -10°C авто может не завестись. Лучше проверить заранее.",
    action: "Записаться на диагностику АКБ" },
  { icon: "Droplets", color: "#4F9EFF",
    title: "До замены масла — 98 км",
    body: "Toyota Camry, пробег 87 340 км. Плановая замена совсем скоро — поможем записаться в проверенный сервис.",
    action: "Выбрать автосервис рядом" },
];

export default function LichniyMechanik() {
  return (
    <section id="lichniy-mechanik" className="m-section" style={{ background: 'var(--m-black)' }}>
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <SectionLabel>Продукт · Личный механик</SectionLabel>
          <SectionTitle>Авто под заботой,<br /><span style={{ color: 'var(--m-yellow)' }}>не под контролем</span></SectionTitle>
          <SectionSubtitle>
            Мы не следим — мы заботимся. Система замечает, когда что-то идёт не так, и предупреждает заранее. Вы просто едете — мы держим руку на пульсе вашего авто.
          </SectionSubtitle>
        </ScrollReveal>

        {/* Как работает */}
        <div className="mt-14 mb-14">
          <ScrollReveal>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Как это работает</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-4">
            {HOW_STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="m-card p-5 h-full">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mb-3" style={{ background: step.color, color: '#000' }}>{step.num}</div>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4" style={{ background: `${step.color}15` }}>
                    <Icon name={step.icon} size={16} style={{ color: step.color }} />
                  </div>
                  <div className="font-black text-white text-sm uppercase tracking-tight mb-2">{step.title}</div>
                  <div className="text-xs" style={{ color: 'var(--m-text2)', lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* О чём позаботимся */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">О чём мы позаботимся</h3>
          <p className="text-sm mb-6" style={{ color: 'var(--m-text2)' }}>Всё, что раньше нужно было помнить самому — теперь помним мы.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {CARE_ITEMS.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 50}>
                <div className="m-card p-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${item.color}15` }}>
                    <Icon name={item.icon} size={16} style={{ color: item.color }} />
                  </div>
                  <div className="font-black text-white text-sm uppercase tracking-tight mb-1">{item.label}</div>
                  <div className="text-xs" style={{ color: 'var(--m-text3)', lineHeight: 1.5 }}>{item.note}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Уведомления + рейтинг */}
        <div className="grid md:grid-cols-2 gap-6">

          <ScrollReveal>
            <div className="m-card p-6 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(167,139,250,0.12)' }}>
                  <Icon name="Smartphone" size={18} style={{ color: '#A78BFA' }} />
                </div>
                <div>
                  <div className="font-black text-white">Заботливые подсказки</div>
                  <div className="text-xs" style={{ color: 'var(--m-text3)' }}>Что увидит пользователь в приложении</div>
                </div>
              </div>
              <div className="space-y-3">
                {PUSH_EXAMPLES.map((p) => (
                  <div key={p.title} className="rounded-2xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${p.color}15` }}>
                        <Icon name={p.icon} size={16} style={{ color: p.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-black text-white uppercase tracking-tight mb-1">{p.title}</div>
                        <div className="text-xs mb-3" style={{ color: 'var(--m-text2)', lineHeight: 1.6 }}>{p.body}</div>
                        <div className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full" style={{ background: `${p.color}15`, color: p.color }}>
                          {p.action} →
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs p-3 rounded-xl font-bold" style={{ background: 'rgba(0,230,118,0.07)', border: '1px solid rgba(0,230,118,0.12)', color: '#00E676' }}>
                Запись к мастеру — прямо из уведомления, без звонков
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="m-card p-6 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(252,63,29,0.12)' }}>
                  <Icon name="ShieldCheck" size={18} style={{ color: '#FC3F1D' }} />
                </div>
                <div>
                  <div className="font-black text-white">Рейтинг доверия сервисов</div>
                  <div className="text-xs" style={{ color: 'var(--m-text3)' }}>Только реальные критерии — без накруток</div>
                </div>
              </div>
              <p className="text-sm mb-5" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                Рейтинг автосервиса формируется не отзывами, а выполнением стандартов платформы. Накрутить его невозможно.
              </p>
              <div className="space-y-2.5 mb-6">
                {RATING_RULES.map((rule) => (
                  <div key={rule} className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={14} style={{ color: '#4CAF50', marginTop: 2, flexShrink: 0 }} />
                    <span className="text-xs" style={{ color: 'var(--m-text2)' }}>{rule}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-2xl" style={{ background: 'rgba(255,204,0,0.05)', border: '1px solid rgba(255,204,0,0.1)' }}>
                <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: 'var(--m-yellow)' }}>Блок OBD — необязательно, но выгодно</div>
                <p className="text-xs" style={{ color: 'var(--m-text2)', lineHeight: 1.6 }}>
                  Без устройства система работает по вашим данным о ТО. С блоком OBD — добавляется автоматический мониторинг в реальном времени и проактивные подсказки.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
