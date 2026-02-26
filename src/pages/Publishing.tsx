/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { Send, DollarSign, Target, Globe, Rocket, TrendingUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SECTIONS = [
  { id: "core", label: "The Core" },
  { id: "founder", label: "Founder" },
  { id: "editorial", label: "Collaboration" },
  { id: "about", label: "About the Imprint" },
  { id: "model", label: "The Model" },
  { id: "criteria", label: "Submission Criteria" },
  { id: "submit", label: "How to Submit" },
  { id: "positioning", label: "Positioning" },
  { id: "stay-informed", label: "Stay Informed" },
];

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-32 py-20 md:py-24 bg-white text-[#0a0a0a] ${className}`}>
    <div className="mx-auto max-w-6xl px-6">
      {children}
    </div>
  </section>
);

export default function Publishing() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen flex">
      {/* Side menu - sticky */}
      <aside className="hidden lg:block w-48 shrink-0 sticky top-24 self-start pt-24 pl-8 pr-4 min-h-[calc(100vh-6rem)] bg-black border-r border-white/10">
        <p className="text-[9px] uppercase tracking-[0.3em] font-semibold text-white/60 mb-6">Contents</p>
        <nav className="space-y-1">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left text-sm font-medium text-white hover:text-brand-gold transition-colors py-2"
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 min-w-0 bg-white">
      {/* Hero - dark */}
      <header className="bg-black text-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/" className="text-brand-accent hover:text-white text-sm uppercase tracking-widest transition-colors">
            ← Back to home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display leading-tight mt-8">Jemsliving Publishing</h1>
          <p className="text-xl md:text-2xl font-serif italic text-brand-gold mt-4">Built by an author, for authors.</p>
        </div>
      </header>

      {/* Thin divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Mobile: Contents - horizontal scroll */}
      <div className="lg:hidden bg-white border-b border-black/10 overflow-x-auto">
        <div className="flex gap-2 min-w-max px-6 py-4">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="shrink-0 px-4 py-2 rounded-full border border-black/10 bg-white text-xs font-medium text-black/80 hover:bg-brand-gold hover:text-black hover:border-brand-gold transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* The Core */}
      <Section id="core">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">The Core</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <p className="mb-4">
                Today&rsquo;s authors are often undervalued within traditional publishing structures. Between agents, publishers, and distribution layers, both margin and influence are diluted. At the same time, many writers who choose to publish independently face another challenge. They are expected to take on every role, editor, designer, marketer, strategist, distributor, without always having the right structure or guidance.
              </p>
              <p className="mb-4">
                This is a gap I discovered through my own publishing journey.
              </p>
              <p>
                I saw how powerful stories can lose momentum due to weak positioning, and how authors either surrender too much control or carry too much responsibility. Potential is lost not because the ideas lack strength, but because the model surrounding them is flawed.
              </p>
            </div>
            <div>
              <p className="mb-4 font-semibold">
                Jemsliving Publishing is my response to that.
              </p>
              <p>
                A selective, partnership-driven model where creative freedom is combined with strategic structure. Where authors retain more, grow more, and are positioned for long-term success without navigating the industry alone.
              </p>
            </div>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="founder">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">Founder</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Background & expertise</h3>
              <p className="mb-4">
                I founded Jemsliving Publishing after navigating both independent publishing and structured distribution models firsthand.
              </p>
              <p className="mb-4">
                My background is rooted in marketing, and I am currently pursuing formal studies as a Digital Marketing Specialist. This strategic foundation informs every publishing decision within the imprint, from positioning and audience development to launch structure and long-term brand development.
              </p>
              <p className="mb-4">
                I have worn every hat in the publishing process. From manuscript development and structural edits to cover design, website creation, global distribution setup, pricing strategy, metadata optimization, and international sales positioning.
              </p>
              <p>
                I have built and launched books from the ground up and successfully positioned titles across international markets.
              </p>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Philosophy</h3>
              <p className="mb-4">
                I understand both the creative depth of storytelling and the technical precision required to bring a book to market successfully.
              </p>
              <p className="font-serif italic text-[#0a0a0a] text-xl">
                Jemsliving Publishing is built from lived experience, not theory.
              </p>
            </div>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="editorial">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">Editorial Collaboration</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Our partners</h3>
              <p className="mb-4">
                Jemsliving Publishing collaborates with carefully selected partners to ensure professional standards across every project.
              </p>
              <p>
                I work alongside an editorial collaborator with an academic background in English studies and professional experience in language education. She brings strong grammatical precision, analytical reading skills, and a genuine passion for literature.
              </p>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Our approach</h3>
              <p>
                Every manuscript is approached with both creative sensitivity and technical rigor. Quality is not accidental. It is intentional.
              </p>
            </div>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="about">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">About the Imprint</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Who we are</h3>
              <p>
                Jemsliving Publishing is an international English-language imprint entering its inaugural publishing cycle. All titles are published under the Jemsliving Publishing name.
              </p>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What we publish</h3>
              <p className="mb-4">
                The focus is emotionally intense, cinematic storytelling with strong relational depth and global appeal. Stories that resonate. Stories that linger. Stories that carry both commercial potential and artistic integrity.
              </p>
              <p>
                The catalog is intentionally limited. Only a selective number of titles are published each year to ensure quality, clear positioning, curated launch strategy, and long-term author development.
              </p>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Our selectivity</h3>
              <p className="font-serif italic text-[#0a0a0a] text-xl">
                This is not a volume-based house. Selectivity is intentional.
              </p>
            </div>
          </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="model">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">The Model</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What we provide</h3>
              <p className="mb-4">
                Jemsliving Publishing operates on an author-first, partnership-based model designed to provide:
              </p>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3 font-medium"><DollarSign className="text-brand-gold shrink-0 w-5 h-5" /> Keep more of what you earn: stronger royalties than traditional publishing</li>
                <li className="flex items-start gap-3 font-medium"><Target className="text-brand-gold shrink-0 w-5 h-5" /> Strategic positioning that gets your book noticed</li>
                <li className="flex items-start gap-3 font-medium"><Globe className="text-brand-gold shrink-0 w-5 h-5" /> Global reach: your book available wherever readers are</li>
                <li className="flex items-start gap-3 font-medium"><Rocket className="text-brand-gold shrink-0 w-5 h-5" /> Launch support designed for impact, not just visibility</li>
                <li className="flex items-start gap-3 font-medium"><TrendingUp className="text-brand-gold shrink-0 w-5 h-5" /> Long-term brand building: we grow your career, not just your catalog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What we&rsquo;re not</h3>
              <p className="mb-4">
                This is not a do-it-yourself model. It is not a traditional structure where authors lose influence.
              </p>
              <p>
                It is a structured and intentional approach built for sustainability and growth.
              </p>
            </div>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="criteria">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">Submission Criteria</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <p>
              You do not need a completed manuscript to submit. I consider both fully developed manuscripts and strong conceptual book ideas with clear direction.
            </p>

            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What you can submit</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> A completed English-language manuscript</li>
                <li className="flex items-center gap-2 py-1 text-sm text-[#0a0a0a]/70">— or —</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> A clearly articulated book concept with a strong emotional core</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What matters most</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> Narrative depth and emotional intensity</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> A cinematic or immersive storytelling vision</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> Long-term creative ambition</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> Willingness to engage in strategic positioning and marketing</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> 21 years of age or older</li>
              </ul>
            </div>

            <p>
              Previous publishing experience is welcome but not required. Commercial positioning and hook development are collaborative processes. A strong foundational idea often matters more than a perfectly polished draft.
            </p>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="submit">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">How to Submit</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Process</h3>
              <p>
                Initial submissions are by consideration only. A limited number of projects are reviewed per publishing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What to include</h3>
              <ul className="space-y-2 list-none">
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> A concise book overview of up to 1,500 characters</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> The core emotional theme and creative vision</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> Genre and tone if defined</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> Current manuscript status, whether idea, partial draft, or completed manuscript</li>
                <li className="flex items-start gap-3"><span className="text-[#0a0a0a]/70 shrink-0">•</span> A short author bio</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Next steps</h3>
              <p>
                Selected projects will be invited to submit additional material for full review.
              </p>
            </div>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="positioning">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">Positioning</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Who this is for</h3>
              <p className="mb-4">
                Jemsliving Publishing is selective by design.
              </p>
              <p className="mb-4">
                You do not need to master every aspect of publishing. You do not need to be a marketing expert. But you do need to take your work seriously.
              </p>
              <p>
                This imprint exists for writers who value strong storytelling and are open to strategic development around their work.
              </p>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What we believe</h3>
              <p className="mb-4">
                Publishing is not only about finishing a manuscript. It is about shaping, positioning, and launching it with clarity.
              </p>
              <p>
                I founded Jemsliving Publishing to provide the structure many authors lack and the strategic clarity many traditional models fail to offer.
              </p>
            </div>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      <Section id="stay-informed">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-8 text-black tracking-tight">Stay Informed</h2>
        <div className="space-y-6 text-base leading-relaxed text-[#0a0a0a]/95 max-w-3xl">
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">What you&rsquo;ll receive</h3>
              <p className="mb-4">
                For detailed information about the publishing model, upcoming submission windows, and strategic insights for authors, you are invited to join the Jemsliving Publishing newsletter.
              </p>
              <p>
                Subscribers receive early access to submission cycles, deeper insight into the imprint philosophy, and curated guidance on building a sustainable author career.
              </p>
            </div>
            <div>
              <h3 className="text-base font-display font-semibold text-black mb-3">Next step</h3>
              <p>
                If the vision resonates with you, this is the first step.
              </p>
            </div>
        </div>
      </Section>

      <div className="h-px bg-black/[0.03]" />

      {/* CTA */}
      <section id="cta" className="bg-white text-[#0a0a0a] py-20 md:py-24 border-t border-black/10 scroll-mt-32">
        <div className="mx-auto max-w-6xl px-6">
          <a href="mailto:Jemslivingg@gmail.com?subject=Manuscript%20Submission%20%E2%80%93%20Jemsliving%20Publishing" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0f0f0f] text-white font-bold uppercase text-sm tracking-widest rounded-sm hover:bg-brand-gold hover:text-black transition-colors">
            Submit via Email <Send size={16} />
          </a>
          <div className="mt-8 pt-8 border-t border-black/10 space-y-4">
            <Link to="/#newsletter" className="text-[#0a0a0a] hover:text-brand-gold font-medium transition-colors">
              Join the newsletter →
            </Link>
            <p className="text-sm text-[#0a0a0a]/70">
              By submitting your email, you agree to the{" "}
              <Link to="/privacy" className="text-brand-gold hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
