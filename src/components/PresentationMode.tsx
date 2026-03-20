import { useEffect, useState, useCallback, useRef } from "react";
import Icon from "@/components/ui/icon";
import { NAV_SECTIONS } from "@/components/sections/shared";

const SLIDES = NAV_SECTIONS.map((s) => s.id);
const SLIDE_LABELS = NAV_SECTIONS.map((s) => s.label);

interface Props {
  onClose: () => void;
}

export default function PresentationMode({ onClose }: Props) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const scrollLock = useRef(false);

  // Появление overlay
  useEffect(() => {
    const t = setTimeout(() => setOverlayVisible(true), 20);
    const nav = document.querySelector("nav") as HTMLElement | null;
    if (nav) { nav.style.transition = "opacity 0.3s"; nav.style.opacity = "0"; nav.style.pointerEvents = "none"; }
    document.body.style.overflow = "hidden";
    scrollToSlide(0);
    return () => clearTimeout(t);
  }, []);

  const scrollToSlide = (index: number) => {
    const el = document.getElementById(SLIDES[index]);
    if (!el) return;
    const offset = 0; // панель сверху уже перекрывает
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const goTo = useCallback(
    (index: number) => {
      if (transitioning || scrollLock.current) return;
      scrollLock.current = true;
      setTransitioning(true);
      setLabelVisible(false);
      setTimeout(() => {
        setCurrent(index);
        scrollToSlide(index);
        setTransitioning(false);
        setLabelVisible(true);
        setTimeout(() => { scrollLock.current = false; }, 700);
      }, 300);
    },
    [transitioning]
  );

  const next = useCallback(() => {
    if (current < SLIDES.length - 1) goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    if (current > 0) goTo(current - 1);
  }, [current, goTo]);

  const handleClose = useCallback(() => {
    setOverlayVisible(false);
    const nav = document.querySelector("nav") as HTMLElement | null;
    if (nav) { nav.style.opacity = "1"; nav.style.pointerEvents = ""; }
    document.body.style.overflow = "";
    setTimeout(onClose, 350);
  }, [onClose]);

  // Клавиатура
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, handleClose]);

  // Свайп
  useEffect(() => {
    let startX = 0;
    const onDown = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onUp = (e: TouchEvent) => {
      const dx = startX - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 60) { if (dx > 0) next(); else prev(); }
    };
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp, { passive: true });
    return () => { window.removeEventListener("touchstart", onDown); window.removeEventListener("touchend", onUp); };
  }, [next, prev]);

  const progress = ((current + 1) / SLIDES.length) * 100;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[9990] pointer-events-none"
        style={{
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(1px)",
          transition: "opacity 0.4s ease",
          opacity: overlayVisible ? 1 : 0,
        }}
      />

      {/* Верхняя панель */}
      <div
        className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 md:px-10 gap-4"
        style={{
          height: 62,
          background: "rgba(6,6,6,0.97)",
          backdropFilter: "blur(40px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          opacity: overlayVisible ? 1 : 0,
          transform: overlayVisible ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <div className="flex items-center gap-2.5 font-black text-sm tracking-tighter uppercase select-none flex-shrink-0">
          <span style={{ color: "var(--m-yellow)", fontSize: 16 }}>●</span>
          <span className="hidden sm:inline text-white">Механики</span>
          <span className="text-[9px] font-black uppercase tracking-widest ml-1 hidden sm:inline" style={{ color: "rgba(255,255,255,0.22)", letterSpacing: "0.22em" }}>
            · Презентация
          </span>
        </div>

        {/* Точки-навигатор */}
        <div className="flex items-center gap-1.5 flex-1 justify-center overflow-hidden">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={SLIDE_LABELS[i]}
              style={{
                width: i === current ? 28 : 7,
                height: 7,
                borderRadius: 4,
                background: i === current ? "var(--m-yellow)" : i < current ? "rgba(255,204,0,0.28)" : "rgba(255,255,255,0.1)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                flexShrink: 0,
                transition: "all 0.45s cubic-bezier(0.34,1.56,0.64,1)",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-[11px] font-black tabular-nums hidden sm:inline" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
            {current + 1}&thinsp;/&thinsp;{SLIDES.length}
          </span>
          <button
            onClick={handleClose}
            className="flex items-center gap-1.5 font-black uppercase rounded-xl transition-all"
            style={{ fontSize: 10, letterSpacing: "0.14em", padding: "8px 14px", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.38)", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer" }}
          >
            <Icon name="X" size={12} />
            <span className="hidden sm:inline">Esc</span>
          </button>
        </div>
      </div>

      {/* Прогресс-бар */}
      <div
        className="fixed z-[9999]"
        style={{
          top: 62,
          left: 0,
          right: 0,
          height: 2,
          background: "rgba(255,255,255,0.04)",
          transition: "opacity 0.4s ease",
          opacity: overlayVisible ? 1 : 0,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "linear-gradient(90deg,#ffcc00,#ffe566)",
            transition: "width 0.6s cubic-bezier(0.4,0,0.2,1)",
            boxShadow: "0 0 20px rgba(255,204,0,0.7)",
            borderRadius: "0 2px 2px 0",
          }}
        />
      </div>

      {/* Стрелка влево */}
      {current > 0 && (
        <button
          onClick={prev}
          className="fixed z-[9998] top-1/2 left-4 -translate-y-1/2 flex items-center justify-center rounded-2xl"
          style={{
            width: 50,
            height: 50,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            color: "rgba(255,255,255,0.7)",
            cursor: "pointer",
            transition: "all 0.25s ease, opacity 0.4s ease",
            opacity: overlayVisible ? 1 : 0,
          }}
          onMouseEnter={(e) => { Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(255,255,255,0.12)", transform: "translateY(-50%) scale(1.1)" }); }}
          onMouseLeave={(e) => { Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(255,255,255,0.06)", transform: "translateY(-50%) scale(1)" }); }}
        >
          <Icon name="ChevronLeft" size={22} />
        </button>
      )}

      {/* Стрелка вправо */}
      {current < SLIDES.length - 1 && (
        <button
          onClick={next}
          className="fixed z-[9998] top-1/2 right-4 -translate-y-1/2 flex items-center justify-center rounded-2xl"
          style={{
            width: 50,
            height: 50,
            background: "rgba(255,204,0,0.13)",
            border: "1px solid rgba(255,204,0,0.3)",
            backdropFilter: "blur(20px)",
            color: "var(--m-yellow)",
            cursor: "pointer",
            transition: "all 0.25s ease, opacity 0.4s ease",
            opacity: overlayVisible ? 1 : 0,
          }}
          onMouseEnter={(e) => { Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(255,204,0,0.25)", transform: "translateY(-50%) scale(1.1)" }); }}
          onMouseLeave={(e) => { Object.assign((e.currentTarget as HTMLElement).style, { background: "rgba(255,204,0,0.13)", transform: "translateY(-50%) scale(1)" }); }}
        >
          <Icon name="ChevronRight" size={22} />
        </button>
      )}

      {/* Лейбл секции — внизу по центру */}
      <div
        className="fixed z-[9998] pointer-events-none select-none"
        style={{
          bottom: 78,
          left: "50%",
          transform: `translateX(-50%) translateY(${overlayVisible && labelVisible ? "0" : "12px"})`,
          transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          opacity: overlayVisible && labelVisible ? 1 : 0,
        }}
      >
        <div
          className="font-black uppercase whitespace-nowrap"
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            padding: "8px 20px",
            borderRadius: 100,
            background: "rgba(6,6,6,0.9)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.07)",
            color: "var(--m-yellow)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
          }}
        >
          {SLIDE_LABELS[current]}
        </div>
      </div>

      {/* Нижняя панель */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9999] flex items-center justify-between px-6 md:px-10 gap-4"
        style={{
          height: 60,
          background: "rgba(6,6,6,0.97)",
          backdropFilter: "blur(40px)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          opacity: overlayVisible ? 1 : 0,
          transform: overlayVisible ? "translateY(0)" : "translateY(100%)",
        }}
      >
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 font-black uppercase rounded-xl"
          style={{
            fontSize: 10,
            letterSpacing: "0.14em",
            padding: "9px 16px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            color: current === 0 ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.38)",
            cursor: current === 0 ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
        >
          <Icon name="ArrowLeft" size={12} />
          Назад
        </button>

        <span
          className="text-[9px] font-black uppercase tracking-widest hidden md:inline select-none"
          style={{ color: "rgba(255,255,255,0.12)", letterSpacing: "0.18em" }}
        >
          ← → · пробел · свайп
        </span>

        {current < SLIDES.length - 1 ? (
          <button
            onClick={next}
            className="m-btn-primary"
            style={{ fontSize: 10, padding: "9px 20px", letterSpacing: "0.14em" }}
          >
            Далее
            <Icon name="ArrowRight" size={12} />
          </button>
        ) : (
          <button
            onClick={handleClose}
            className="m-btn-primary"
            style={{ fontSize: 10, padding: "9px 20px", letterSpacing: "0.14em" }}
          >
            <Icon name="Check" size={12} />
            Завершить
          </button>
        )}
      </div>
    </>
  );
}