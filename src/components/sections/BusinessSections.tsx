import Icon from "@/components/ui/icon";
import { SectionHeader } from "./shared";

function FinancialsSection() {
  return (
    <section id="financials" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="05" title="ФИНАНСОВЫЙ РАСЧЁТ" subtitle="Юнит-экономика 2026" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// ЮНИТ-ЭКОНОМИКА ЗАКАЗА «СНЕГ»</div>
            {[
              { label: "Себестоимость выезда (COGS)", val: "~862 ₽", sub: "Мастер ~312 ₽ + логистика/амортизация ~250 ₽", color: "text-red-400" },
              { label: "Выручка с подписки", val: "499 ₽/мес", sub: "5 988 ₽/год", color: "text-white" },
              { label: "Маржа при 3 выездах", val: "~57%", sub: "Прибыль при нормальной зиме", color: "text-green-400" },
              { label: "Маржа без снегопада", val: "100%", sub: "Вся подписка — чистая прибыль", color: "text-orange-400 font-bold" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between items-start py-4 border-b border-white/5">
                <div>
                  <div className={`text-sm ${r.color} font-light`}>{r.label}</div>
                  <div className="text-xs text-white/30 font-mono-brand mt-0.5">{r.sub}</div>
                </div>
                <div className={`text-lg font-bold font-mono-brand flex-shrink-0 ml-4 ${r.color}`}>{r.val}</div>
              </div>
            ))}
          </div>

          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// МОНЕТИЗАЦИЯ ВИЗУАЛЬНЫХ ДАННЫХ</div>
            {[
              { stream: "Визуальное Досье", desc: "Продажа HD-отчётов покупателям на Авто.ру и классифайдах", rev: "₽1–3 тыс./отчёт", col: "hsl(28 100% 55%)" },
              { stream: "Ремонтное Досье", desc: "Платные выписки из СТО с фото-подтверждением замены узлов", rev: "₽500–2 тыс.", col: "hsl(195 100% 50%)" },
              { stream: "Подписка «Люкс»", desc: "Премиум-тариф для авто от 10 млн ₽", rev: "990 ₽/мес", col: "hsl(270 70% 65%)" },
              { stream: "Партнёрские СТО", desc: "Комиссия за каждый заказ-наряд через платформу", rev: "8–12%", col: "hsl(142 70% 50%)" },
            ].map((r) => (
              <div key={r.stream} className="flex gap-4 py-4 border-b border-white/5">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: r.col }} />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="text-sm font-semibold text-white mb-0.5" style={{ fontFamily: 'Oswald, sans-serif' }}>{r.stream}</div>
                    <div className="text-sm font-bold font-mono-brand flex-shrink-0 ml-3" style={{ color: r.col }}>{r.rev}</div>
                  </div>
                  <div className="text-xs text-white/40 font-light">{r.desc}</div>
                </div>
              </div>
            ))}
            <div className="mt-4 p-4 border-l-2 text-xs text-white/50 font-light" style={{ borderColor: 'hsl(28 100% 55%)', background: 'rgba(255,140,30,0.04)' }}>
              Ожидаемый рост вторичного рынка авто в 2026 году: +8–10%
            </div>
          </div>
        </div>

        <div className="p-6 border-l-2 flex gap-8 items-center flex-wrap" style={{ borderColor: 'hsl(195 100% 50%)', background: 'rgba(0,210,255,0.04)' }}>
          {[
            { label: "// Asset-Light экономия", val: "~2,1 млрд ₽", sub: "Отказ от собственного парка техники", col: "hsl(195 100% 50%)" },
            { label: "// Скидка BYOD", val: "15–20%", sub: "На инструмент STIHL/EGO через приложение", col: "hsl(28 100% 55%)" },
            { label: "// Покрытие KTG", val: "> 92%", sub: "Коэффициент технической готовности", col: "hsl(142 70% 50%)" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-6">
              {i > 0 && <div className="h-12 w-px bg-white/10 hidden md:block" />}
              <div>
                <div className="text-xs font-mono-brand text-white/30 mb-1">{s.label}</div>
                <div className="text-4xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: s.col }}>{s.val}</div>
                <div className="text-sm text-white/40 font-light">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function B2BSection() {
  return (
    <section id="b2b" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="06" title="B2B ПАРТНЁРЫ" subtitle="Логистика и корпоративный сегмент" />
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              slide: "01",
              icon: "TrendingDown",
              title: "Экономика простоя",
              color: "hsl(28 100% 55%)",
              content: "Стоимость часа простоя фуры: 5–8 тыс. ₽. Подписка «Хэви» (~4 900 ₽/мес) окупает один сложный ремонт или эвакуацию за весь год.",
              highlight: "4 900 ₽/мес"
            },
            {
              slide: "02",
              icon: "BarChart3",
              title: "Прозрачный контроль",
              color: "hsl(195 100% 50%)",
              content: "Цифровой отчёт о каждой работе в личном кабинете компании. Исключает приписки и обман со стороны водителей или мастеров.",
              highlight: "0 приписок"
            },
            {
              slide: "03",
              icon: "Clock",
              title: "Гарантия SLA",
              color: "hsl(142 70% 50%)",
              content: "Золотой стандарт прибытия за 90 минут с учётом заторов. Обязательное уведомление об опоздании. SLA 45–60 мин в черте города.",
              highlight: "90 мин макс"
            },
          ].map((slide) => (
            <div key={slide.slide} className="relative p-8 border border-white/10 hover-card group" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-all" style={{ background: `linear-gradient(90deg, transparent, ${slide.color}, transparent)` }} />
              <div className="flex items-center justify-between mb-6">
                <div className="tech-tag" style={{ borderColor: `${slide.color}40`, color: slide.color }}>СЛАЙД {slide.slide}</div>
                <div className="w-10 h-10 flex items-center justify-center border" style={{ borderColor: `${slide.color}30`, background: `${slide.color}10` }}>
                  <Icon name={slide.icon} size={18} style={{ color: slide.color }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>{slide.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-4 font-light">{slide.content}</p>
              <div className="text-3xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: slide.color }}>{slide.highlight}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// СИСТЕМА РЕЙТИНГА И БРЕНДИРОВАНИЯ</div>
            <div className="space-y-4">
              {[
                { icon: "Truck", title: "Мобильные партнёры (Эвакуация / Техпомощь)", desc: "Добровольное брендирование спецтехники символикой «Механики» даёт +5 баллов приоритета в партнёрском приложении.", badge: "+5 баллов" },
                { icon: "Store", title: "Партнёрские СТО", desc: "Обязательный стикер «Партнёр Механики» на кассовой зоне — визуальное подтверждение верификации сервиса.", badge: "Верификация" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 border border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                    <Icon name={item.icon} size={18} style={{ color: 'hsl(28 100% 55%)' }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-white text-sm font-semibold mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</div>
                      <span className="flex-shrink-0 px-2 py-0.5 text-xs border" style={{ borderColor: 'rgba(255,140,30,0.4)', color: 'hsl(28 100% 55%)' }}>{item.badge}</span>
                    </div>
                    <div className="text-xs text-white/40 font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// УМНЫЙ ГОРОД: ЭКОСИСТЕМНЫЕ СИНЕРГИИ</div>
            <div className="space-y-4">
              {[
                { icon: "Map", title: "Мониторинг дорог", desc: "Видеорегистраторы мастеров с ИИ фиксируют ямы и стёртую разметку → Яндекс Карты + городские службы", color: "hsl(195 100% 50%)" },
                { icon: "Zap", title: "ЭРА-ГЛОНАСС", desc: "Интеграция с датчиками авто — автоматическая отправка помощи при ДТП или критической поломке", color: "hsl(28 100% 55%)" },
                { icon: "TrafficCone", title: "Умные светофоры", desc: "Данные о спецтехнике помогают ИИ Москвы оптимизировать фазы для пропуска помощи", color: "hsl(142 70% 50%)" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 py-3 border-b border-white/5">
                  <Icon name={item.icon} size={16} style={{ color: item.color, flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div className="text-white text-sm font-semibold mb-0.5" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</div>
                    <div className="text-xs text-white/40 font-light">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="07" title="ДОРОЖНАЯ КАРТА" subtitle="Этапы развития" />
        <div className="relative">
          <div className="absolute top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, hsl(28 100% 55%), hsl(195 100% 50%), hsl(142 70% 50%), transparent)', left: '20px' }} />
          <div className="space-y-8 pl-16">
            {[
              { phase: "Q2 2026", color: "hsl(28 100% 55%)", status: "Ядро", title: "Управленческое ядро", items: ["Формирование команды Head of BU", "Финализация алгоритмов ИИ-осмотра", "Разработка стандартов фотофиксации", "Юридическая база: право на данные"] },
              { phase: "Q3 2026", color: "hsl(195 100% 50%)", status: "Сеть", title: "Рекрутинг и обучение", items: ["Набор партнёров через профи-приложение", "Запуск «Центра обучения кадров»", "Обязательная отработка 18 месяцев", "Контроль HSE: дистанционный мониторинг"] },
              { phase: "Q4 2026", color: "hsl(142 70% 50%)", status: "Пилот", title: "Пилотный запуск", items: ["Москва и Московская область", "Первые 500 подписчиков «Снег»", "Партнёрство с 20+ СТО", "Интеграция с Авто.ру для досье"] },
              { phase: "2027", color: "hsl(270 70% 65%)", status: "Рост", title: "Экспансия и масштаб", items: ["Города-миллионники России", "Полноценная продажа Визуальных Досье", "Запуск B2B «Хэви» для логистики", "Интеграция ЭРА-ГЛОНАСС"] },
            ].map((phase) => (
              <div key={phase.phase} className="relative flex gap-6">
                <div className="absolute flex items-center justify-center w-8 h-8 border rounded-full" style={{ borderColor: phase.color, background: `${phase.color}20`, left: '-36px', top: '20px' }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: phase.color }} />
                </div>
                <div className="flex-1 p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <div className="tech-tag" style={{ borderColor: `${phase.color}40`, color: phase.color }}>{phase.phase}</div>
                    <div className="ml-auto px-3 py-1 text-xs border" style={{ borderColor: `${phase.color}30`, color: phase.color, background: `${phase.color}10` }}>{phase.status}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>{phase.title}</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-white/40 font-light">
                        <div className="w-1 h-1 rounded-full flex-shrink-0 mt-1.5" style={{ background: phase.color }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function KPISection() {
  return (
    <section id="kpi" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="08" title="УПРАВЛЕНИЕ И KPI" subtitle="Метрики успеха" accent="cyan" />
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "Activity", label: "КТГ", value: "> 92%", desc: "Коэффициент технической готовности — доля машин партнёров, готовых к выезду", color: "hsl(28 100% 55%)" },
              { icon: "Clock", label: "SLA", value: "45–60 мин", desc: "Прибытие в городе. 90 мин — трасса для B2B", color: "hsl(195 100% 50%)" },
              { icon: "TrendingUp", label: "LTV", value: "3 года", desc: "Доход от одного подписчика за 3 года — ключевая бизнес-метрика", color: "hsl(142 70% 50%)" },
              { icon: "Shield", label: "Safety", value: "Zero Harm", desc: "Количество инцидентов без травм и повреждений", color: "hsl(270 70% 65%)" },
            ].map((kpi) => (
              <div key={kpi.label} className="p-6 border border-white/10 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                <div className="w-10 h-10 flex items-center justify-center border mb-4" style={{ borderColor: `${kpi.color}40`, background: `${kpi.color}10` }}>
                  <Icon name={kpi.icon} size={18} style={{ color: kpi.color }} />
                </div>
                <div className="text-xs font-mono-brand text-white/30 mb-1">{kpi.label}</div>
                <div className="text-2xl font-bold mb-2" style={{ fontFamily: 'Oswald, sans-serif', color: kpi.color }}>{kpi.value}</div>
                <div className="text-xs text-white/40 font-light leading-relaxed">{kpi.desc}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// ОБУЧЕНИЕ И КАДРОВЫЙ РЕЗЕРВ</div>
              <div className="space-y-4">
                {[
                  { icon: "GraduationCap", title: "Обучение «в долг»", desc: "Стоимость курса 33–65 тыс. ₽ вычитается из будущих доходов мастера", badge: "18 мес. отработка" },
                  { icon: "Eye", title: "HSE-мониторинг", desc: "Дистанционный контроль соблюдения техники безопасности мастерами на выезде", badge: "Zero Harm" },
                  { icon: "Scale", title: "Юридическая защита", desc: "Платформа владеет правами на все фото/видео осмотров для продажи Досье", badge: "Право на данные" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                      <Icon name={item.icon} size={15} style={{ color: 'hsl(28 100% 55%)' }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <div className="text-white text-sm font-semibold" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</div>
                        <span className="flex-shrink-0 px-2 py-0.5 text-xs border border-white/10 text-white/30 font-mono-brand">{item.badge}</span>
                      </div>
                      <div className="text-xs text-white/40 font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BusinessSections() {
  return (
    <>
      <FinancialsSection />
      <B2BSection />
      <RoadmapSection />
      <KPISection />
    </>
  );
}
