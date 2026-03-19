import { useState, useEffect } from "react";
import { NAV_SECTIONS } from "@/components/sections/shared";
import HeroSection from "@/components/sections/HeroSection";
import SummarySection from "@/components/sections/SummarySection";
import ContentSections from "@/components/sections/ContentSections";
import BusinessSections from "@/components/sections/BusinessSections";
import TeamProposal from "@/components/sections/TeamProposal";
import LichniyMechanik from "@/components/sections/LichniyMechanik";

function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(18,18,18,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-1 font-bold text-white text-lg">
          Механики<span style={{ color: 'var(--ya-yellow)' }}>.</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`ya-nav-pill ${active === s.id ? 'active' : ''}`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <a href="#team" className="ya-btn-primary" style={{ padding: '8px 20px', fontSize: 13 }}>
          Об авторе
        </a>
      </div>
    </nav>
  );
}

export default function Index() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const sections = NAV_SECTIONS.map(s => s.id);
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 80 && bottom > 80) { setActive(id); break; }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--ya-black)' }}>
      <Nav active={active} />
      <HeroSection />
      <SummarySection />
      <BusinessSections />
      <ContentSections />
      <LichniyMechanik />
      <TeamProposal />
    </div>
  );
}