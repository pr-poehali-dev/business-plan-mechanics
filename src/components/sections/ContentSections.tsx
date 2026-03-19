import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

// ─── ОПЕРАЦИОННАЯ МОДЕЛЬ ───────────────────────────────────────────────────────

const FLEET = [
  {
    icon: "Car",
    title: "Лёгкая мобильная бригада",
    desc: "1 мастер + универсальный фургон. Замена колеса, запуск двигателя, подвоз топлива, вскрытие авто. SLA в городе — 30 минут.",
    specs: ["Развёртывание: 3 мин", "Лебёдка 4 500 lbs", "SLA: 30 мин (город)"],
    color: "#4F9EFF",
  },
  {
    icon: "Truck",
    title: "Средний эвакуатор",
    desc: "Платформа + частичная погрузка. Легковые и лёгкие коммерческие авто, снежные заносы. Зимняя комплектация для работы в сложных условиях.",
    specs: ["До 5 тонн", "Лебёдка 12 000 lbs", "Цепи противоскольжения", "Пескоразбрасыватель*"],
    color: "#FFD700",
  },
  {
    icon: "Construction",
    title: "Тяжёлый эвакуатор",
    desc: "Для грузовиков и спецтехники до 60 тонн. Промышленная лебёдка, динамические стропы, работа на крутых обледенелых подъёмах. SLA на трассе — 60 минут.",
    specs: ["До 60 тонн", "Лебёдка 50 000 lbs", "Динамические стропы", "SLA: 60 мин (трасса)"],
    color: "#FC3F1D",
  },
  {
    icon: "Zap",
    title: "Электро-юнит",
    desc: "Мобильная зарядная станция для EV. Буксир до ближайшей зарядки, диагностика высоковольтной батареи, поддержка всех стандартов.",
    specs: ["DC Fast Charge 50 кВт", "Запас хода 200 км", "CCS / CHAdeMO / Type 2"],
    color: "#A78BFA",
  },
];

const SERVICES_LIST = [
  { icon: "RotateCcw", label: "Замена колеса", note: "во всех тарифах" },
  { icon: "Battery", label: "Запуск в мороз", note: "до -40°C" },
  { icon: "Fuel", label: "Подвоз топлива", note: "до 10 л на место" },
  { icon: "ArrowUpFromLine", label: "Вытягивание из кювета", note: "лебёдка + стропы" },
  { icon: "Key", label: "Вскрытие авто", note: "без повреждений" },
  { icon: "Truck", label: "Эвакуация до 100 км", note: "1×/год бесплатно (тариф Базовый)" },
  { icon: "Mountain", label: "Эвакуация с обледеневших дорог", note: "зима, тяжёлая техника" },
  { icon: "Wrench", label: "Базовая диагностика", note: "OBD-II + телематика" },
];

const ALGO_STEPS = [
  {
    num: "01", icon: "Cpu", color: "#4F9EFF",
    title: "Телематика фиксирует аномалию",
    desc: "Телематический блок, установленный в автомобиле клиента, регистрирует снижение давления в шинах, падение заряда АКБ или ошибку двигателя. Устройство подключается к разъёму OBD-II и передаёт данные в платформу.",
  },
  {
    num: "02", icon: "MapPin", color: "#FFD700",
    title: "Навигатор анализирует маршрут",
    desc: "До ближайшего СТО 40 км, за бортом -18°C, горная дорога. Вероятность инцидента — 73%.",
  },
  {
    num: "03", icon: "Bell", color: "#A78BFA",
    title: "Проактивное предложение",
    desc: "Пуш до инцидента: «Замечено падение давления. Выслать мастера?» — водитель ещё не знает о проблеме.",
  },
  {
    num: "04", icon: "Navigation", color: "#FC3F1D",
    title: "Бригада уже едет",
    desc: "Ближайший мастер получает задание автоматически. Экипаж виден на карте Навигатора в реальном времени.",
  },
];

