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
              What do we think about AI? Especially, what do we think about AI in book writing?
            </p>

            <p>
              As a writer and at the beginning of my use of AI, I didn&apos;t understand the problems with it at all. I, like many others, thought that it was an incredibly smart tool that could take everything to a new level.
            </p>

            <p>
              Producing books that are 100% based on AI is wrong and I think more and more people are realizing that. AI generates texts but also images based on the work of others. This has also ruined it for many authors out there, especially indie authors who even before AI had incredibly tough challenges like wearing all the hats themselves.
            </p>

            <p>
              Today, unfortunately, there are a lot of books, too many books that are completely AI produced, that are taking over several book platforms and contributing to the decline of indie authors&apos; books as many now see this category as something that is mostly &quot;mass produced&quot;.
            </p>

            <p>
              Writing books is an art and it&apos;s not just about money, for many authors including me it&apos;s about sharing their experiences and worlds that they&apos;ve often been carrying around for many, many years.
            </p>

            <p>
              I can guarantee you that there are many authors who have used AI and who use AI, sometimes just to brainstorm ideas or to get help with grammar while others let AI control a very large part of their book. This is also something the majority will never admit as this threatens their books, brand and future as authors.
            </p>

            <p>
              However, this is where I felt torn, is it completely wrong to use AI for minor things like grammar? Translation? Tips and information on how to write a book and publish one?
            </p>

            <p>
              Although the strong opinions against the use of AI exist and that some can go so far as to try to destroy someone&apos;s brand because of it, many apps, platforms and companies in their entirety are introducing AI into their services and products whether you want it or not.
            </p>

            <p>
              AI is not something that should replace you and your work completely, especially all the human things like creativity and I strongly believe that everything that is 95-100% human created in the future will be more appreciated and a thousand times more valuable.
            </p>

            <p>
              When I just published my books I used previous AI tools to create cover art and also for grammar and translation, which I will no longer do. I strongly believe that it is better to learn all the different skills in a human way as we will definitely have less of these skills in the future as people don&apos;t think they will need them. But also because your own work deserves it. And that is what I strive to encourage and help other authors with, to do most of it on their own.
            </p>

            <p>
              That said, it is extremely important to teach and educate instead of scaring people, some simply have no idea about the problem and not everyone has the resources to pay others to do what AI can do. There is also a big difference in my opinion between people who mass produce 100+ books a month and people who polish their own work.
            </p>

            <p>
              It is very important not to accuse someone of using AI if you are not 100% sure as it can ruin someone&apos;s career. One tip is to contact the author in question or do more research.
            </p>

            <p className="pt-8 mt-2 border-t border-neutral-200 text-neutral-900">
              If you are an editor, translator or book cover creator who does not use AI, please contact me via email at{" "}
              <a href="mailto:Jemslivingg@gmail.com" className="text-black underline underline-offset-[3px] decoration-neutral-400 hover:decoration-neutral-900">
                Jemslivingg@gmail.com
              </a>{" "}
              for possible collaboration in the future.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
