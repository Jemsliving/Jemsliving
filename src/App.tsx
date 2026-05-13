/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { 
  BookOpen, 
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
import emptyWorldExpandedCover from "./assets/empty-world-expanded-edition-cover.png";
import mainCharacterCover from "./assets/8786A8EB-A81E-4D32-A22E-D1D279502FD6_1_201_a.jpeg";
import jemimaPortrait from "./assets/Jemima ceesay.jpeg";
import Publishing from "./pages/Publishing";
import Privacy from "./pages/Privacy";
import Welcome from "./pages/Welcome";
import EmptyWorld from "./pages/EmptyWorld";
import MainCharacterPlaybook from "./pages/MainCharacterPlaybook";
import WritingVsAI from "./pages/WritingVsAI";
import ArcReaders from "./pages/ArcReaders";
import ForAuthors from "./pages/ForAuthors";
import NewsletterForm from "./components/NewsletterForm";

function PublishingComingSoon() {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-lg w-full text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-display text-white tracking-[0.2em] uppercase">
          Publishing
        </h1>
        <p className="text-lg md:text-xl font-display text-brand-gold tracking-[0.12em] uppercase">
          Anticipated 2027–2028
        </p>
        <div className="h-px w-12 mx-auto bg-white/20" />
        <p className="text-brand-accent/90 text-base md:text-lg leading-relaxed font-sans">
          Jemsliving Publishing is in development, with services planned to roll out between 2027 and 2028. We will share a detailed timeline as milestones are confirmed.
        </p>
        <p className="text-sm text-brand-accent/60 italic">
          Built by an author, for authors.
        </p>
      </div>
    </div>
  );
}

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

interface ReaderTestimonial {
  quote: string;
  name: string;
  bookTitle: string;
  platform?: string;
  rating?: number;
  ratingLabel?: string;
  isFeatured?: boolean;
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
      amazon: "https://amzn.to/3PLAx01",
      barnesAndNoble: "https://www.barnesandnoble.com/s/An+Empty+World+With+You+Jemima+Ceesay",
      waterstones: "https://www.waterstones.com/books/search/term/an+empty+world+with+you+jemima+ceesay",
      adlibris: "https://www.adlibris.com/se/sok?q=jemima+ceesay",
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
      amazon: "https://amzn.to/4seMYid"
    }
  }
];

