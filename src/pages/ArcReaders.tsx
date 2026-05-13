import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const ARC_FORM_URL = "https://forms.gle/Ne4jpDWK7eqKigJ48";

export default function ArcReaders() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="pt-32 pb-24 px-6 border-b border-neutral-200">
        <div className="max-w-2xl mx-auto space-y-10">
          <Link
            to="/"
            className="inline-block text-[10px] uppercase tracking-[0.25em] text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Back to home
          </Link>

          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display leading-tight text-black tracking-[0.12em]">
              ARC READERS
            </h1>
            <p className="text-lg md:text-xl font-serif italic text-neutral-700 leading-relaxed">
              Advance copies, honest reviews, and readers who help bring a book into the world.
            </p>
          </header>

          <div className="space-y-6 text-[17px] md:text-lg leading-[1.75] text-neutral-900 font-serif font-medium antialiased">
            <p>
              I will need ARC readers for this next phase: the expanded edition of{" "}
              <span className="italic">An Empty World With You</span>, the sequel in progress, and hopefully many more launches to come. If you would like to be considered, please complete the short application below.
            </p>

            <a
              href={ARC_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Apply to be an ARC reader
              <ExternalLink size={16} className="shrink-0" aria-hidden />
            </a>
            <p className="text-sm text-neutral-600">
              Opens the official application in a new tab:{" "}
              <a href={ARC_FORM_URL} className="underline underline-offset-2 hover:text-neutral-900 break-all">
                {ARC_FORM_URL}
              </a>
            </p>
          </div>

          <div className="pt-8 border-t border-neutral-200 space-y-4">
            <h2 className="text-xl md:text-2xl font-display text-black">What is an ARC reader?</h2>
            <p className="text-[17px] md:text-lg leading-[1.75] text-neutral-900 font-serif font-medium antialiased">
              An ARC reader receives an advance copy of a finished or near-final book before publication, at no cost, and agrees to share a thoughtful, honest review once the work is available (for example on retail or reader community sites). It is a straightforward partnership: you get early access to the story, and your genuine feedback helps other readers decide whether the book is for them.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
