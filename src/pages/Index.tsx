import { useState, useEffect } from "react";
import { NAV_SECTIONS } from "@/components/sections/shared";
import HeroSection from "@/components/sections/HeroSection";
import SummarySection from "@/components/sections/SummarySection";
import ContentSections from "@/components/sections/ContentSections";
import BusinessSections from "@/components/sections/BusinessSections";
import TeamProposal from "@/components/sections/TeamProposal";
import LichniyMechanik from "@/components/sections/LichniyMechanik";

const LOGO_URL = "https://cdn.poehali.dev/projects/c2ff7195-b676-4c24-b753-d3b14814bb67/files/3fbd0cd2-d423-4ed0-8305-6cf2aabbeaa2.jpg";

function Nav({ active }: { active: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <div className="flex items-center gap-2.5 font-black text-xl tracking-tighter uppercase">
          <img src={LOGO_URL} alt="Механики" style={{ width: 34, height: 34, borderRadius: 10, objectFit: 'cover' }} />
          Механики<span style={{ color: 'var(--m-yellow)' }}>.</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {NAV_SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={`m-nav-pill ${active === s.id ? 'active' : ''}`}>
              {s.label}
            </a>
          ))}
        </div>

        <a href="#team" className="m-btn-primary" style={{ padding: '10px 22px', fontSize: 11 }}>
          Об авторе
        </a>
      </div>
    </nav>
  );
}

export default function Index() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-80px 0px -50% 0px', threshold: 0.1 });
    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--m-black)' }}>
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
