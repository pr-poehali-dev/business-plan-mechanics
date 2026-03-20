import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, ScrollReveal } from "./shared";

// ─── ОПЕРАЦИОННАЯ МОДЕЛЬ ────────────────────────────────────────────────────────

const FLEET = [
  { icon: "Car",          title: "Лёгкая мобильная бригада", color: "#4F9EFF",
    desc: "Один мастер плюс универсальный фургон. Замена колеса, запуск двигателя, подвоз топлива, вскрытие авто. Время прибытия в городе — до 30 минут.",
    specs: ["Развёртывание: 3 минуты", "Лебёдка 2 тонны", "Прибытие в городе: 30 минут"] },
  { icon: "Truck",        title: "Средний эвакуатор",        color: "#FFD700",
    desc: "Платформа плюс частичная погрузка. Легковые и лёгкие коммерческие автомобили, работа при снежных заносах. Полная зимняя комплектация.",
    specs: ["До 5 тонн", "Лебёдка 5,5 тонны", "Цепи противоскольжения", "Пескоразбрасыватель*"] },
  { icon: "Construction", title: "Тяжёлый эвакуатор",        color: "#FC3F1D",
    desc: "Для грузовиков и спецтехники до 60 тонн. Промышленная лебёдка, динамические стропы, работа на крутых обледенелых подъёмах. Время прибытия на трассе — до 60 минут.",
    specs: ["До 60 тонн", "Лебёдка 22 тонны", "Динамические стропы", "Прибытие на трассе: 60 минут"] },
  { icon: "Zap",          title: "Мобильная зарядная станция", color: "#A78BFA",
    desc: "Для электромобилей. Буксир до ближайшей зарядки, диагностика высоковольтной батареи, поддержка всех стандартов зарядных разъёмов.",
    specs: ["Быстрая зарядка 50 кВт", "Запас хода 200 км", "CCS / CHAdeMO / Type 2"] },
];

const SERVICES_LIST = [
  { icon: "RotateCcw",      label: "Замена колеса",                note: "во всех тарифах" },
  { icon: "Battery",        label: "Запуск в мороз",               note: "до -40°C" },
  { icon: "Fuel",           label: "Подвоз топлива",               note: "до 10 л на место" },
  { icon: "ArrowUpFromLine",label: "Вытягивание из кювета",        note: "лебёдка + стропы" },
  { icon: "Key",            label: "Вскрытие авто",                note: "без повреждений" },
  { icon: "Truck",          label: "Эвакуация до 100 км",          note: "1×/год бесплатно (тариф Базовый)" },
  { icon: "Mountain",       label: "Эвакуация с обледеневших дорог",note: "зима, тяжёлая техника" },
  { icon: "Wrench",         label: "Базовая диагностика",          note: "OBD-II + телематика" },
];

const ALGO_STEPS = [
  { num: "01", icon: "Cpu",        color: "#4F9EFF",
    title: "Телематика фиксирует аномалию",
    desc: "Телематический блок в автомобиле клиента регистрирует снижение давления в шинах, падение заряда АКБ или ошибку двигателя. Устройство подключается к OBD-II и передаёт данные в платформу." },
  { num: "02", icon: "MapPin",     color: "#FFD700",
    title: "Навигатор анализирует маршрут",
    desc: "До ближайшего СТО 40 км, за бортом -18°C, горная дорога. Вероятность инцидента — 73%." },
  { num: "03", icon: "Bell",       color: "#A78BFA",
    title: "Проактивное предложение",
    desc: "Пуш до инцидента: «Замечено падение давления. Выслать мастера?» — водитель ещё не знает о проблеме." },
  { num: "04", icon: "Navigation", color: "#FC3F1D",
    title: "Бригада уже едет",
    desc: "Ближайший свободный мастер получает задание автоматически. Экипаж виден на карте в реальном времени." },
];

// ─── СЦЕНАРИИ ИСПОЛЬЗОВАНИЯ ────────────────────────────────────────────────────

const CASES = [
  { title: "Критический уклон", color: "#FFD700",
    problem: "Грузовик заблокирован на подъёме 12% при гололеде — перекрыто движение.",
    solution: "Платформа определила ближайший юнит за 0.4 сек. Бригада прибыла с цепями противоскольжения через 9 минут.",
    result: "Трафик восстановлен менее чем за 15 минут" },
  { title: "Пиковые нагрузки", color: "#4F9EFF",
    problem: "Рост аварийности на трассе М-4 в период отпусков — очереди из застрявших авто.",
    solution: "Предиктивный алгоритм развернул 3 мобильных поста в «узких местах» заранее — до первого инцидента.",
    result: "Аварийность снижена на 28% в пиковые выходные" },
];

