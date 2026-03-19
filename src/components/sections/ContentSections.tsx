import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, SectionSubtitle, useInView } from "./shared";

const SERVICES = [
  {
    id: "snow",
    icon: "Snowflake",
    tag: "Сервис 01",
    title: "Механики.Снег",
    subtitle: "Умная уборка кузова",
    desc: "Подписочный сервис по уборке снега и поверхностному уходу за автомобилем. Гибридный метод: мастер приходит сам или пользователь сдаёт авто в точку. Фотофиксация каждого выезда.",
    points: ["Тариф Стандарт — ₽1 490/мес", "Тариф Люкс — ₽2 990/мес", "B2B от ₽890/авт. при парке 10+"],
    color: "#4F9EFF",
    dataValue: "История обслуживания, геолокация, состояние кузова",
  },
  {
    id: "passport",
    icon: "FileText",
    tag: "Сервис 02",
    title: "Механики.Паспорт",
    subtitle: "Цифровое досье автомобиля",
    desc: "Пользователь добровольно создаёт цифровой паспорт: фото кузова, история ремонтов, сервисные книги. Верификация VIN через партнёрские СТО.",
    points: ["Визуальное досье — архив HD фото", "Ремонтное досье — чеки + акты работ", "ИИ-оценка состояния"],
    color: "#FFD700",
    dataValue: "Техническое состояние, пробег, ремонтная история, стоимость",
  },
  {
    id: "insurance",
    icon: "Shield",
    tag: "Сервис 03",
    title: "Механики.Страховка",
    subtitle: "Персональный страховой профиль",
    desc: "На основе накопленных данных формируется страховой скоринг. Пользователь получает персональные предложения от партнёров-страховщиков — дешевле рынка на 15–30%.",
    points: ["Скоринг на основе реальных данных", "Интеграция с 5+ страховщиками", "Кешбэк за актуальные данные"],
    color: "#FC3F1D",
    dataValue: "Страховая история, стиль вождения, риск-профиль",
  },
];

