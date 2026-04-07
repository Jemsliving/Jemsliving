import { Link } from "react-router-dom";
import emptyWorldCover from "../assets/An empty world with you.jpeg";

export default function EmptyWorld() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <section className="pt-32 pb-24 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-start">
          <div className="w-full max-w-[300px]">
            <div className="aspect-[2/3] overflow-hidden rounded-xl shadow-2xl border border-white/10">
              <img src={emptyWorldCover} alt="An Empty World With You" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <Link to="/" className="text-[10px] uppercase tracking-[0.25em] text-brand-gold hover:text-white transition-colors">
              Back to home
            </Link>
            <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-white/55">Dystopian Fiction</span>
            <h1 className="text-4xl md:text-6xl font-display leading-tight">An Empty World With You</h1>
            <p className="text-xl md:text-2xl font-serif italic text-brand-accent/90">A Dystopian Survival Romance</p>
            <p className="text-base leading-relaxed text-brand-accent/85 max-w-3xl">
              When Lo wakes up in a deserted hospital, the world as she knew it is gone. Cities lie empty and the silence is endless.
              As she moves through abandoned places searching for meaning, she discovers that survival is not only about staying alive,
              but also about what remains of hope, connection, and truth.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://amzn.to/3PLAx01"
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