const READER_TESTIMONIALS: ReaderTestimonial[] = [
  {
    quote: BOOKS[0].reviews[0].text,
    name: BOOKS[0].reviews[0].author,
    bookTitle: BOOKS[0].title,
    platform: "Amazon",
    rating: 5,
    isFeatured: true
  },
  {
    quote: BOOKS[0].reviews[1].text,
    name: BOOKS[0].reviews[1].author,
    bookTitle: BOOKS[0].title,
    platform: "Amazon",
    rating: 5,
    isFeatured: true
  },
  {
    quote: "4.5 stars. I am dehydrated. I would not wish such heartbreak on my worst enemy. And the ending. My jaw was on the floor. I liked the style and atmosphere. There is a lot of inner monologue, which I loved. I am a big fan of post-apocalyptic books and movies, so I was instantly hooked. At the beginning there were things that I thought were weird and non-realistic, but trust me it all ties together at the end. I would have loved it more if there was a more coherent explanation on what happened, but I also lowkey like that it is open to interpretation.",
    name: "Alexandra",
    bookTitle: BOOKS[0].title,
    platform: "Goodreads",
    ratingLabel: "4.5 stars"
  },
  {
    quote: "Ohh, how I love having my heart broken... 5 stars.",
    name: "Britt de Korte",
    bookTitle: BOOKS[0].title,
    platform: "Goodreads",
    rating: 5
  },
  {
    quote: "Beautifully written. I was looking for something a little outside of normal read and I am so glad I stumbled upon this book. Jemima wrote a beautiful story. Although it was fast-paced and short, I was drawn in by the characters and her writing. Definitely did not see the ending coming but it really tied the story up nicely. Can not wait to read more of her works!",
    name: "Kayla",
    bookTitle: BOOKS[0].title,
    platform: "Goodreads",
    rating: 3
  },
  {
    quote: "I devoured this book in less than a day. The writing is so easy to follow and takes you on the adventure with the main character. You will feel all the feels in this book. I love that it is quick and that the plot twist got me good! The author is super sweet. I DM'd her on TikTok letting her know I loved the book and she responded so quick and was very humble and kind. I cannot wait to read more of her writing in the future.",
    name: "Reader",
    bookTitle: BOOKS[0].title,
    platform: "Goodreads",
    rating: 5
  },
  {
    quote: "This book's descriptions are honestly amazing. Yes, they can be heavy or lengthy at times, but I did not mind that because a high majority of the time they were beautiful descriptions. Despite only being 160 pages, this did not feel rushed to me at all, but I would have liked to see more interactions between the two characters and how their banter built. The ending honestly had me in tears. Partial mixed feelings about the very end, but in my opinion it was handled in a much better way than some books like this are. I loved this book a lot and definitely recommend this if you are looking for a short, cozy, beautifully described dystopian post-apocalyptic vibe book.",
    name: "starry skies",
    bookTitle: BOOKS[0].title,
    platform: "Goodreads",
    rating: 5
  },
  {
    quote: "Honestly, thank you so much for writing this book, it changed my POV on almost everything that is going on in my life and it made me calm. I wish I stumbled upon this book at least 5 months ago. but I am still glad that somehow (i don't remember how) found this book and decided to read it right away. you are an amazing writer and although this book is easy read, it still carried so much depth. keep writing. 🫶🩷",
    name: "Melli",
    bookTitle: BOOKS[1].title,
    platform: "Goodreads",
    rating: 5
  },
  {
    quote: "Some books reshape the way you see people and handle situations and this book is one of those. After reading, I knew I had to go on a personal retreat to change a lot of things about my life and to think it was written by a 23 year old! Girl, wow!!",
    name: "Books So Fly",
    bookTitle: BOOKS[1].title,
    platform: "Goodreads",
    rating: 4
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openReviewBookId, setOpenReviewBookId] = useState<string | null>(null);
  const [soundtrackBook, setSoundtrackBook] = useState<Book | null>(null);
  const [publishingComingSoonOpen, setPublishingComingSoonOpen] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({
    "main-character": true
  });

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
                    <p className="text-xs font-bold text-brand-gold">- {review.author}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        );
      })()}

      {/* Soundtrack popup */}
      {soundtrackBook && soundtrackBook.spotifyUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSoundtrackBook(null)}
            className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-brand-section border border-white/10 rounded-2xl shadow-2xl p-6 max-h-[80vh] overflow-hidden flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-display text-[#1DB954]">Official Soundtrack</h3>
              <button
                onClick={() => setSoundtrackBook(null)}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-brand-accent hover:text-white transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-sm text-brand-accent/80 leading-relaxed">
              Fun fact 🎈 The playlist was the emotional backdrop of the novel. &ldquo;The Night We Met&rdquo; by Lord Huron played on repeat through some of its most defining chapters.
            </p>
            <div className="mt-2">
              <a
                href={soundtrackBook.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1DB954] text-black text-[11px] font-bold uppercase tracking-widest hover:bg-[#1ED760] transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Listen on Spotify
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Publishing coming soon popup */}
      {publishingComingSoonOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPublishingComingSoonOpen(false)}
            className="absolute inset-0 bg-brand-bg/85 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-brand-section border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-sm font-display tracking-[0.25em] uppercase text-white">
                Publishing
              </h3>
              <button
                onClick={() => setPublishingComingSoonOpen(false)}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-brand-accent hover:text-white transition-colors shrink-0"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-lg font-serif text-brand-text/90">
              Anticipated launch: 2027–2028.
            </p>
            <p className="text-sm text-brand-accent/85 leading-relaxed">
              Jemsliving Publishing is in active development, with a phased rollout planned across 2027 and 2028. Subscribe to the newsletter for confirmed dates, submission windows, and new opportunities as they are announced.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/#newsletter"
                onClick={() => setPublishingComingSoonOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-brand-bg text-[11px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-black transition-colors"
              >
                Go to newsletter
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* Navigation - hidden on welcome page */}
      {!isWelcomePage && (
      <>
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-bg border-b border-white/15 shadow-md">
        <Link
          to="/"
          className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4 hover:opacity-90 transition-opacity"
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
            <span className="min-w-0 truncate font-serif text-sm sm:text-base uppercase tracking-[0.22em] text-white font-semibold antialiased">
              Jemsliving
            </span>
          )}
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="text-right leading-tight pr-0.5 hidden min-[400px]:block">
            <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.22em] font-bold text-brand-gold/95">
              Explore
            </span>
            <span className="block text-[8px] sm:text-[9px] uppercase tracking-[0.18em] font-semibold text-white/45 mt-0.5 max-w-[5.5rem] sm:max-w-none">
              Books, tips, publishing
            </span>
          </span>
          <button
            className="shrink-0 p-2 -mr-2 text-white hover:text-brand-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Site menu (all viewports) */}
      <div
        className={`fixed left-0 right-0 z-40 max-h-[calc(100vh-77px)] supports-[height:100dvh]:max-h-[calc(100dvh-77px)] overflow-y-auto overscroll-y-contain border-b border-white/15 bg-brand-bg touch-pan-y transform transition-transform duration-200 ease-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "77px" }}
      >
        <nav
          className="mx-auto grid w-full max-w-md min-[500px]:max-w-lg min-[900px]:max-w-2xl grid-cols-1 gap-x-8 gap-y-0.5 px-4 py-4 min-[400px]:grid-cols-2 min-[900px]:grid-cols-3 min-[400px]:gap-y-1 sm:px-6 sm:py-6 pb-[max(1rem,env(safe-area-inset-bottom,0px))] text-[10px] min-[380px]:text-[11px] uppercase tracking-[0.12em] min-[380px]:tracking-[0.18em] sm:tracking-[0.2em] font-bold text-white/90 antialiased"
        >
          {!isStandalonePage && (
            <div className="col-span-full border-b border-white/10 pb-4 mb-2 -mt-1">
              <p className="text-[11px] font-semibold tracking-[0.16em] text-white normal-case font-serif">
                Jemsliving Publishing <span className="text-white/45 font-sans">|</span>{" "}
                <span className="uppercase tracking-[0.2em]">Jemima Ceesay</span>
              </p>
              <p className="text-[10px] font-medium tracking-[0.14em] text-white/75 mt-2 italic font-sans normal-case">
                Built by an author, for authors.
              </p>
            </div>
          )}
          <Link to="/#books" className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center min-[400px]:py-2.5" onClick={() => setMobileMenuOpen(false)}>Books</Link>
          <Link to="/#about" className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center min-[400px]:py-2.5" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/writing-vs-ai" className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center leading-snug min-[400px]:py-2.5 min-[400px]:col-span-2" onClick={() => setMobileMenuOpen(false)}>Writing vs AI</Link>
          <Link to="/for-authors" className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center min-[400px]:py-2.5" onClick={() => setMobileMenuOpen(false)}>For authors</Link>
          <Link to="/arc-readers" className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center min-[400px]:py-2.5" onClick={() => setMobileMenuOpen(false)}>ARC readers</Link>
          <Link to="/#connect" className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center min-[400px]:py-2.5" onClick={() => setMobileMenuOpen(false)}>Connect</Link>
          <button
            type="button"
            className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center text-left min-[400px]:py-2.5"
            onClick={() => {
              setMobileMenuOpen(false);
              setPublishingComingSoonOpen(true);
            }}
          >
            Publishing
          </button>
          <Link to="/#newsletter" className="hover:text-brand-gold transition-colors py-3 min-h-[44px] flex items-center min-[400px]:py-2.5 min-[400px]:col-span-2" onClick={() => setMobileMenuOpen(false)}>Newsletter</Link>
        </nav>
      </div>

      {/* Menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      </>
      )}

      <Routes>
        <Route path="/publishing" element={<PublishingComingSoon />} />
        <Route path="/books/empty-world" element={<EmptyWorld />} />
        <Route path="/books/main-character-playbook" element={<MainCharacterPlaybook />} />
        <Route path="/arc-readers" element={<ArcReaders />} />
        <Route path="/writing-vs-ai" element={<WritingVsAI />} />
        <Route path="/for-authors" element={<ForAuthors />} />
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
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14">
              {/* Original cover → expanded edition (preliminary) */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 shrink-0">
                <div className="w-full max-w-[180px] sm:max-w-[200px] text-center sm:text-left">
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                    <img
                      src={emptyWorldCover}
                      alt="An Empty World With You, current edition"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-brand-bg/55 font-semibold">Current edition</p>
                </div>

                <ChevronRight
                  className="w-9 h-9 sm:w-10 sm:h-10 text-brand-bg/40 shrink-0 rotate-90 sm:rotate-0"
                  aria-hidden
                />

                <div className="w-full max-w-[180px] sm:max-w-[200px] text-center sm:text-left">
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/10">
                    <img
                      src={emptyWorldExpandedCover}
                      alt="An Empty World With You expanded edition, preliminary cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-brand-bg/55 font-semibold">Expanded edition</p>
                  <p className="mt-1 text-[9px] text-brand-bg/50 leading-snug">Preliminary cover</p>
                </div>
              </div>

              <div className="mx-auto max-w-xl space-y-8 md:space-y-10 text-center">
                <div className="space-y-5 md:space-y-6">
                  <h2 className="text-brand-bg font-display text-4xl md:text-6xl uppercase tracking-[0.34em] leading-[0.95]">
                    THE WORLD EXPANDS
                  </h2>
                  <p className="font-serif italic text-brand-bg/85 text-lg md:text-xl">
                    Coming soon
                  </p>
                </div>

                <p className="mx-auto max-w-lg text-brand-bg/70 text-sm md:text-base leading-relaxed">
                  I am revising and expanding <span className="italic text-brand-bg/85">An Empty World With You</span> from the ground up so the story gets what it deserves after a year of new experience and all the amazing feedback. The exciting sequel is also in the works and is planned to be released not long after the new expanded version.
                </p>
                <p className="mx-auto max-w-lg text-brand-bg/80 text-sm md:text-base font-medium">
                  Sign up for updates on the expanded edition, the sequel, and early news.
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
                      {formStatus === "idle" && "Sign up for updates"}
                      {formStatus === "submitting" && "..."}
                    </button>
                  </form>
                )}
                <a href="#books" className="inline-block mt-4 text-brand-bg/70 hover:text-brand-bg text-sm font-medium underline underline-offset-2">
                  View the collection →
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
          <p className="mt-3 text-brand-accent/80 text-lg">Stories that resonate. Both titles are being revised; purchase links will return when new editions are ready.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {BOOKS.map((book, index) => (
            <motion.div 
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 items-start group h-full"
            >
              <div 
                className={`relative w-40 sm:w-48 md:w-48 shrink-0 aspect-[2/3] overflow-hidden rounded-xl shadow-xl ${book.id === 'main-character' ? 'bg-[#1a1a1a]' : ''}`}
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

              <div className="flex-1 flex flex-col h-full">
                <div className="space-y-3 min-h-[140px]">
                  <h3 className="text-2xl md:text-3xl font-display text-brand-text">{book.title}</h3>
                  <p className="text-lg md:text-xl font-serif font-medium text-white/95 tracking-wide">
                    {book.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-accent/85 line-clamp-4">
                    {book.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="social-proof" className="py-24 px-6 border-t border-white/5 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-2 block">Loved by readers worldwide</span>
            <h2 className="text-4xl md:text-5xl font-display tracking-tight text-brand-text">What Readers Are Saying</h2>
            <p className="mt-3 text-brand-accent/80 text-lg">Thousands of readers have discovered these stories.</p>
          </div>

          <div className="mt-12 space-y-14">
            {BOOKS.map((book) => (
              <div key={book.id} className="space-y-5">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                  <h3 className="text-xl md:text-2xl font-display text-brand-text">{book.title}</h3>
                  <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/45">{book.genre}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {READER_TESTIMONIALS.filter((review) => review.bookTitle === book.title && review.isFeatured).map((review, index) => (
                    <article key={`${book.id}-${review.name}-${index}`} className="border border-white/12 bg-white/[0.03] p-6">
                      <p className="text-sm italic text-brand-accent/90 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                      <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-bold text-brand-gold">{review.name}</p>
                          {review.platform && (
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/45">{review.platform}</p>
                          )}
                        </div>
                        {review.ratingLabel && <p className="text-xs text-white/70">{review.ratingLabel}</p>}
                        {!review.ratingLabel && typeof review.rating === "number" && (
                          <p className="text-xs text-white/70">{`${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`}</p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>

                {READER_TESTIMONIALS.filter((review) => review.bookTitle === book.title && !review.isFeatured).length > 0 && (
                  <div className="mt-5 border border-white/12 bg-white/[0.02] p-5">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedReviews((prev) => ({
                          ...prev,
                          [book.id]: !prev[book.id]
                        }))
                      }
                      className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/65 hover:text-white"
                    >
                      {expandedReviews[book.id] ? "Hide Reader Notes" : "More Reader Notes"}
                    </button>
                    {expandedReviews[book.id] && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {READER_TESTIMONIALS.filter((review) => review.bookTitle === book.title && !review.isFeatured).map((review, index) => (
                          <article key={`${book.id}-more-${review.name}-${index}`} className="border border-white/10 bg-white/[0.02] p-5">
                            <p className="text-sm italic text-brand-accent/90 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                              <div>
                                <p className="text-sm font-bold text-brand-gold">{review.name}</p>
                                {review.platform && <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/45">{review.platform}</p>}
                              </div>
                              {review.ratingLabel && <p className="text-xs text-white/70">{review.ratingLabel}</p>}
                              {!review.ratingLabel && typeof review.rating === "number" && (
                                <p className="text-xs text-white/70">{`${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`}</p>
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
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
          </div>

          <NewsletterForm />
        </div>
      </section>

      {/* Connect Section - email only, no social icons */}
      <section id="connect" className="py-12 px-6 bg-brand-bg border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-1">Get in touch</span>
          <h2 className="text-2xl md:text-3xl font-display text-white">Connect with Jemima</h2>
          <a
            href="mailto:Jemslivingg@gmail.com"
            className="mt-6 inline-block text-white text-lg md:text-xl font-semibold italic hover:text-brand-gold transition-colors underline underline-offset-4 tracking-[0.02em]"
            style={{ fontFamily: '"Times New Roman", "Georgia", serif' }}
          >
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

