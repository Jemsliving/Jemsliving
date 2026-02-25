/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  BookOpen, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Instagram, 
  Globe, 
  ChevronRight,
  Send,
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Music,
  X,
  Quote
} from "lucide-react";
import React, { useState } from "react";

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
    coverUrl: "https://picsum.photos/seed/emptyworld/400/600",
    genre: "Dystopian Fiction",
    accentColor: "bg-brand-rose",
    spotifyUrl: "https://open.spotify.com/playlist/your-playlist-id",
    reviews: [
      { author: "E. Miller", text: "A hauntingly beautiful story of survival and connection. I couldn't put it down.", rating: 5 },
      { author: "Sarah J.", text: "The atmosphere is so thick you can feel the silence of the empty world.", rating: 5 }
    ],
    links: {
      amazon: "https://www.amazon.com/Empty-World-You-dystopian-survival/dp/9153151283",
      barnesAndNoble: "https://www.barnesandnoble.com/s/An+Empty+World+With+You+Jemima+Ceesay",
      waterstones: "https://www.waterstones.com/books/search/term/an+empty+world+with+you+jemima+ceesay"
    }
  },
  {
    id: "main-character",
    title: "The Main Character Playbook",
    subtitle: "Unapologetically Rewrite Your Story",
    description: "Have you ever looked around and thought, “Is this really my life?” The Main Character Playbook is your guide to rewriting the script. It’s for anyone who’s ready to stop shrinking, stop performing, and finally start showing up as the most powerful version of themselves. This isn’t about chasing perfection. It’s about choosing honesty. About protecting your energy, trusting your intuition, and walking away from what no longer fits. You were never meant to blend in. You were meant to become.",
    coverUrl: "https://picsum.photos/seed/playbook/400/600",
    genre: "Self-Help / Personal Growth",
    accentColor: "bg-brand-sage",
    reviews: [
      { author: "Marcus T.", text: "This book changed how I view my own potential. Truly empowering.", rating: 5 },
      { author: "Lina K.", text: "Practical, honest, and exactly what I needed to hear.", rating: 5 }
    ],
    links: {
      amazon: "https://www.amazon.com/Main-Character-Playbook-Unapologetically-Rewrite/dp/9153151313"
    }
  }
];

