/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  BookOpen, 
  ExternalLink, 
  ChevronRight,
  Send,
  Music,
  X,
  Quote,
  Menu,
  Star
} from "lucide-react";
import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import emptyWorldCover from "./assets/An empty world with you.jpeg";
import mainCharacterCover from "./assets/8786A8EB-A81E-4D32-A22E-D1D279502FD6_1_201_a.jpeg";
import jemimaPortrait from "./assets/Jemima ceesay.jpeg";
import Publishing from "./pages/Publishing";
import Privacy from "./pages/Privacy";
import Welcome from "./pages/Welcome";
import NewsletterForm from "./components/NewsletterForm";

// Types
interface Book {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  coverUrl: string;
  genre: string;
  links: {
    amazon: string;
    barnesAndNoble?: string;
    waterstones?: string;
    adlibris?: string;
    moreRetailers?: string;
  };
  accentColor: string;
  spotifyUrl?: string;
  reviews: {
    author: string;
    text: string;
    rating: number;
  }[];
}

const BOOKS: Book[] = [
  {
    id: "empty-world",
    title: "An Empty World With You",
    subtitle: "A Dystopian Survival Romance",
    description: "When Lo wakes up in a deserted hospital, the world as she knew it is gone. No answers, no explanations. Just silence. Cities lie empty, people have vanished and nature is slowly reclaiming what humanity left behind. Lo doesn’t know what happened or why she survived. All she knows is that she has to keep moving. Alone in a world frozen in time, survival becomes her only purpose until she meets Dexter and his dog, Alfa. Together, they move through abandoned cities and open roads, learning how to survive in a world where nothing feels certain anymore. Because even in the quietest place on Earth… nothing stays still forever.",
    coverUrl: emptyWorldCover,
    genre: "Dystopian Fiction",
    accentColor: "bg-brand-rose",
    spotifyUrl: "https://open.spotify.com/playlist/7vjo21ZrZR0NQ8UDNTPybG?si=ErILmSfwQfChFgsVAQq3XA",
    reviews: [
      { author: "Norma", text: "Wowwwww, I was blown away. Such a lovely, touching, soulful story. I could not put it down!!! It touched my heart and soul! The ending was just majestic. To Jemima Ceesay you are an outstanding, brilliant writer. I now have become your forever fan. I will look for more of your books. THANK YOU SO, SO MUCH FOR THIS PRECIOUS, TOUCHING NOVEL.", rating: 5 },
      { author: "Mia", text: "6 MILLION STARS!!! I don't usually read dystopians but this one had me hooked. The short chapters made it digestible, the characters were lovely, AND THE DOG!!! I'm in literal shambles from the ending, just WOW. Lo + Dexter forever.", rating: 5 }
    ],
    links: {
      amazon: "https://www.amazon.com/Empty-World-You-dystopian-survival/dp/9153151283",
      barnesAndNoble: "https://www.barnesandnoble.com/s/An+Empty+World+With+You+Jemima+Ceesay",
      waterstones: "https://www.waterstones.com/books/search/term/an+empty+world+with+you+jemima+ceesay",
      adlibris: "https://www.adlibris.com/sok?q=an+empty+world+with+you+jemima+ceesay",
      moreRetailers: "https://www.google.com/search?q=An+Empty+World+With+You+Jemima+Ceesay+buy"
    }
  },
  {
    id: "main-character",
    title: "The Main Character Playbook",
    subtitle: "Unapologetically Rewrite Your Story",
    description: "Have you ever looked around and thought, “Is this really my life?” The Main Character Playbook is your guide to rewriting the script. It’s for anyone who’s ready to stop shrinking, stop performing, and finally start showing up as the most powerful version of themselves. This isn’t about chasing perfection. It’s about choosing honesty. About protecting your energy, trusting your intuition, and walking away from what no longer fits. You were never meant to blend in. You were meant to become.",
    coverUrl: mainCharacterCover,
    genre: "Self-Help / Personal Growth",
    accentColor: "bg-brand-sage",
    reviews: [],
    links: {
      amazon: "https://www.amazon.com/Main-Character-Playbook-Unapologetically-Rewrite/dp/9153151313"
    }
  }
];

