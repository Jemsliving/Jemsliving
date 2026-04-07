import { Link } from "react-router-dom";
import mainCharacterCover from "../assets/8786A8EB-A81E-4D32-A22E-D1D279502FD6_1_201_a.jpeg";

export default function MainCharacterPlaybook() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <section className="pt-32 pb-24 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
          <div className="w-full max-w-[300px]">
            <div className="aspect-[2/3] overflow-hidden rounded-xl shadow-2xl border border-white/10 bg-[#1a1a1a]">
              <img src={mainCharacterCover} alt="The Main Character Playbook" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <Link to="/" className="text-[10px] uppercase tracking-[0.25em] text-brand-gold hover:text-white transition-colors">
              Back to home
            </Link>
            <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-white/55">Self-Help / Personal Growth</span>
            <h1 className="text-4xl md:text-6xl font-display leading-tight">The Main Character Playbook</h1>
            <p className="text-xl md:text-2xl font-serif italic text-brand-accent/90">Unapologetically Rewrite Your Story</p>
            <p className="text-base leading-relaxed text-brand-accent/85 max-w-3xl">
              This is a practical and emotional reset for readers ready to stop shrinking and start showing up fully.
              The book explores confidence, boundaries, self-trust, and identity, with a direct voice designed to help
              you rewrite the story you have been settling for.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://amzn.to/4seMYid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#FF9900] hover:bg-[#ffad33] text-black font-bold uppercase tracking-wider text-sm transition-colors"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