function OperationsSection() {
  const { ref, inView } = useInView();
  return (
    <section id="operations" className="ya-section" style={{ background: 'var(--ya-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Раздел 1 · Операции</SectionLabel>
          <SectionTitle>Парк техники<br />и операционная модель</SectionTitle>
          <SectionSubtitle>
            От лёгкой мобильной бригады до тяжёлых эвакуаторов на 60 тонн — полное покрытие всех сценариев помощи на дороге.
          </SectionSubtitle>
        </div>

        <div className="grid md:grid-cols-2 gap-3 mb-12">
          {FLEET.map((f, i) => (
            <div key={f.title} className={`ya-card p-6 ${inView ? `ya-anim-up delay-${(i + 1) * 150}` : 'opacity-0'}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${f.color}18` }}>
                  <Icon name={f.icon} size={22} style={{ color: f.color }} />
                </div>
                <div>
                  <div className="font-bold text-white">{f.title}</div>
                  <div className="text-sm mt-1" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid var(--ya-border)' }}>
                {f.specs.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: `${f.color}12`, color: f.color }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Специализированное оборудование */}
        <div className={`mb-12 ${inView ? 'ya-anim-up delay-550' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Специализированное оборудование</h3>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              {
                icon: "Waves", color: "#4F9EFF", title: "Динамические стропы",
                desc: "Амортизируют рывок при вытягивании застрявшей техники — снижают ударную нагрузку на 60%. Работают при -50°C, нагрузка до 60 тонн. Незаменимы при внедорожной эвакуации.",
                badge: "Все классы",
              },
              {
                icon: "Layers", color: "#FC3F1D", title: "Пескоразбрасыватели",
                desc: "Монтируются на фургоны и средние эвакуаторы. Создают сцепление для застрявшего ТС и обеспечивают безопасность работы экипажа на скользком покрытии. *Применение согласовывается с местной администрацией — в ряде районов использование ограничено.",
                badge: "Зимний сезон",
              },
            ].map((eq) => (
              <div key={eq.title} className="ya-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${eq.color}18` }}>
                    <Icon name={eq.icon} size={16} style={{ color: eq.color }} />
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: `${eq.color}18`, color: eq.color }}>{eq.badge}</span>
                </div>
                <div className="font-bold text-white mb-2">{eq.title}</div>
                <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Телематический блок */}
        <div className={`mb-12 ${inView ? 'ya-anim-up delay-580' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Телематический блок</h3>
          <div className="ya-card p-6" style={{ border: '1px solid rgba(79,158,255,0.25)' }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(79,158,255,0.12)' }}>
                    <Icon name="Cpu" size={18} style={{ color: '#4F9EFF' }} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Устройство OBD-II</div>
                    <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>Приобретается клиентом при подключении</div>
                  </div>
                </div>
                <p className="text-sm mb-5" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
                  Небольшой блок вставляется в стандартный разъём OBD-II — он есть в каждом автомобиле с 2004 года. Установка занимает одну минуту. Устройство в реальном времени отправляет данные о состоянии авто в платформу: давление в шинах, заряд АКБ, ошибки двигателя, пробег и стиль вождения.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Plug & Play за 1 мин", "Работает без зарядки", "4G + GPS трекинг", "Совместимо со всеми авто"].map((f) => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(79,158,255,0.1)', color: '#4F9EFF' }}>{f}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,215,0,0.12)' }}>
                    <Icon name="Gift" size={18} style={{ color: '#FFD700' }} />
                  </div>
                  <div>
                    <div className="font-bold text-white">Бонус за подключение</div>
                    <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>Нам нужны ваши данные — мы платим за это</div>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
                  Анонимные данные пробегов, инцидентов и состояния авто формируют базу <strong className="text-white">«Прозрачное авто»</strong> — сервис проверки истории автомобиля при покупке. Клиент, подключивший блок, получает за это ощутимый бонус.
                </p>
                <div className="space-y-2">
                  {[
                    { icon: "Tag", text: "Скидка ₽500 на первый месяц подписки" },
                    { icon: "FileSearch", text: "Бесплатный отчёт «Прозрачное авто» на своё авто" },
                    { icon: "ShieldCheck", text: "Повышенный кешбэк при вызове мастера" },
                  ].map((b) => (
                    <div key={b.text} className="flex items-start gap-2">
                      <Icon name={b.icon} size={14} style={{ color: '#FFD700', marginTop: 2, flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mb-12 ${inView ? 'ya-anim-up delay-600' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-5">Перечень услуг</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {SERVICES_LIST.map((s) => (
              <div key={s.label} className="ya-card p-4">
                <div className="ya-icon-circle mb-3" style={{ width: 36, height: 36, borderRadius: 10 }}>
                  <Icon name={s.icon} size={16} />
                </div>
                <div className="font-medium text-white text-sm mb-1">{s.label}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-muted)' }}>{s.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={`${inView ? 'ya-anim-up delay-700' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-2">Предиктивная диагностика</h3>
          <p className="text-sm mb-6" style={{ color: 'var(--ya-text-secondary)' }}>
            Помощь предлагается <strong className="text-white">до того, как водитель нажал кнопку</strong> — за счёт телематики автомобиля и данных навигационного сервиса.
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            {ALGO_STEPS.map((step, i) => (
              <div key={step.num} className={`ya-card p-5 ${inView ? `ya-anim-up delay-${(i + 1) * 100 + 600}` : 'opacity-0'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: step.color, color: '#000' }}>{step.num}</div>
                </div>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${step.color}18` }}>
                  <Icon name={step.icon} size={16} style={{ color: step.color }} />
                </div>
                <div className="font-semibold text-white text-sm mb-2">{step.title}</div>
                <div className="text-xs" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── МАРКЕТИНГ ─────────────────────────────────────────────────────────────────

const MARKETING_CHANNELS = [
  {
    icon: "MessageCircle", tag: "Сарафанное радио", color: "#4F9EFF",
    title: "Сообщества дальнобойщиков во ВКонтакте и Макс",
    desc: "Сотни активных групп с аудиторией миллионы водителей-профессионалов. Живые отзывы коллег — главный фактор доверия в B2B.",
    actions: ["Разборы реальных случаев от первого лица", "Партнёрство с лидерами мнений (50K+ подп.)", "Посты на Trans.ru, Logist.ru, АвтоФорум"],
  },
  {
    icon: "Gift", tag: "Реферальная программа", color: "#FFD700",
    title: "Диспетчеры и менеджеры автопарков",
    desc: "Ключевые ЛПР в B2B — диспетчеры и логисты. Реферальная схема: ₽3 000 за каждый подключённый парк от 10 ТС.",
    actions: ["Бонус диспетчеру ₽3 000 за парк 10+ авто", "Надбавка за пролонгацию контракта", "Приоритетная поддержка для партнёров"],
  },
  {
    icon: "FileText", tag: "Контент-маркетинг", color: "#A78BFA",
    title: "Собственный блог и отраслевые медиа",
    desc: "Экспертный контент укрепляет доверие. Тематика: безопасность зимой, техника, экстремальные ситуации на дороге.",
    actions: ["«Как выехать из заноса» — SEO-статьи", "Видео: лебёдка 50 000 lbs в деле", "Инфографика: зимний уход за авто"],
  },
  {
    icon: "Star", tag: "Экосистема партнёров", color: "#FC3F1D",
    title: "Нативная интеграция в партнёрские сервисы",
    desc: "Интеграция с навигационными и страховыми сервисами — готовый канал с нулевым CAC. Баннер в навигаторе в момент нужды.",
    actions: ["Баннер при температуре < -10°C в навигаторе", "Кешбэк баллами в партнёрских программах", "Специальный оффер при оформлении КАСКО / ОСАГО"],
  },
];

function MarketingSection() {
  const { ref, inView } = useInView();
  return (
    <section id="marketing" className="ya-section" style={{ background: 'var(--ya-black)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Раздел 3 · Маркетинг</SectionLabel>
          <SectionTitle>Стратегия продвижения</SectionTitle>
          <SectionSubtitle>
            Четыре канала роста — от сарафанного радио в профессиональных сообществах до нативной интеграции в партнёрские сервисы.
          </SectionSubtitle>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {MARKETING_CHANNELS.map((ch, i) => (
            <div key={ch.title} className={`ya-card p-6 ${inView ? `ya-anim-up delay-${(i + 1) * 150}` : 'opacity-0'}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${ch.color}18` }}>
                  <Icon name={ch.icon} size={18} style={{ color: ch.color }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: ch.color, letterSpacing: '0.05em' }}>{ch.tag.toUpperCase()}</span>
              </div>
              <div className="font-bold text-white mb-2">{ch.title}</div>
              <p className="text-sm mb-4" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>{ch.desc}</p>
              <div className="space-y-2 pt-4" style={{ borderTop: '1px solid var(--ya-border)' }}>
                {ch.actions.map((a) => (
                  <div key={a} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: ch.color }} />
                    <span className="text-xs" style={{ color: 'var(--ya-text-secondary)' }}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── РИСКИ ─────────────────────────────────────────────────────────────────────

const RISKS = [
  {
    icon: "UserX", title: "Нехватка квалифицированных кадров",
    severity: "Высокий", severityColor: "#FC3F1D",
    desc: "Операторы спецтехники — дефицитная профессия. Высокая текучка в сезон.",
    mitigation: [
      "Собственная учебная программа совместно с автошколами",
      "Сертификат «Яндекс Механик» — преимущество на рынке труда",
      "Gamification и рейтинги мастеров с финансовым бонусом",
      "Партнёрство с военными водителями-механиками в запасе",
    ],
  },
  {
    icon: "DollarSign", title: "Высокие CAPEX на спецтехнику",
    severity: "Высокий", severityColor: "#FC3F1D",
    desc: "Тяжёлый эвакуатор — 8–15 млн руб. Масштабирование требует значительных вложений в парк.",
    mitigation: [
      "Asset-light старт: год 1 — аренда и субподряд с партнёрами",
      "Собственный парк только для лёгких бригад",
      "Лизинговые программы при поддержке Яндекс Банка",
      "Покупка техники только при достижении точки безубыточности",
    ],
  },
  {
    icon: "Building2", title: "Конкуренция с РАМК и дилерами",
    severity: "Средний", severityColor: "#FFD700",
    desc: "РАМК, дилерские программы страховщиков и агрегаторы «Авто SOS» уже занимают рынок.",
    mitigation: [
      "УТП — предиктивность: конкуренты реагируют, мы предупреждаем",
      "Интеграция с Навигатором недоступна конкурентам без Яндекса",
      "Специализация на тяжёлой технике — ниша с низкой конкуренцией",
      "Цена ниже конкурентов на 30–40% за счёт аддона к Плюс",
    ],
  },
  {
    icon: "Cloud", title: "Сезонность вызовов",
    severity: "Средний", severityColor: "#FFD700",
    desc: "Пик — ноябрь–март. Летом загрузка падает на 60%. Постоянные издержки давят на маржу.",
    mitigation: [
      "Подписочная модель сглаживает сезонность: выручка стабильна",
      "Летний оффсезон: плановое ТО и диагностика (новый продукт)",
      "Гибкий штат: фиксированное ядро + фрилансеры в пик",
    ],
  },
];

function RisksSection() {
  const { ref, inView } = useInView();
  return (
    <section id="risks" className="ya-section" style={{ background: 'var(--ya-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Раздел 4 · Риски</SectionLabel>
          <SectionTitle>Анализ рисков<br />и митигация</SectionTitle>
          <SectionSubtitle>Честный взгляд на ключевые угрозы и конкретные меры их снижения.</SectionSubtitle>
        </div>
        <div className="space-y-3">
          {RISKS.map((r, i) => (
            <div key={r.title} className={`ya-card p-6 ${inView ? `ya-anim-up delay-${(i + 1) * 150}` : 'opacity-0'}`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-72 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${r.severityColor}18` }}>
                      <Icon name={r.icon} size={18} style={{ color: r.severityColor }} />
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{ background: `${r.severityColor}18`, color: r.severityColor }}>{r.severity} риск</span>
                  </div>
                  <div className="font-bold text-white mb-2">{r.title}</div>
                  <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>{r.desc}</p>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold mb-3" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>МЕРЫ МИТИГАЦИИ</div>
                  <div className="space-y-2">
                    {r.mitigation.map((m) => (
                      <div key={m} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={14} style={{ color: '#4CAF50', marginTop: 2, flexShrink: 0 }} />
                        <span className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContentSections() {
  return (
    <>
      <OperationsSection />
      <MarketingSection />
      <RisksSection />
    </>
  );
}