function ServicesSection() {
  const { ref, inView } = useInView();
  return (
    <section id="services" className="ya-section" style={{ background: 'var(--ya-black)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Три сервиса</SectionLabel>
          <SectionTitle>Продукты экосистемы</SectionTitle>
          <SectionSubtitle>
            Каждый сервис решает реальную проблему и одновременно формирует ценный массив данных об автомобиле и владельце.
          </SectionSubtitle>
        </div>

        <div className="space-y-4">
          {SERVICES.map((s, i) => (
            <div key={s.id} className={`ya-card p-8 ${inView ? `ya-anim-up delay-${(i + 1) * 200}` : 'opacity-0'}`}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Левая часть */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${s.color}18` }}>
                      <Icon name={s.icon} size={22} style={{ color: s.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-1" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{s.tag}</div>
                      <div className="text-xl font-bold text-white">{s.title}</div>
                    </div>
                    <span className="ml-auto text-sm font-medium" style={{ color: 'var(--ya-text-muted)' }}>{s.subtitle}</span>
                  </div>

                  <p className="text-sm mb-5" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <span key={p} className="ya-ecosystem-badge text-xs">{p}</span>
                    ))}
                  </div>
                </div>

                {/* Правая часть — ценность данных */}
                <div className="lg:w-72 p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--ya-border)' }}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Database" size={14} style={{ color: s.color }} />
                    <span className="text-xs font-semibold" style={{ color: s.color, letterSpacing: '0.05em' }}>ДАННЫЕ</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.6 }}>
                    {s.dataValue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const DATA_POINTS = [
  { icon: "MapPin", title: "Геолокация", desc: "Где паркуется, сколько едет, маршруты" },
  { icon: "Camera", title: "Визуальные данные", desc: "HD фото кузова в динамике, повреждения, износ" },
  { icon: "Wrench", title: "Сервисная история", desc: "Что ремонтировали, когда, у кого, за сколько" },
  { icon: "TrendingUp", title: "Стоимость авто", desc: "Актуальная оценка на основе реального состояния" },
  { icon: "User", title: "Профиль владельца", desc: "Поведение, паттерны, уровень ухода за авто" },
  { icon: "Zap", title: "Риск-скоринг", desc: "Комплексная оценка для страховщиков и банков" },
];

const DATA_BUYERS = [
  { icon: "Shield", title: "Страховщики", value: "₽800–2 000", unit: "за профиль/год", color: "#FFD700" },
  { icon: "Building2", title: "Банки и лизинг", value: "₽500–1 200", unit: "при выдаче кредита", color: "#4F9EFF" },
  { icon: "Car", title: "Автодилеры", value: "₽1 000–3 000", unit: "при сделке trade-in", color: "#FC3F1D" },
  { icon: "Search", title: "Покупатели авто", value: "₽299–599", unit: "разовый отчёт", color: "#A78BFA" },
];

function DataSection() {
  const { ref, inView } = useInView();
  return (
    <section id="data" className="ya-section" style={{ background: 'var(--ya-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Ключевая ценность</SectionLabel>
          <SectionTitle>Данные — главный актив</SectionTitle>
          <SectionSubtitle>
            Пользователи добровольно передают данные, получая взамен скидки и сервис. В пользовательском соглашении платформа получает право использовать и монетизировать эти данные.
          </SectionSubtitle>
        </div>

        {/* Типы данных */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {DATA_POINTS.map((d, i) => (
            <div key={d.title} className={`ya-card p-5 ${inView ? `ya-anim-up delay-${(i + 1) * 100}` : 'opacity-0'}`}>
              <div className="ya-icon-circle mb-4">
                <Icon name={d.icon} size={20} />
              </div>
              <div className="font-semibold text-white mb-1">{d.title}</div>
              <div className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>{d.desc}</div>
            </div>
          ))}
        </div>

        {/* Кто покупает данные */}
        <div className={`mb-6 ${inView ? 'ya-anim-up delay-400' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold text-white mb-6">Покупатели данных</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {DATA_BUYERS.map((b) => (
              <div key={b.title} className="ya-card p-5 text-center">
                <div className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${b.color}18` }}>
                  <Icon name={b.icon} size={18} style={{ color: b.color }} />
                </div>
                <div className="font-semibold text-white text-sm mb-1">{b.title}</div>
                <div className="text-xl font-bold" style={{ color: b.color }}>{b.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--ya-text-muted)' }}>{b.unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Важная плашка */}
        <div className={`p-6 rounded-2xl flex gap-4 ${inView ? 'ya-anim-up delay-600' : 'opacity-0'}`} style={{ background: 'rgba(255,215,0,0.06)', border: '1px solid rgba(255,215,0,0.2)' }}>
          <Icon name="Info" size={20} style={{ color: 'var(--ya-yellow)', flexShrink: 0, marginTop: 2 }} />
          <div>
            <div className="font-semibold text-white mb-1">Правовая основа</div>
            <p className="text-sm" style={{ color: 'var(--ya-text-secondary)', lineHeight: 1.7 }}>
              Пользователь добровольно загружает данные для улучшения сервиса. Пользовательское соглашение содержит явное согласие на обработку и коммерческое использование предоставленных материалов. Аналогичная модель используется крупнейшими платформами: Google, Meta, Яндекс.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const MARKET_ITEMS = [
  { label: "TAM — весь авторынок РФ", value: "₽2.1T", sub: "45 млн автовладельцев" },
  { label: "SAM — целевая аудитория", value: "₽180B", sub: "Москва + города-миллионники" },
  { label: "SOM — реалистичный охват", value: "₽4.2B", sub: "500 000 пользователей к 2028" },
];

const ADVANTAGES = [
  { icon: "Lock", title: "Нет аналогов", desc: "Ни один игрок не строит прозрачный рынок авто-данных с добровольным участием" },
  { icon: "Repeat", title: "Рекуррентная выручка", desc: "Подписочная модель даёт предсказуемый денежный поток" },
  { icon: "Network", title: "Сетевой эффект", desc: "Каждый новый пользователь повышает ценность данных для покупателей" },
  { icon: "Globe", title: "Масштабируемость", desc: "Модель легко переносится на любой крупный город без владения активами" },
];

function MarketSection() {
  const { ref, inView } = useInView();
  return (
    <section id="market" className="ya-section" style={{ background: 'var(--ya-black)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`mb-12 ${inView ? 'ya-anim-up' : 'opacity-0'}`}>
          <SectionLabel>Рынок</SectionLabel>
          <SectionTitle>Объём возможности</SectionTitle>
          <SectionSubtitle>Авторынок России — один из крупнейших в мире. При этом рынок прозрачности данных об автомобилях не занят никем.</SectionSubtitle>
        </div>

        <div className="grid md:grid-cols-3 gap-3 mb-12">
          {MARKET_ITEMS.map((m, i) => (
            <div key={m.label} className={`ya-card p-6 ${inView ? `ya-anim-up delay-${(i + 1) * 150}` : 'opacity-0'}`}>
              <div className="text-xs font-semibold mb-3" style={{ color: 'var(--ya-text-muted)', letterSpacing: '0.06em' }}>{m.label}</div>
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--ya-yellow)' }}>{m.value}</div>
              <div className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>{m.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {ADVANTAGES.map((a, i) => (
            <div key={a.title} className={`ya-card p-6 flex gap-4 ${inView ? `ya-anim-up delay-${(i + 1) * 100 + 400}` : 'opacity-0'}`}>
              <div className="ya-icon-circle flex-shrink-0">
                <Icon name={a.icon} size={20} />
              </div>
              <div>
                <div className="font-semibold text-white mb-1">{a.title}</div>
                <div className="text-sm" style={{ color: 'var(--ya-text-secondary)' }}>{a.desc}</div>
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
      <ServicesSection />
      <DataSection />
      <MarketSection />
    </>
  );
}
