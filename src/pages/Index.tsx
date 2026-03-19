import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { NAV_SECTIONS } from "@/components/sections/shared";
import HeroSection from "@/components/sections/HeroSection";
import ContentSections from "@/components/sections/ContentSections";
import BusinessSections from "@/components/sections/BusinessSections";
import TeamProposal from "@/components/sections/TeamProposal";

function Nav({ active }: { active: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style={{ background: 'rgba(10, 13, 18, 0.92)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center border" style={{ borderColor: 'hsl(28 100% 55%)', background: 'rgba(255,140,30,0.1)' }}>
            <Icon name="Settings2" size={16} style={{ color: 'hsl(28 100% 55%)' }} />
          </div>
          <span className="font-bold text-white text-sm" style={{ fontFamily: 'Oswald, sans-serif', letterSpacing: '0.2em' }}>МЕХАНИКИ</span>
          <span className="tech-tag ml-2">БИЗНЕС-ПЛАН</span>
        </div>
        <div className="hidden md:flex items-center gap-5">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{
                fontFamily: 'IBM Plex Mono, monospace',
                color: active === s.id ? 'hsl(28 100% 55%)' : 'rgba(255,255,255,0.35)'
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      for (const s of NAV_SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom > 100) { setActiveSection(s.id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(220 20% 6%)' }}>
      <Nav active={activeSection} />
      <HeroSection />
      <ContentSections />
      <BusinessSections />
      <TeamProposal />
    </div>
  );
}