export default function App() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
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
            className="relative w-full max-w-4xl bg-brand-section border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedBook(null)}
              className="absolute top-6 right-6 p-2 bg-white/5 border border-white/10 rounded-full text-brand-accent hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="w-full md:w-2/5 shrink-0 aspect-[2/3] md:aspect-auto">
              <img src={selectedBook.coverUrl} alt={selectedBook.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-8 md:p-12 space-y-8 flex-1">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-2 block">{selectedBook.genre}</span>
                <h2 className="text-3xl md:text-5xl font-display text-brand-text leading-tight">{selectedBook.title}</h2>
                <p className="text-lg font-serif italic text-brand-accent mt-2">{selectedBook.subtitle}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Synopsis</h4>
                <p className="text-sm leading-relaxed text-brand-accent/80">{selectedBook.description}</p>
              </div>

              {selectedBook.spotifyUrl && (
                <div className="p-4 bg-brand-gold/5 border border-brand-gold/20 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
                      <Music size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">Official Soundtrack</p>
                      <p className="text-xs text-brand-text">Listen while you read</p>
                    </div>
                  </div>
                  <a href={selectedBook.spotifyUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-brand-gold text-brand-bg rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Open Spotify
                  </a>
                </div>
              )}

              <div className="space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Reader Reviews</h4>
                <div className="grid grid-cols-1 gap-4">
                  {selectedBook.reviews.map((review, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={10} className="fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                      <p className="text-xs italic text-brand-text/80 leading-relaxed">"{review.text}"</p>
                      <p className="text-[9px] uppercase tracking-widest font-bold text-brand-gold">— {review.author}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Available At</h4>
                <div className="flex flex-wrap gap-3">
                  <a href={selectedBook.links.amazon} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white text-brand-bg rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors">
                    Amazon <ExternalLink size={12} />
                  </a>
                  {selectedBook.links.barnesAndNoble && (
                    <a href={selectedBook.links.barnesAndNoble} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-bg transition-colors">
                      Barnes & Noble
                    </a>
                  )}
                  {selectedBook.links.waterstones && (
                    <a href={selectedBook.links.waterstones} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-brand-bg transition-colors">
                      Waterstones
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-1 shadow-sm border border-white/10">
            <img src="https://storage.googleapis.com/m-ai-studio-public-assets/jemima_logo.png" alt="Jemsliving Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-display tracking-widest uppercase leading-none text-brand-text font-bold">Jemsliving Publishing</span>
            <span className="text-[9px] uppercase tracking-[0.15em] font-medium text-brand-accent mt-1 italic">Built by an author, for authors.</span>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-accent">
          <a href="#books" className="hover:text-white transition-colors">Books</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#publishing" className="hover:text-white transition-colors">Publishing</a>
          <a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a>
        </div>
      </nav>

      {/* Hero Section - Redesigned & Focused */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24">
        <div className="max-w-4xl mx-auto w-full text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10 space-y-6"
          >
            <h1 className="text-7xl md:text-9xl font-display tracking-tighter text-brand-text leading-none">
              Jemima Ceesay
            </h1>
            <div className="h-px w-32 bg-brand-gold/40 mx-auto" />
          </motion.div>

          {/* Integrated Coming Soon - More Attractive & Clear */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 bg-white/[0.03] border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-xl shadow-2xl max-w-2xl mx-auto group hover:border-brand-gold/30 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-brand-gold/5 rounded-[2.5rem] blur-3xl -z-10 group-hover:bg-brand-gold/10 transition-all" />
            
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-4 block">The Next Chapter</span>
            <h3 className="text-3xl md:text-5xl font-serif italic text-brand-text mb-4">Something Big Is Coming</h3>
            <p className="text-sm md:text-base text-brand-accent leading-relaxed max-w-lg mx-auto mb-10">
              The highly anticipated sequel to <span className="italic text-brand-text font-medium">An Empty World With You</span> is currently in development. Expected late 2026.
            </p>

            {/* Direct Email Signup */}
            <form onSubmit={handleNewsletterSubmit} className="relative max-w-md mx-auto">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for VIP access" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 pr-32 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 transition-all text-brand-text text-xs"
              />
              <button 
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-brand-gold text-brand-bg rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50"
              >
                {formStatus === "idle" && "Get Access"}
                {formStatus === "submitting" && "..."}
                {formStatus === "success" && "Done!"}
              </button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-4"
          >
            <a href="#books" className="inline-flex items-center justify-center gap-3 px-12 py-4 bg-brand-text text-brand-bg rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold transition-all shadow-xl">
              Explore The Collection <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[180px]" />
        </div>
      </section>

      {/* Books Section - Compressed Grid */}
      <section id="books" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-12">
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-2 block">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-display tracking-tight text-brand-text">Published Works</h2>
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
                className="relative w-full md:w-48 shrink-0 aspect-[2/3] overflow-hidden rounded-xl shadow-xl border border-white/5 cursor-pointer"
              >
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:opacity-10 transition-opacity" />
                
                {/* Quick Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm">
                   <div className="flex flex-col gap-2 p-4 w-full text-center">
                     <span className="text-[8px] font-bold uppercase tracking-widest text-white mb-2">Click for Details</span>
                     <div className="flex flex-col gap-2">
                       <div className="px-4 py-2 bg-white text-brand-bg rounded-full text-[8px] font-bold uppercase tracking-widest">
                         View Info
                       </div>
                     </div>
                   </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[8px] uppercase tracking-[0.2em] font-bold px-3 py-1 bg-white/5 border border-white/10 text-brand-accent rounded-full">
                    {book.genre}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-brand-text">{book.title}</h3>
                <p className="text-sm font-serif italic text-brand-gold">{book.subtitle}</p>
                <p className="text-xs leading-relaxed text-brand-accent line-clamp-4">
                  {book.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section - Compact */}
      <section id="about" className="py-24 bg-brand-section">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative max-w-md mx-auto lg:mx-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/jemima/800/1000" 
                alt="Jemima Ceesay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-accent block">The Author</span>
            <h2 className="text-4xl md:text-5xl font-display leading-tight text-brand-text">About Jemima</h2>
            <blockquote className="text-xl md:text-2xl font-serif italic border-l border-brand-accent pl-8 py-2 text-brand-text/80">
              “From post-apocalyptic love to unapologetic self-belief, my books explore survival in all its forms.”
            </blockquote>
            <div className="space-y-6 text-sm leading-relaxed opacity-60">
              <p>
                I am an independent author who chose to self-publish in order to maintain full creative control and long-term ownership of my work. I began writing my debut novel <span className="italic text-brand-text">An Empty World With You</span> at eighteen and spent five years refining it before releasing it on my own terms.
              </p>
              <p>
                With my second book, <span className="italic text-brand-text">The Main Character Playbook</span>, I moved from fiction into lived experience. It combines personal reflection with practical guidance, encouraging readers to build confidence and step fully into their own narrative.
              </p>
              <p>
                Self-publishing has allowed me to build directly, intentionally, and independently. Across genres, my work centers on growth, resilience, and the courage to become.
              </p>
            </div>
            <div className="flex gap-6 pt-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 text-brand-accent rounded-full hover:bg-white hover:text-brand-bg transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 text-brand-accent rounded-full hover:bg-white hover:text-brand-bg transition-all">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Section - Cohesive Dark */}
      <section id="publishing" className="py-24 px-6 bg-brand-bg text-brand-text overflow-hidden relative border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[8px] uppercase tracking-[0.3em] text-brand-gold">
                <Sparkles size={12} /> Soft Launch
              </div>
              <h2 className="text-4xl md:text-6xl font-display leading-none">Jemsliving Publishing</h2>
              <p className="text-xl font-serif italic text-brand-accent">
                Selective International Imprint for Emotionally Intense Fiction.
              </p>
              <p className="text-base font-serif italic text-brand-gold">
                “Built by an author, for authors.”
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="p-3 w-fit bg-white/5 rounded-xl border border-white/10">
                    <Zap size={20} className="text-brand-gold" />
                  </div>
                  <h4 className="font-bold uppercase text-[9px] tracking-[0.3em] text-white">Our Focus</h4>
                  <ul className="space-y-2 text-xs text-brand-accent">
                    <li>• Emotionally intense fiction</li>
                    <li>• Cinematic love stories</li>
                    <li>• Psychological depth</li>
                    <li>• English-language manuscripts</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="p-3 w-fit bg-white/5 rounded-xl border border-white/10">
                    <ShieldCheck size={20} className="text-brand-gold" />
                  </div>
                  <h4 className="font-bold uppercase text-[9px] tracking-[0.3em] text-white">Our Approach</h4>
                  <ul className="space-y-2 text-xs text-brand-accent">
                    <li>• Creative respect</li>
                    <li>• Strategic distribution</li>
                    <li>• Shared commitment</li>
                    <li>• Global reach</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl border-white/10">
              <h3 className="text-3xl font-display mb-6">Apply for Consideration</h3>
              <p className="text-sm text-brand-accent/60 mb-8 leading-relaxed">
                We review a limited number of manuscripts each year. If your project aligns with our vision, we invite you to apply.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-accent/40">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors text-brand-text" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-accent/40">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors text-brand-text" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-accent/40">Book Title</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors text-brand-text" placeholder="Title or working title" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-accent/40">Genre</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors text-brand-text" placeholder="e.g. Contemporary Romance" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-accent/40">Short Pitch</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent transition-colors resize-none text-brand-text" placeholder="Tell us about your story..." />
                </div>
                <button type="button" className="w-full py-4 bg-brand-text text-brand-bg font-bold uppercase text-[9px] tracking-[0.3em] rounded-lg hover:bg-brand-accent transition-colors flex items-center justify-center gap-2">
                  Submit Manuscript <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Cohesive Dark */}
      <section id="newsletter" className="py-24 px-6 bg-brand-section border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block">The Inner Circle</span>
            <h2 className="text-4xl md:text-5xl font-display text-brand-text">Be the first to know.</h2>
            <p className="text-lg font-serif italic text-brand-accent max-w-xl mx-auto leading-relaxed">
              Sign up for exclusive updates, newsletters, and pre-sale access for the continuation of <span className="font-semibold italic text-brand-text">An Empty World With You</span>.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="relative max-w-md mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 pr-36 focus:outline-none focus:ring-1 focus:ring-brand-gold/20 transition-all text-brand-text"
            />
            <button 
              type="submit"
              disabled={formStatus === "submitting" || formStatus === "success"}
              className="absolute right-1.5 top-1.5 bottom-1.5 px-8 bg-brand-text text-brand-bg rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors disabled:opacity-50 shadow-lg"
            >
              {formStatus === "idle" && "Join Now"}
              {formStatus === "submitting" && "Joining..."}
              {formStatus === "success" && "Welcome!"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer className="py-16 px-6 border-t border-white/5 bg-brand-bg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-1">
              <img src="https://storage.googleapis.com/m-ai-studio-public-assets/jemima_logo.png" alt="Jemsliving Logo" className="w-full h-full object-contain" />
            </div>
            <div className="space-y-1 text-center md:text-left">
              <div className="text-2xl font-display tracking-widest uppercase text-white font-bold">Jemsliving Publishing</div>
              <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] font-bold">© 2026 Jemima Ceesay. All rights reserved.</p>
            </div>
          </div>
          
          <div className="flex gap-8 text-[8px] uppercase tracking-[0.3em] font-bold opacity-40">
            <a href="#books" className="hover:text-brand-accent transition-colors">Books</a>
            <a href="#publishing" className="hover:text-brand-accent transition-colors">Publishing</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="opacity-30 hover:opacity-100 hover:text-brand-accent transition-all"><Instagram size={20} /></a>
            <a href="#" className="opacity-30 hover:opacity-100 hover:text-brand-accent transition-all"><Globe size={20} /></a>
            <a href="#" className="opacity-30 hover:opacity-100 hover:text-brand-accent transition-all"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
