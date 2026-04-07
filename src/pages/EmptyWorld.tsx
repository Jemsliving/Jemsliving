import { Link } from "react-router-dom";
import { motion } from "motion/react";
import emptyWorldCover from "../assets/An empty world with you.jpeg";
import emptyWorldHeroBg from "../assets/empty-world-hero-bg.png";
import emptyWorldPageBg from "../assets/empty-world-page-bg.png";

export default function EmptyWorld() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        animate={{ scale: [1, 1.03, 1], y: [0, -8, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={emptyWorldPageBg} alt="" className="w-full h-full object-cover opacity-45 blur-[2.2px]" />
      </motion.div>
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

      <section className="relative min-h-[78vh] w-full border-b border-white/10 overflow-hidden">
        {/* Cinematic layered background */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0"
          animate={{ scale: [1, 1.02, 1], y: [0, -6, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={emptyWorldHeroBg} alt="" className="w-full h-full object-cover opacity-40 blur-[1.2px]" />
        </motion.div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_85%_20%,rgba(120,140,120,0.18),transparent_35%),radial-gradient(circle_at_50%_85%,rgba(40,55,40,0.24),transparent_45%)]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85" />
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(220,230,220,0.08),transparent_45%)]"
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/75" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 min-h-[78vh] px-6 py-16 md:py-20 flex items-center justify-center"
        >
          <div className="max-w-4xl mx-auto text-center">
            <Link to="/" className="text-[10px] uppercase tracking-[0.25em] text-brand-gold hover:text-white transition-colors">
              Back to home
            </Link>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-display leading-[0.98] text-white">
              An Empty World With You
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-serif italic text-white/85">A Dystopian Survival Romance</p>
            <p className="mt-8 text-lg md:text-2xl leading-relaxed text-[#f2f2ee] max-w-3xl mx-auto font-medium">
              A deep dive into this fast-paced story about a girl who wakes from a coma to an empty world. No one is there, except a stranger who refuses to leave her side.
            </p>
            <div className="pt-10 flex justify-center">
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
        </motion.div>
      </section>
    </main>
  );
}
