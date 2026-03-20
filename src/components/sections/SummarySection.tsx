import Icon from "@/components/ui/icon";
import { SectionLabel, SectionTitle, ScrollReveal } from "./shared";

// Российский рынок: данные Росстат, ГИБДД, АЕБ, РСА, 2022–2024
const KEY_FACTS = [
  { value: "47M",      label: "легковых авто зарегистрировано в РФ",  color: "var(--m-yellow)" },
  { value: "14 лет",   label: "средний возраст автомобиля в России",   color: "var(--m-blue)"   },
  { value: "≈₽55B",   label: "объём рынка помощи на дорогах РФ",      color: "var(--m-purple)" },
  { value: "82%",      label: "водителей РФ пользуются Навигатором",   color: "var(--m-red)"    },
  { value: "9M+",      label: "инцидентов на дорогах ежегодно",        color: "var(--m-yellow)" },
  { value: "< 3%",     label: "рынка охвачено подписочными сервисами", color: "var(--m-blue)"   },
];

const DRIVERS = [
  { icon: "Car",       title: "Стремительное старение парка",
    desc: "47 млн легковых авто в России. Средний возраст — 14 лет (Росстат, 2024). После 10 лет вероятность поломки вырастает в 3 раза. 68% автовладельцев пережили хотя бы один инцидент на дороге за последние 3 года." },
  { icon: "Cpu",       title: "Усложнение электроники",
    desc: "Современный автомобиль содержит 70–150 ЭБУ. Самодиагностика невозможна без сканера. 43% обращений — коды ошибок, которые водитель не может интерпретировать самостоятельно." },
  { icon: "Package",   title: "Рост рынка логистики",
    desc: "Парк грузовых авто в РФ — 8.3 млн единиц (2024). Простой грузовика обходится в ₽25–80 тыс./сутки. B2B ассистанс показывает рост ~9% г/г при среднем по рынку 4–6%." },
  { icon: "Shield",    title: "Рост числа автопутешествий",
    desc: "После 2020 года внутренний автотуризм вырос на 38% (ФТС, 2023). 74% семей хотя бы раз путешествовали на авто. Дистанции от 300 км — зона максимального риска без сопровождения." },
];

const COMPETITORS = [
  { name: "РАМК",              share: "~35%", note: "крупнейший, реактивная модель, работает по страховым полисам" },
  { name: "Страховые ассистанс",share: "~28%", note: "СОГАЗ-Помощь, Ингосстрах, Альфа — пакет к полису КАСКО/ОСАГО" },
  { name: "Агрегаторы (Getaround, Эвакуатор.ру)", share: "~18%", note: "маркетплейсы эвакуаторов, работают вне подписки, цена разовая" },
  { name: "Дилерские программы",share: "~12%", note: "только для конкретной марки, после окончания гарантии уходят" },
  { name: "Прочие / нишевые",  share: "~7%",  note: "локальные сервисы, кооперативы, нет масштаба" },
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

        <ScrollReveal>
          <SectionLabel>Резюме проекта</SectionLabel>
          <SectionTitle>Механики —<br /><span style={{ color: 'var(--m-yellow)' }}>бизнес-план</span></SectionTitle>
        </ScrollReveal>

        {/* Описание + позиционирование */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 mb-16">
          <ScrollReveal delay={100}>
            <p className="text-base mb-4" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
              <strong className="text-white">Механики</strong> — подписочный сервис экстренной помощи на дорогах России с глубокой интеграцией в навигационные и телематические системы. Продукт закрывает критический пробел: при охвате 82% водителей через Яндекс.Навигатор на рынке нет ни одного монетизированного подписочного сервиса физической помощи.
            </p>
            <p className="text-base mb-4" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
              Российский рынок дорожной помощи — <strong className="text-white">≈₽55 млрд</strong> в год. При этом подписочная модель занимает <strong className="text-white">менее 3%</strong> этого объёма — это и есть наше окно.
            </p>
            <p className="text-base" style={{ color: 'var(--m-text2)', lineHeight: 1.8 }}>
              Платформа включает два продукта: <strong className="text-white">экстренная помощь на дороге</strong> и <strong className="text-white">«Личный механик»</strong> — предиктивный сервис, предупреждающий о проблеме до её возникновения.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {[
                { color: 'var(--m-yellow)', label: 'МИССИЯ', text: 'Обеспечить бесперебойное движение и безопасность на дорогах России, минимизируя простои транспорта и риски для водителей.' },
                { color: 'var(--m-blue)',   label: 'ПОЗИЦИОНИРОВАНИЕ', text: 'Не «эвакуатор по звонку», а предиктивный ассистент. Первый сервис, предлагающий помощь до того, как водитель осознал проблему.' },
                { color: 'var(--m-red)',    label: 'КЛЮЧЕВОЙ КОНКУРЕНТ', text: 'РАМК и страховые ассистанс-службы. Их слабость — реактивность и привязка к полису. Механики действуют проактивно и независимо от страховки.' },
              ].map(item => (
                <div key={item.label} className="m-card p-5">
                  <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: item.color }}>{item.label}</div>
                  <p className="text-sm" style={{ color: 'var(--m-text2)', lineHeight: 1.7 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Ключевые цифры РОССИЙСКОГО рынка */}
        <ScrollReveal delay={100}>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Российский рынок — ключевые цифры</h3>
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: 'rgba(255,204,0,0.12)', color: 'var(--m-yellow)' }}>Росстат · ГИБДД · АЕБ · РСА · 2022–2024</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px mb-6" style={{ borderRadius: 20, background: 'rgba(255,255,255,0.04)', overflow: 'hidden' }}>
            {KEY_FACTS.map((f) => (
              <div key={f.label} className="px-7 py-6" style={{ background: 'var(--m-card)' }}>
                <div className="text-4xl font-black mb-1" style={{ color: f.color }}>{f.value}</div>
                <div className="text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--m-text3)' }}>{f.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs mb-16" style={{ color: 'var(--m-text3)' }}>* Объём рынка оценён по данным Российского союза автостраховщиков, открытым отчётам РАМК и анализу агрегаторов. Данные за 2022–2024 гг.</p>
        </ScrollReveal>

        {/* Конкуренты */}
        <ScrollReveal delay={120}>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Структура рынка: кто уже работает</h3>
          <div className="m-card overflow-hidden mb-16">
            <div className="grid grid-cols-3 px-6 py-3" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              {["Игрок", "Доля", "Особенности"].map(h => (
                <div key={h} className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--m-text3)' }}>{h}</div>
              ))}
            </div>
            {COMPETITORS.map((c, i) => (
              <div key={c.name} className="grid grid-cols-3 px-6 py-4" style={{ borderBottom: i < COMPETITORS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div className="text-sm font-bold text-white">{c.name}</div>
                <div className="text-sm font-black" style={{ color: 'var(--m-yellow)' }}>{c.share}</div>
                <div className="text-xs" style={{ color: 'var(--m-text2)' }}>{c.note}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Драйверы */}
        <ScrollReveal delay={150}>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Драйверы роста рынка в России</h3>
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