function OperationsSection() {
  return (
    <section id="operations" className="m-section" style={{ background: 'var(--m-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">

        <ScrollReveal>
          <SectionLabel>Раздел 1 · Операции</SectionLabel>
          <SectionTitle>Парк техники<br /><span style={{ color: 'var(--m-yellow)' }}>и операционная модель</span></SectionTitle>
          <SectionSubtitle>
            От лёгкой мобильной бригады до тяжёлых эвакуаторов на 60 тонн — полное покрытие всех сценариев помощи на дороге.
          </SectionSubtitle>
        </ScrollReveal>

        {/* Парк */}
        <div className="grid md:grid-cols-2 gap-4 mt-14 mb-14">
          {FLEET.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 100}>
              <div className="m-card p-6 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${f.color}15` }}>
                    <Icon name={f.icon} size={22} style={{ color: f.color }} />
                  </div>
                  <div>
                    <div className="font-black text-white uppercase tracking-tight">{f.title}</div>
                    <div className="text-sm mt-1" style={{ color: 'var(--m-text2)', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {f.specs.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: `${f.color}12`, color: f.color }}>{s}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Спецоборудование */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Специализированное оборудование</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-14">
            {[
              { icon: "Waves", color: "#4F9EFF", title: "Динамические стропы", badge: "Все классы",
                desc: "Амортизируют рывок при вытягивании застрявшей техники — снижают ударную нагрузку на 60%. Работают при -50°C, нагрузка до 60 тонн." },
              { icon: "Layers", color: "#FC3F1D", title: "Пескоразбрасыватели", badge: "Зимний сезон",
                desc: "Монтируются на фургоны и средние эвакуаторы. *Применение согласовывается с местной администрацией — в ряде районов использование ограничено." },
            ].map((eq, i) => (
              <ScrollReveal key={eq.title} delay={i * 100}>
                <div className="m-card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${eq.color}15` }}>
                      <Icon name={eq.icon} size={17} style={{ color: eq.color }} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full" style={{ background: `${eq.color}15`, color: eq.color }}>{eq.badge}</span>
                  </div>
                  <div className="font-black text-white uppercase tracking-tight mb-2">{eq.title}</div>
                  <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>{eq.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Телематический блок */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Телематический блок</h3>
          <div className="m-card p-6 mb-14" style={{ border: '1px solid rgba(79,158,255,0.2)' }}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(79,158,255,0.12)' }}>
                    <Icon name="Cpu" size={18} style={{ color: '#4F9EFF' }} />
                  </div>
                  <div>
                    <div className="font-black text-white">Устройство OBD-II</div>
                    <div className="text-xs" style={{ color: 'var(--m-text3)' }}>Приобретается клиентом при подключении</div>
                  </div>
                </div>
                <p className="text-sm mb-5" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                  Небольшой блок вставляется в стандартный разъём OBD-II — он есть в каждом автомобиле с 2004 года. Установка занимает одну минуту. Передаёт данные о состоянии авто в платформу в реальном времени.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Plug & Play за 1 мин", "Работает без зарядки", "4G + GPS", "Совместимо со всеми авто"].map((f) => (
                    <span key={f} className="text-xs px-3 py-1 rounded-full font-bold" style={{ background: 'rgba(79,158,255,0.1)', color: '#4F9EFF' }}>{f}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,204,0,0.12)' }}>
                    <Icon name="Gift" size={18} style={{ color: '#FFD700' }} />
                  </div>
                  <div>
                    <div className="font-black text-white">Бонус за подключение</div>
                    <div className="text-xs" style={{ color: 'var(--m-text3)' }}>Мы платим за данные, которые улучшают сервис</div>
                  </div>
                </div>
                <p className="text-sm mb-5" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                  Анонимные данные пробегов и состояния авто улучшают алгоритмы платформы. Клиент, подключивший блок, получает за это ощутимый бонус.
                </p>
                <div className="space-y-2">
                  {["Скидка ₽500 на первый месяц подписки", "Бесплатный отчёт о состоянии своего авто", "Повышенный кешбэк при вызове мастера"].map((b) => (
                    <div key={b} className="flex items-start gap-2">
                      <Icon name="Check" size={13} style={{ color: '#FFD700', marginTop: 3, flexShrink: 0 }} />
                      <span className="text-sm" style={{ color: 'var(--m-text2)' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Перечень услуг */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Перечень услуг</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {SERVICES_LIST.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 60}>
                <div className="m-card p-4">
                  <div className="m-icon-box mb-3" style={{ width: 38, height: 38, borderRadius: 12 }}>
                    <Icon name={s.icon} size={16} />
                  </div>
                  <div className="font-black text-white text-sm uppercase tracking-tight mb-1">{s.label}</div>
                  <div className="text-xs" style={{ color: 'var(--m-text3)' }}>{s.note}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Сценарии применения */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Сценарии применения</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {CASES.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 150}>
                <div className="m-card p-8 h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ background: `${c.color}15` }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-5">{c.title}</h3>
                  <div className="space-y-4 mb-8">
                    <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                      <span className="font-black" style={{ color: 'var(--m-text2)' }}>Проблема: </span>{c.problem}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>
                      <span className="font-black" style={{ color: c.color }}>Решение: </span>{c.solution}
                    </p>
                  </div>
                  <div className="pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: c.color }}>Результат: {c.result}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* Предиктивная диагностика */}
        <ScrollReveal>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">Предиктивная диагностика</h3>
          <p className="text-sm mb-8" style={{ color: 'var(--m-text2)' }}>
            Помощь предлагается <strong className="text-white">до того, как водитель нажал кнопку</strong> — за счёт телематики и навигационных данных.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {ALGO_STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="m-card p-5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black mb-3" style={{ background: step.color, color: '#000' }}>{step.num}</div>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${step.color}15` }}>
                    <Icon name={step.icon} size={16} style={{ color: step.color }} />
                  </div>
                  <div className="font-black text-white text-sm uppercase tracking-tight mb-2">{step.title}</div>
                  <div className="text-xs" style={{ color: 'var(--m-text2)', lineHeight: 1.6 }}>{step.desc}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

// ─── МАРКЕТИНГ ─────────────────────────────────────────────────────────────────

const MARKETING_CHANNELS = [
  { icon: "MessageCircle", tag: "Сарафанное радио", color: "#4F9EFF",
    title: "Сообщества дальнобойщиков во ВКонтакте и Макс",
    desc: "Сотни активных групп с аудиторией миллионы водителей-профессионалов. Живые отзывы коллег — главный фактор доверия в B2B.",
    actions: ["Разборы реальных случаев от первого лица", "Партнёрство с лидерами мнений (50К+ подп.)", "Посты на Trans.ru, Logist.ru, АвтоФорум"] },
  { icon: "Gift", tag: "Реферальная программа", color: "#FFD700",
    title: "Диспетчеры и менеджеры автопарков",
    desc: "Ключевые ЛПР в B2B — диспетчеры и логисты. Реферальная схема: ₽3 000 за каждый подключённый парк от 10 ТС.",
    actions: ["Бонус диспетчеру ₽3 000 за парк 10+ авто", "Надбавка за пролонгацию контракта", "Приоритетная поддержка для партнёров"] },
  { icon: "FileText", tag: "Контент-маркетинг", color: "#A78BFA",
    title: "Собственный блог и отраслевые медиа",
    desc: "Экспертный контент укрепляет доверие. Тематика: безопасность зимой, техника, экстремальные ситуации на дороге.",
    actions: ["«Как выехать из заноса» — SEO-статьи", "Видео: лебёдка 50 000 lbs в деле", "Инфографика: зимний уход за авто"] },
  { icon: "Star", tag: "Экосистема партнёров", color: "#FC3F1D",
    title: "Нативная интеграция в партнёрские сервисы",
    desc: "Интеграция с навигационными и страховыми сервисами — готовый канал с нулевым CAC. Баннер в навигаторе в момент нужды.",
    actions: ["Баннер при температуре < -10°C в навигаторе", "Кешбэк баллами в партнёрских программах", "Специальный оффер при оформлении КАСКО / ОСАГО"] },
];

function MarketingSection() {
  return (
    <section id="marketing" className="m-section" style={{ background: 'var(--m-black)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Раздел 3 · Маркетинг</SectionLabel>
          <SectionTitle>Стратегия<br /><span style={{ color: 'var(--m-yellow)' }}>продвижения</span></SectionTitle>
          <SectionSubtitle>
            Четыре канала роста — от сарафанного радио в профессиональных сообществах до нативной интеграции в партнёрские сервисы.
          </SectionSubtitle>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-4 mt-14">
          {MARKETING_CHANNELS.map((ch, i) => (
            <ScrollReveal key={ch.title} delay={i * 100}>
              <div className="m-card p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${ch.color}15` }}>
                    <Icon name={ch.icon} size={18} style={{ color: ch.color }} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: ch.color }}>{ch.tag}</span>
                </div>
                <div className="font-black text-white uppercase tracking-tight mb-3">{ch.title}</div>
                <p className="text-sm mb-5" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>{ch.desc}</p>
                <div className="space-y-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {ch.actions.map((a) => (
                    <div key={a} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: ch.color }} />
                      <span className="text-xs" style={{ color: 'var(--m-text2)' }}>{a}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── РИСКИ ─────────────────────────────────────────────────────────────────────

const RISKS = [
  { icon: "UserX", title: "Нехватка квалифицированных кадров", severity: "Высокий", color: "#FC3F1D",
    desc: "Операторы спецтехники — дефицитная профессия. Высокая текучка в сезон.",
    mitigation: ["Собственная учебная программа совместно с автошколами", "Сертификат «Механик» — преимущество на рынке труда", "Геймификация и рейтинги мастеров с финансовым бонусом", "Партнёрство с военными водителями-механиками в запасе"] },
  { icon: "DollarSign", title: "Высокие CAPEX на спецтехнику", severity: "Высокий", color: "#FC3F1D",
    desc: "Тяжёлый эвакуатор — 8–15 млн руб. Масштабирование требует значительных вложений в парк.",
    mitigation: ["Asset-light старт: год 1 — аренда и субподряд с партнёрами", "Собственный парк только для лёгких бригад", "Лизинговые программы", "Покупка техники только при достижении точки безубыточности"] },
  { icon: "Building2", title: "Конкуренция с РАМК и дилерами", severity: "Средний", color: "#FFD700",
    desc: "РАМК, дилерские программы страховщиков и агрегаторы уже занимают рынок.",
    mitigation: ["УТП — предиктивность: конкуренты реагируют, мы предупреждаем", "Специализация на тяжёлой технике — ниша с низкой конкуренцией", "Цена ниже конкурентов на 30–40% за счёт подписочной модели"] },
  { icon: "Cloud", title: "Сезонность вызовов", severity: "Средний", color: "#FFD700",
    desc: "Пик — ноябрь–март. Летом загрузка падает на 60%. Постоянные издержки давят на маржу.",
    mitigation: ["Подписочная модель сглаживает сезонность: выручка стабильна", "Летний оффсезон: плановое ТО и диагностика (новый продукт)", "Гибкий штат: фиксированное ядро + фрилансеры в пик"] },
];

function RisksSection() {
  return (
    <section id="risks" className="m-section" style={{ background: 'var(--m-surface)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <SectionLabel>Раздел 4 · Риски</SectionLabel>
          <SectionTitle>Анализ рисков<br /><span style={{ color: 'var(--m-yellow)' }}>и митигация</span></SectionTitle>
          <SectionSubtitle>Честный взгляд на ключевые угрозы и конкретные меры их снижения.</SectionSubtitle>
        </ScrollReveal>
        <div className="space-y-4 mt-14">
          {RISKS.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 100}>
              <div className="m-card p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-72 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${r.color}15` }}>
                        <Icon name={r.icon} size={18} style={{ color: r.color }} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full" style={{ background: `${r.color}15`, color: r.color }}>{r.severity} риск</span>
                    </div>
                    <div className="font-black text-white uppercase tracking-tight mb-2">{r.title}</div>
                    <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.6 }}>{r.desc}</p>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-black uppercase tracking-widest mb-3" style={{ color: 'var(--m-text3)' }}>Меры митигации</div>
                    <div className="space-y-2">
                      {r.mitigation.map((m) => (
                        <div key={m} className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={14} style={{ color: '#4CAF50', marginTop: 2, flexShrink: 0 }} />
                          <span className="text-sm" style={{ color: 'var(--m-text2)' }}>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
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