export default function App() {
  const location = useLocation();
  const isPublishingPage = location.pathname === "/publishing";
  const isStandalonePage = isPublishingPage || location.pathname === "/privacy";
  const isWelcomePage = location.pathname === "/welcome";

  useEffect(() => setMobileMenuOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openReviewBookId, setOpenReviewBookId] = useState<string | null>(null);

  const handleHeroNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg">
      {/* Book Modal */}
      {selectedBook && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBook(null)}
            className="absolute inset-0 bg-brand-bg/95 backdrop-blur-xl"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-4xl bg-brand-section border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row md:max-h-[90vh]"
          >
            <button 
              onClick={() => setSelectedBook(null)}
              className="absolute top-6 right-6 p-2 bg-white/5 border border-white/10 rounded-full text-brand-accent hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-2/5 shrink-0 aspect-[2/3] md:aspect-[2/3] md:max-h-[90vh]">
              <img src={selectedBook.coverUrl} alt={selectedBook.title} className="w-full h-full object-cover object-top" />
            </div>

            <div className="p-6 md:p-8 space-y-5 flex-1 min-h-0 overflow-y-auto flex flex-col">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-1 block">{selectedBook.genre}</span>
                <h2 className="text-2xl md:text-4xl font-display text-brand-text leading-tight">{selectedBook.title}</h2>
                <p className="text-lg font-serif font-medium text-brand-accent mt-1">{selectedBook.subtitle}</p>
              </div>

              <div className="space-y-2 -mt-1">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Buy now</h4>
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2">
                  <a href={selectedBook.links.amazon} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF9900] hover:bg-[#ffad33] text-black rounded-xl text-base font-bold transition-colors shadow-lg">
                    <img src="https://logo.clearbit.com/amazon.com" alt="" className="w-6 h-6 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    <span>Buy on Amazon</span>
                    <ExternalLink size={16} />
                  </a>
                  <div className="flex flex-wrap gap-2">
                    {selectedBook.links.barnesAndNoble && (
                      <a href={selectedBook.links.barnesAndNoble} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-brand-bg transition-colors">
                        <img src="https://logo.clearbit.com/barnesandnoble.com" alt="" className="w-4 h-4 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        B&N
                      </a>
                    )}
                    {selectedBook.links.waterstones && (
                      <a href={selectedBook.links.waterstones} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-brand-bg transition-colors">
                        <img src="https://logo.clearbit.com/waterstones.com" alt="" className="w-4 h-4 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        Waterstones
                      </a>
                    )}
                    {selectedBook.links.adlibris && (
                      <a href={selectedBook.links.adlibris} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-brand-bg transition-colors">
                        <img src="https://logo.clearbit.com/adlibris.com" alt="" className="w-4 h-4 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        Adlibris
                      </a>
                    )}
                    {selectedBook.links.moreRetailers && (
                      <a href={selectedBook.links.moreRetailers} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-white hover:text-brand-bg transition-colors">
                        <ExternalLink size={12} />
                        More
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Synopsis</h4>
                <p className="text-sm leading-relaxed text-brand-accent/80">{selectedBook.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Reviews popup */}
      {openReviewBookId && (() => {
        const book = BOOKS.find((b) => b.id === openReviewBookId);
        if (!book || book.reviews.length === 0) return null;
        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenReviewBookId(null)}
              className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-brand-section border border-white/10 rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-hidden flex flex-col"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h3 className="text-lg font-display text-brand-text">Reader Reviews</h3>
                <button
                  onClick={() => setOpenReviewBookId(null)}
                  className="p-2 rounded-full bg-white/5 border border-white/10 text-brand-accent hover:text-white transition-colors shrink-0"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-4 overflow-y-auto flex-1 min-h-0 pr-1">
                {book.reviews.map((review, i) => (
                  <div key={i} className="space-y-1 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                    <p className="text-sm italic text-brand-accent/90 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                    <p className="text-xs font-bold text-brand-gold">— {review.author}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        );
      })()}

      {/* Navigation - hidden on welcome page */}
      {!isWelcomePage && (
      <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-bg border-b border-white/15 shadow-md">
        <Link
          to="/"
          className="flex items-center gap-4 hover:opacity-90 transition-opacity"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (location.hash) window.history.replaceState(null, "", "/");
            }
          }}
        >
          <div className="w-11 h-11 rounded-full overflow-hidden bg-white flex items-center justify-center p-1.5 ring-1 ring-white/20 shadow-inner">
            <img
              src={logo}
              alt="Jemsliving Logo"
              className="w-full h-full object-contain"
            />
          </div>
          {isStandalonePage ? (
            <span className="font-serif text-white uppercase text-base tracking-[0.26em] font-semibold antialiased" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 1px rgba(0,0,0,0.5)' }}>Jemima Ceesay</span>
          ) : (
            <div className="flex flex-col">
              <span className="font-serif text-base md:text-lg tracking-[0.18em] uppercase leading-tight text-white font-semibold antialiased">Jemsliving Publishing</span>
              <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white/85 mt-1 italic antialiased">Built by an author, for authors.</span>
            </div>
          )}
        </Link>
        {!isStandalonePage && (
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <span className="font-serif text-white uppercase text-base tracking-[0.26em] font-semibold antialiased" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9), 0 0 1px rgba(0,0,0,0.5)' }}>Jemima Ceesay</span>
          </div>
        )}
        <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-bold text-white/90">
          <Link to="/#books" className="hover:text-white transition-colors antialiased">Books</Link>
          <Link to="/#about" className="hover:text-white transition-colors antialiased">About</Link>
          <Link to="/#connect" className="hover:text-white transition-colors antialiased">Connect</Link>
          <Link to="/publishing" className="hover:text-white transition-colors antialiased">Publishing</Link>
          <Link to="/#newsletter" className="hover:text-white transition-colors antialiased">Newsletter</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 -mr-2 text-white hover:text-brand-gold transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed left-0 right-0 z-40 pt-6 pb-8 px-6 bg-brand-bg border-b border-white/15 transform transition-transform duration-200 ease-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "77px" }}
      >
        <nav className="flex flex-col gap-6 text-[11px] uppercase tracking-[0.2em] font-bold text-white/90">
          <Link to="/#books" className="hover:text-brand-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Books</Link>
          <Link to="/#about" className="hover:text-brand-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/#connect" className="hover:text-brand-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Connect</Link>
          <Link to="/publishing" className="hover:text-brand-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Publishing</Link>
          <Link to="/#newsletter" className="hover:text-brand-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Newsletter</Link>
        </nav>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      </>
      )}

      <Routes>
        <Route path="/publishing" element={<Publishing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<>
      {/* Hero Section - Redesigned & Focused */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24 pb-24 md:pb-0">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* THE WORLD EXPANDS - sequel block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-14">
              {/* Book cover + caption */}
              <div className="shrink-0 w-full max-w-[200px] md:max-w-[220px]">
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                  <img
                    src={emptyWorldCover}
                    alt="An Empty World With You"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mx-auto max-w-xl space-y-8 md:space-y-10 text-center">
                <h1 className="font-serif text-brand-bg uppercase text-sm md:text-base tracking-[0.3em] font-semibold">Jemima Ceesay</h1>
                <div className="mx-auto h-px w-12 bg-brand-bg/25" />

                <div className="space-y-5 md:space-y-6">
                  <h2 className="text-brand-bg font-display text-4xl md:text-6xl uppercase tracking-[0.34em] leading-[0.95]">
                    THE WORLD EXPANDS
                  </h2>
                  <p className="font-serif italic text-brand-bg/85 text-lg md:text-xl">
                    Sequel in Progress
                  </p>
                </div>

                <p className="mx-auto max-w-lg text-brand-bg/70 text-sm md:text-base leading-relaxed">
                  The next chapter of Lo&rsquo;s journey is currently being written.<br />
                  Subscribe to receive release updates, exclusive previews, and early access announcements.
                </p>

                {formStatus === "success" ? (
                  <p className="text-brand-bg font-serif italic text-lg">Welcome to Jemsliving 💌 Thank you for wanting to be part of this journey.</p>
                ) : (
                  <form onSubmit={handleHeroNewsletterSubmit} className="mx-auto flex w-full max-w-md flex-col sm:flex-row items-center justify-center gap-3 p-2 md:p-0">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="flex-1 rounded-full border-2 border-brand-bg/20 bg-white px-5 py-3.5 text-sm text-brand-bg placeholder:text-brand-bg/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/40 focus:border-brand-gold/40"
                    />
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="shrink-0 rounded-full bg-brand-bg px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-gold hover:text-black transition-colors disabled:opacity-50 uppercase tracking-wider"
                    >
                      {formStatus === "idle" && "Get early access"}
                      {formStatus === "submitting" && "..."}
                    </button>
                  </form>
                )}
                <a href="#books" className="inline-block mt-4 text-brand-bg/70 hover:text-brand-bg text-sm font-medium underline underline-offset-2">
                  Or shop the books →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-white" />
        </div>
      </section>

      {/* Books Section - Compressed Grid */}
      <section id="books" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-12">
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-2 block">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-brand-text">Published Works</h2>
          <p className="mt-3 text-brand-accent/80 text-lg">Stories that resonate. Get your copy today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {BOOKS.map((book, index) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start group"
            >
              <div 
                onClick={() => setSelectedBook(book)}
                className={`relative w-full md:w-48 shrink-0 aspect-[2/3] overflow-hidden rounded-xl shadow-xl cursor-pointer ${book.id === 'main-character' ? 'bg-[#1a1a1a]' : ''}`}
              >
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
                {book.id === 'main-character' && (
                  <div 
                    className="absolute inset-0 pointer-events-none rounded-xl"
                    style={{ boxShadow: 'inset 0 0 25px 12px rgba(26,26,26,0.6)' }}
                  />
                )}
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] uppercase tracking-[0.2em] font-bold px-3 py-1 bg-white/5 border border-white/10 text-brand-accent rounded-full">
                    {book.genre}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-brand-text">{book.title}</h3>
                <p className="text-lg md:text-xl font-serif font-medium text-white/95 tracking-wide">{book.subtitle}</p>
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-brand-accent/85">
                    {book.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={book.links.amazon}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF9900] hover:bg-[#ffad33] text-black font-bold rounded-full text-[11px] uppercase tracking-wider transition-colors shrink-0"
                    >
                      Buy on Amazon
                      <ExternalLink size={14} />
                    </a>
                    {book.id === "empty-world" && book.reviews.length > 0 && (
                      <button
                        onClick={() => setOpenReviewBookId(book.id)}
                        className="inline-flex items-center gap-2 px-5 py-3 border border-white/30 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/10 transition-colors shrink-0"
                      >
                        <Star className="w-4 h-4 text-brand-gold fill-current" />
                        <span>Reviews</span>
                      </button>
                    )}
                  </div>
                </div>

                {book.spotifyUrl && (
                  <div className="pt-6 mt-4 border-t border-white/5 space-y-3">
                    <p className="text-xs text-brand-accent/70 italic leading-relaxed">
                      Fun fact: This playlist was the emotional backdrop of the novel. &ldquo;The Night We Met&rdquo; by Lord Huron played on repeat through some of its most defining chapters.
                    </p>
                    <a href={book.spotifyUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/30 text-[#1DB954] text-[10px] font-bold uppercase tracking-wider hover:bg-[#1DB954]/20 transition-colors w-fit">
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      Official Soundtrack
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section - Compact */}
      <section id="about" className="py-24 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={jemimaPortrait} 
                alt="Jemima Ceesay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display leading-tight text-brand-text">About Jemima</h2>
            <p className="text-xl md:text-2xl font-serif italic text-brand-text/80">
              From post-apocalyptic love to unapologetic self-belief, my work explores survival in all its forms.
            </p>
            <div className="space-y-6 text-sm leading-relaxed text-brand-accent/90">
              <p>
                I began writing <span className="italic text-brand-text">An Empty World With You</span> at eighteen with the ambition of one day publishing a novel. I did not know if it was good. I did not know if it would ever become anything. Life moved forward, doubts grew louder, and I let time pass. But I never let go of the dream.
              </p>
              <p>
                Five years later, I returned to that manuscript. Written during a dark and uncertain period of the pandemic, it carried loneliness, hope, and quiet resilience within it. I rewrote it, reshaped it, and transformed it into the book that exists today. It remains deeply personal to me because it balances darkness with hope, and confronts solitude, something I have always struggled with.
              </p>
              <p>
                During that same period, I wrote an entirely different kind of book.
              </p>
              <p>
                <span className="italic text-brand-text">The Main Character Playbook</span> emerged from lived experience. I have struggled with social anxiety, panic attacks, and periods of deep self-doubt. For a long time, I hesitated to take up space, even though I believe everyone deserves to. That book was not written from a place of having everything figured out, but from the decision to stop waiting for change and instead create it.
              </p>
              <p>
                It combines reflection with practical tools I used when life felt at its heaviest. My intention as an author is not simply to tell stories, but to move people, to stir something real, to make someone feel less alone, and at times, to give them the push to keep going.
              </p>
              <p>
                That is my brand. That is my work.
              </p>
              <p>
                Publishing something born from your inner world is terrifying. The only reason I continue is because of the readers who reach out, who share their reflections, and who leave their beautiful reviews. Their words remind me that stories matter.
              </p>
              <p>
                If you are one of them, thank you &lt;3
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Section - Teaser */}
      <section id="publishing" className="py-24 px-6 bg-brand-bg text-brand-text overflow-hidden relative border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display leading-tight">Jemsliving Publishing</h2>
          <p className="text-xl font-serif italic text-brand-gold mt-4">Built by an author, for authors.</p>
          <p className="text-base text-brand-accent/90 mt-6 leading-relaxed">
            A selective, partnership-driven imprint for emotionally intense, cinematic fiction. Strategic structure. Creative freedom. Long-term author growth.
          </p>
          <Link to="/publishing" className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-brand-text text-brand-bg font-bold uppercase text-[10px] tracking-widest rounded-lg hover:bg-brand-gold transition-colors">
            Learn more about Jemsliving Publishing <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* Newsletter Section - Kit embed (redirect to /welcome set in Kit dashboard) */}
      <section id="newsletter" className="py-24 px-6 bg-white border-t border-black/10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block">The Inner Circle</span>
            <h2 className="text-4xl md:text-5xl font-display text-brand-bg">Be the first to know.</h2>
            <p className="text-lg font-serif italic text-brand-bg/80 max-w-xl mx-auto leading-relaxed">
              Join for release updates, upcoming newsletters, behind-the-scenes insights, and early access as the world continues to expand.
            </p>
            <p className="text-sm text-brand-bg/60">No spam. Unsubscribe anytime.</p>
          </div>

          <NewsletterForm />
        </div>
      </section>

      {/* Connect Section - email only, no social icons */}
      <section id="connect" className="py-12 px-6 bg-brand-bg border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-1">Get in touch</span>
          <h2 className="text-2xl md:text-3xl font-display text-white">Connect with Jemima</h2>
          <a href="mailto:Jemslivingg@gmail.com" className="mt-6 inline-block text-white font-medium hover:text-brand-gold transition-colors underline underline-offset-4">
            Jemslivingg@gmail.com
          </a>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer className="py-16 px-6 border-t border-white/5 bg-brand-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-1">
              <img src={logo} alt="Jemsliving Logo" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <div className="text-2xl font-display tracking-widest uppercase text-white font-bold">Jemsliving Publishing</div>
              <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-bold">© 2026 Jemima Ceesay. All rights reserved.</p>
            </div>
          </div>
          
          <div className="flex gap-8 text-[8px] uppercase tracking-[0.3em] font-bold opacity-40">
            <a href="#books" className="hover:text-brand-accent transition-colors">Books</a>
            <a href="#connect" className="hover:text-brand-accent transition-colors">Connect</a>
            <a href="#publishing" className="hover:text-brand-accent transition-colors">Publishing</a>
            <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
        </>} />
      </Routes>
    </div>
  );
}

