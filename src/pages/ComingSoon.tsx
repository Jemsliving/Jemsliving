import logo from "../assets/logo.png";

export default function ComingSoon() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-brand-bg bg-brand-bg flex flex-col items-center justify-center px-6 py-16 sm:py-24">
      <div className="max-w-lg w-full text-center space-y-10">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-white flex items-center justify-center p-2 ring-1 ring-white/20 shadow-inner">
            <img src={logo} alt="Jemsliving" className="w-full h-full object-contain" />
          </div>
          <p className="font-serif text-sm sm:text-base uppercase tracking-[0.24em] text-white/90 font-semibold">
            Jemima Ceesay
          </p>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-[0.2em] uppercase">
            Coming soon
          </h1>
          <div className="h-px w-12 mx-auto bg-white/20" />
          <p className="text-base sm:text-lg text-brand-accent/90 leading-relaxed font-sans">
            Jemima Ceesay is in the middle of rebranding and stepping into a slightly different direction: something greater and more exciting is on the way.
          </p>
          <p className="text-lg sm:text-xl font-display text-brand-gold tracking-[0.15em] uppercase">
            Stay tuned
          </p>
        </div>
      </div>
    </div>
  );
}
