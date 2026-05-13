import { Link } from "react-router-dom";

export default function ForAuthors() {
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
            <h1 className="text-4xl md:text-5xl font-display leading-tight text-black tracking-[0.08em]">
              FOR AUTHORS
            </h1>
          </header>

          <div className="space-y-6 text-[17px] md:text-lg leading-[1.75] text-neutral-900 font-serif font-medium antialiased">
            <p>
              This space is for all of you who dream of writing a book or who already have one. Some of what I will share here can also be used for other purposes than book writing.
            </p>
            <p>
              Since I published my books, I have come to a lot of insight. It is tough to share your own work. To be so happy with the end result at first but to slowly but surely question it over time. That has been my author journey in a nutshell.
            </p>
            <p>
              There is so much I go around thinking about that many around me don&apos;t understand and I think I&apos;m not the only one. So from that will come some advice but also just general thoughts that I think many out there can relate to.{' '}
              <span aria-label="love">&lt;3</span>
            </p>
            <Link
              to="/#newsletter"
              className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
