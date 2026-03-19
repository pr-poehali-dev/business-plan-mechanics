import Icon from "@/components/ui/icon";
import { SectionHeader, useInView, useCountUp } from "./shared";

function SummarySection() {
  return (
    <section id="summary" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(28 100% 55%), transparent)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="01" title="РЕЗЮМЕ ПРОЕКТА" subtitle="Концепция и инновации" />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg text-white/60 leading-relaxed mb-8 font-light">
              «Механика» — профессиональная экосистема техпомощи, объединяющая физический сервис с Big Data. Мы создаём первый в России «Цифровой паспорт жизненного цикла ТС» — «Единое окно правды» для покупателей и владельцев.
            </p>
            <div className="space-y-4">
              {[
                { icon: "Eye", title: "ИИ-Арбитраж и VIN-контроль", desc: "Сравнение 360-обзоров. Порог чувствительности: царапины < 5 см и вмятины < 2 см игнорируются — стандарт каршеринга." },
                { icon: "Camera", title: "Визуальное Ремонтное Досье", desc: "Архив HD-фото: новая запчасть в оригинальной упаковке + та же деталь, установленная на авто." },
                { icon: "Snowflake", title: "Сервис «Снег»", desc: "Гибридная очистка кузова обдувом. Страховка мастера — обязательный входной билет в тариф «Люкс»." },
                { icon: "Package", title: "Партнёрская программа", desc: "Прямое сотрудничество с STIHL и EGO — мастера покупают сертифицированный инструмент со скидкой 15–20% через приложение." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 border border-white/5 hover-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border" style={{ borderColor: 'rgba(255,140,30,0.3)', background: 'rgba(255,140,30,0.08)' }}>
                    <Icon name={item.icon} size={18} style={{ color: 'hsl(28 100% 55%)' }} />
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.05em' }}>{item.title}</div>
                    <div className="text-sm text-white/40 font-light leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 border border-white/10" style={{ background: 'rgba(255,140,30,0.04)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// МОДЕЛЬ «SUBSCRIPTION AS RELATIONSHIP»</div>
              <div className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Подписка как <span style={{ color: 'hsl(28 100% 55%)' }}>страховка спокойствия</span>
              </div>
              <p className="text-sm text-white/50 font-light leading-relaxed mb-6">
                Клиент платит ежемесячно «на всякий случай». Это гарантирует приоритет при аномальных снегопадах (101+ мм осадков) и избавляет от поиска мастера в пик спроса.
              </p>
              {[
                { plan: "Базовый", price: "299 ₽/мес", desc: "Приоритетный вызов в рабочие часы" },
                { plan: "Стандарт", price: "499 ₽/мес", desc: "Приоритет 24/7 + Цифровой паспорт ТС" },
                { plan: "Люкс", price: "990 ₽/мес", desc: "Сервис «Снег» + только застрахованные мастера" },
              ].map((p, i) => (
                <div key={p.plan} className={`flex justify-between items-center py-3 ${i < 2 ? 'border-b border-white/5' : ''}`}>
                  <div>
                    <div className="text-sm font-semibold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>{p.plan}</div>
                    <div className="text-xs text-white/40 font-light">{p.desc}</div>
                  </div>
                  <div className="text-sm font-bold font-mono-brand" style={{ color: 'hsl(28 100% 55%)' }}>{p.price}</div>
                </div>
              ))}
            </div>
            <div className="p-6 border-l-2" style={{ borderColor: 'hsl(195 100% 50%)', background: 'rgba(0,210,255,0.04)' }}>
              <div className="text-sm text-white/30 font-mono-brand mb-3 tracking-wider">// ASSET-LIGHT 2.0</div>
              <p className="text-white/70 font-light leading-relaxed text-sm">
                Модель агрегации ресурсов без капитальных затрат на парк. Экономия ~2,1 млрд ₽ на закупке техники. Мастера используют личное оборудование (BYOD) мощностью от 400 CFM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarketSection() {
  const { ref: marketRef, inView: marketInView } = useInView();
  const mTAM = useCountUp(890, 2000, marketInView);
  const mSAM = useCountUp(120, 2000, marketInView);
  const mSOM = useCountUp(18, 2000, marketInView);

  return (
    <section id="market" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="02" title="АНАЛИЗ РЫНКА" subtitle="Объём и потенциал 2026" />
        <div ref={marketRef} className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "TAM — Рынок техпомощи РФ", count: mTAM, suf: "₽ млрд", desc: "Совокупный рынок технической помощи и обслуживания ТС в России", col: "hsl(28 100% 55%)", letter: "T" },
            { label: "SAM — Онлайн-сегмент", count: mSAM, suf: "₽ млрд", desc: "Цифровые платформы и агрегаторы технических услуг для авто", col: "hsl(195 100% 50%)", letter: "S" },
            { label: "SOM — Целевой рынок", count: mSOM, suf: "₽ млрд", desc: "Подписочный сервис и цифровые паспорта ТС (вторичный рынок)", col: "hsl(142 70% 50%)", letter: "S" },
          ].map((m) => (
            <div key={m.label} className="relative p-8 border border-white/10 hover-card overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-white/[0.03]" style={{ fontFamily: 'Oswald, sans-serif' }}>{m.letter}</div>
              <div className="text-xs text-white/30 font-mono-brand mb-4 tracking-widest">{m.label}</div>
              <div className="text-5xl font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif', color: m.col }}>{m.count}</div>
              <div className="text-lg text-white/40 font-light mb-4">{m.suf}</div>
              <p className="text-sm text-white/40 font-light">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// СЕЗОННЫЙ МАРКЕТИНГ «ЗИМНЯЯ ГОТОВНОСТЬ»</div>
            {[
              { month: "Сентябрь", action: "Старт кампании «Зимняя готовность»", peak: false },
              { month: "Октябрь", action: "Продажи подписок, онбординг мастеров", peak: false },
              { month: "Ноябрь", action: "Активация базы, рост заявок x3", peak: true },
              { month: "Декабрь", action: "Пиковые снегопады — приоритет подписчикам", peak: true },
              { month: "Январь", action: "Удержание, отчёты, продление подписок", peak: false },
            ].map((row) => (
              <div key={row.month} className={`flex items-center gap-4 py-3 border-b border-white/5 ${row.peak ? '' : ''}`}>
                <div className="w-20 text-xs font-mono-brand flex-shrink-0" style={{ color: row.peak ? 'hsl(28 100% 55%)' : 'rgba(255,255,255,0.3)' }}>{row.month}</div>
                <div className={`text-sm font-light ${row.peak ? 'text-white/80' : 'text-white/40'}`}>{row.action}</div>
                {row.peak && <div className="ml-auto flex-shrink-0 px-2 py-0.5 text-xs border" style={{ borderColor: 'rgba(255,140,30,0.4)', color: 'hsl(28 100% 55%)' }}>ПИК</div>}
              </div>
            ))}
          </div>

          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// КОНКУРЕНТНЫЕ ПРЕИМУЩЕСТВА</div>
            {[
              { label: "Визуальные доказательства (не текст)", score: 97 },
              { label: "Страховка мастера обязательна", score: 93 },
              { label: "ИИ-арбитраж с порогом чувствительности", score: 90 },
              { label: "BYOD + партнёрская скидка STIHL/EGO", score: 85 },
              { label: "Рост вторичного рынка +8–10% (2026)", score: 82 },
            ].map((item) => (
              <div key={item.label} className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-white/50">{item.label}</span>
                  <span className="font-mono-brand" style={{ color: 'hsl(28 100% 55%)' }}>{item.score}/100</span>
                </div>
                <div className="h-1 w-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div style={{ width: `${item.score}%`, height: '100%', background: 'linear-gradient(90deg, hsl(28 100% 55%), hsl(195 100% 50%))' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SnowSection() {
  return (
    <section id="snow" className="relative py-32 overflow-hidden" style={{ background: 'hsl(220 18% 8%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(195 100% 50%), transparent)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="03" title="СЕРВИС «СНЕГ»" subtitle="Гибридная очистка и Тариф Люкс" accent="cyan" />
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <div className="relative p-8 border hover-card mb-6" style={{ borderColor: 'rgba(0,210,255,0.3)', background: 'rgba(0,210,255,0.04)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(195 100% 50%), transparent)' }} />
              <div className="text-xs font-mono-brand mb-4 tracking-widest" style={{ color: 'hsl(195 100% 50%)' }}>// ГИБРИДНЫЙ МЕТОД ОЧИСТКИ</div>
              <div className="space-y-4">
                {[
                  { icon: "Wind", title: "Кузов — только воздуходувкой", desc: "Обдув исключает физический контакт с лакокрасочным покрытием. Zero risk.", color: "hsl(195 100% 50%)" },
                  { icon: "Shovel", title: "Территория — лопатой", desc: "Расчистка снега вокруг автомобиля стандартным инструментом.", color: "hsl(28 100% 55%)" },
                  { icon: "CheckCircle", title: "«Белый список» оборудования", desc: "Только STIHL, EGO и сертифицированные аналоги мощностью от 400 CFM.", color: "hsl(142 70% 50%)" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center border" style={{ borderColor: `${item.color}40`, background: `${item.color}15` }}>
                      <Icon name={item.icon} size={15} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-0.5" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</div>
                      <div className="text-xs text-white/40 font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-4 tracking-widest">// КОНТРОЛЬ ИНСТРУМЕНТА</div>
              <div className="space-y-3">
                {[
                  "Еженедельный фотоотчёт чистоты фильтров в приложении",
                  "Состояние сопел — обязательный чек каждый выезд",
                  "Регистрация инструмента в реестре «ГосЛог»",
                  "За ущерб при BYOD — полная ответственность исполнителя",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-white/50 font-light">
                    <Icon name="ChevronRight" size={14} style={{ color: 'hsl(195 100% 50%)', flexShrink: 0, marginTop: 2 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative p-8 border hover-card" style={{ borderColor: 'rgba(255,140,30,0.4)', background: 'rgba(255,140,30,0.05)' }}>
              <div className="absolute -top-3 left-6 px-4 py-1 text-xs font-bold tracking-widest" style={{ background: 'hsl(28 100% 55%)', color: 'hsl(220 20% 6%)', fontFamily: 'Oswald, sans-serif' }}>ТАРИФ «ЛЮКС»</div>
              <div className="text-xs text-white/30 font-mono-brand mb-4 tracking-widest mt-2">// ДЛЯ АВТОМОБИЛЕЙ ОТ 10 МЛН ₽</div>
              <div className="space-y-4">
                {[
                  { icon: "ShieldCheck", title: "Личная расширенная страховка мастера", desc: "Обязательный входной билет. Платформа снимает финансовый риск." },
                  { icon: "UserCheck", title: "Только верифицированные профи", desc: "Рейтинг не ниже 4.8 / 5.0. История без инцидентов." },
                  { icon: "FileText", title: "Акт приёма-передачи", desc: "Фиксация состояния до и после каждого выезда через ИИ-арбитраж." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-3 border border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <Icon name={item.icon} size={18} style={{ color: 'hsl(28 100% 55%)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div className="text-white text-sm font-semibold mb-0.5" style={{ fontFamily: 'Oswald, sans-serif' }}>{item.title}</div>
                      <div className="text-xs text-white/40 font-light">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="text-xs text-white/30 font-mono-brand mb-4 tracking-widest">// ОТВЕТСТВЕННОСТЬ ПРИ «ЛЮКС»</div>
              <div className="space-y-3 text-sm">
                {[
                  { party: "Платформа", resp: "Отстранена от ответственности полностью", col: "hsl(142 70% 50%)" },
                  { party: "Мастер", resp: "Несёт личную страховую ответственность", col: "hsl(28 100% 55%)" },
                  { party: "Страховая", resp: "Покрывает ущерб при любом инциденте", col: "hsl(195 100% 50%)" },
                ].map((r) => (
                  <div key={r.party} className="flex justify-between items-center py-2 border-b border-white/5">
                    <span className="text-white/50 font-light">{r.party}</span>
                    <span className="text-xs font-mono-brand" style={{ color: r.col }}>{r.resp}</span>
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

function PassportSection() {
  return (
    <section id="passport" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative max-w-7xl mx-auto px-8">
        <SectionHeader num="04" title="ЦИФРОВОЙ ПАСПОРТ ТС" subtitle="Единое окно правды" accent="green" />
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "ScanSearch",
              tag: "VIN-КОНТРОЛЬ",
              color: "hsl(28 100% 55%)",
              title: "Онбординг через VIN",
              desc: "Обязательный ввод госномера и VIN для активации любых услуг платформы.",
              features: ["Карточка ТС с историей", "Привязка к профилю", "Автоверификация данных"]
            },
            {
              icon: "Image",
              tag: "ВИЗУАЛЬНОЕ ДОСЬЕ",
              color: "hsl(195 100% 50%)",
              title: "HD-архив осмотров",
              desc: "Неопровержимые визуальные доказательства состояния. Продажа отчётов покупателям на Авто.ру.",
              features: ["360° осмотр при приёмке", "Архив повреждений", "Платные выписки"]
            },
            {
              icon: "Wrench",
              tag: "РЕМОНТНОЕ ДОСЬЕ",
              color: "hsl(142 70% 50%)",
              title: "Фото-пруфы ремонта",
              desc: "Запчасть в заводской упаковке + та же деталь после установки. Автозагрузка через API CRM.",
              features: ["Фото запчасти до/после", "Интеграция 1С, АвтоДилер", "Заказ-наряды через API"]
            },
          ].map((card) => (
            <div key={card.title} className="relative p-8 border border-white/10 hover-card group" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="absolute top-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-all" style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }} />
              <div className="w-12 h-12 flex items-center justify-center border mb-6" style={{ borderColor: `${card.color}40`, background: `${card.color}15` }}>
                <Icon name={card.icon} size={22} style={{ color: card.color }} />
              </div>
              <div className="tech-tag mb-4" style={{ borderColor: `${card.color}30`, color: card.color }}>{card.tag}</div>
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Oswald, sans-serif' }}>{card.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6 font-light">{card.desc}</p>
              <div className="space-y-2">
                {card.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-white/40">
                    <div className="w-1 h-1 rounded-full" style={{ background: card.color }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// ИИ-АРБИТРАЖ: ПОРОГ ЧУВСТВИТЕЛЬНОСТИ</div>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
              {[
                { label: "Царапины", threshold: "< 5 см", icon: "Minus", color: "hsl(142 70% 50%)" },
                { label: "Вмятины", threshold: "< 2 см", icon: "Circle", color: "hsl(195 100% 50%)" },
              ].map((item) => (
                <div key={item.label} className="text-center p-6 border border-white/10 flex-1" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <Icon name={item.icon} size={32} style={{ color: item.color, margin: '0 auto 12px' }} />
                  <div className="text-xs text-white/30 font-mono-brand mb-1">{item.label}</div>
                  <div className="text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: item.color }}>{item.threshold}</div>
                  <div className="text-xs text-white/30 mt-1">игнорируются ИИ</div>
                </div>
              ))}
            </div>
            <div className="p-4 border-l-2 text-sm text-white/50 font-light" style={{ borderColor: 'hsl(142 70% 50%)', background: 'rgba(0,255,120,0.03)' }}>
              Стандарты каршеринга. Исключает споры по естественному износу. Мастер принимает авто — его сервисный центр несёт ответственность за пропущенные дефекты.
            </div>
          </div>

          <div className="p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="text-xs text-white/30 font-mono-brand mb-6 tracking-widest">// РЕГЛАМЕНТ ФОТОФИКСАЦИИ ДЛЯ СТО</div>
            <div className="space-y-4">
              {[
                { step: "01", title: "Новая запчасть в упаковке", desc: "Фото до вскрытия — подтверждение оригинальности детали", icon: "Package" },
                { step: "02", title: "Деталь установлена на авто", desc: "Фото после монтажа — подтверждение факта проведения работы", icon: "Wrench" },
                { step: "03", title: "API-загрузка в Досье", desc: "Автоматическая передача из CRM-системы СТО (1С, АвтоДилер)", icon: "Upload" },
                { step: "04", title: "Запись в паспорт ТС", desc: "Данные заказ-наряда привязываются к VIN и хранятся бессрочно", icon: "BookOpen" },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-xs font-mono-brand border border-white/10 text-white/20">{item.step}</div>
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

export default function ContentSections() {
  return (
    <>
      <SummarySection />
      <MarketSection />
      <SnowSection />
      <PassportSection />
    </>
  );
}
