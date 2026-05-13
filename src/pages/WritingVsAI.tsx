import { Link } from "react-router-dom";

export default function WritingVsAI() {
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
            <h1 className="text-4xl md:text-5xl font-display leading-tight text-black">Writing vs AI</h1>
            <p className="text-lg md:text-xl font-serif italic text-neutral-700 leading-relaxed">
              A personal perspective from a writer in the age of artificial intelligence.
            </p>
          </header>

          <article className="space-y-6 text-[17px] md:text-lg leading-[1.75] text-neutral-900 font-serif font-medium antialiased">
            <p className="text-xl md:text-2xl font-serif italic font-semibold text-black leading-snug">
              What do we think about AI? In particular, what do we think about AI in book writing?
            </p>

            <p>
              I want to encourage more people to hold on to all the incredible things that only we humans do and all the talent that each of us has. However you choose to use AI, it is important not to let it take over your creativity and steal other people&apos;s ideas. I know for myself how tough it would have been to discover parts of my own ideas and stories in someone else&apos;s work. And today I don&apos;t know how protected my creativity is from it.
            </p>

            <p>
              Personally, I do not believe books should be primarily created by AI, and I think more and more people are beginning to question where the line should be drawn between creative support tools and replacing human creativity entirely.
            </p>

            <p>
              It also destroys and complicates the situation for many authors out there, especially indie authors who even before AI had incredibly tough challenges such as having to wear all the hats themselves.
            </p>

            <p>
              Today, unfortunately, there are many books that are completely AI-produced, taking over several book platforms and contributing to the decline of books by indie authors as many now see this category as something that is mostly &quot;mass-produced&quot;.
            </p>

            <p>
              Writing books is an art and it is not just about money, for many writers including me it is about sharing their experiences and worlds that they have often carried around for many, many years.
            </p>

            <p>
              Like many others at the beginning of AI becoming more accessible, I initially viewed it mostly as a helpful creative tool. Since I had no budget at the time, I experimented with AI-generated cover concepts for my book before later becoming more interested in creating and developing things in a more personal and human way instead.
            </p>

            <p>
              I am very inspired and have started throwing myself into everything possible, including creating my own book covers and just doing my absolute best to create something on my own, which I think is much more fun anyway.
            </p>

            <p>
              I strongly believe that in the future, work that is genuinely human-made will be appreciated far more and become significantly more valuable.
            </p>

            <p className="pt-8 mt-2 border-t border-neutral-200 text-neutral-900">
              If you are an editor, translator or book cover designer who does not use AI, please contact me via email at{" "}
              <a href="mailto:Jemslivingg@gmail.com" className="text-black underline underline-offset-[3px] decoration-neutral-400 hover:decoration-neutral-900">
                Jemslivingg@gmail.com
              </a>{" "}
              for possible collaboration in the future.
            </p>

            <p className="italic text-neutral-600">
              Stay tuned for the future.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
