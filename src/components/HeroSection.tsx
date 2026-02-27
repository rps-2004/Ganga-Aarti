const PARTICLES = [
  { top: "15%", left: "8%", delay: "0s", size: "text-2xl" },
  { top: "25%", left: "92%", delay: "0.8s", size: "text-xl" },
  { top: "70%", left: "5%", delay: "1.5s", size: "text-3xl" },
  { top: "80%", left: "90%", delay: "0.3s", size: "text-2xl" },
  { top: "40%", left: "3%", delay: "2s", size: "text-lg" },
  { top: "55%", left: "95%", delay: "1.2s", size: "text-xl" },
  { top: "10%", left: "50%", delay: "0.6s", size: "text-2xl" },
  { top: "88%", left: "45%", delay: "1.8s", size: "text-lg" },
];

export default function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — placeholder slot for Ganga Aarti photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, hsl(20 30% 5%), hsl(25 60% 12%), hsl(350 40% 12%))`,
        }}
        aria-hidden="true"
      >
        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="text-white text-6xl font-playfair tracking-widest rotate-[-30deg] select-none">
            [ Ganga Aarti Photo ]
          </span>
        </div>
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Sunrise color wash */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(25_60%_20%/0.5)] via-transparent to-[hsl(350_50%_20%/0.4)]" />
      </div>

      {/* Floating diya particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute pointer-events-none select-none animate-float"
          style={{
            top: p.top,
            left: p.left,
            animationDelay: p.delay,
            animationDuration: `${3.5 + i * 0.4}s`,
            fontSize: p.size === "text-3xl" ? "1.875rem" : p.size === "text-2xl" ? "1.5rem" : p.size === "text-xl" ? "1.25rem" : "1.125rem",
          }}
          aria-hidden="true"
        >
          🪔
        </span>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className="font-inter text-sm font-medium tracking-[0.3em] uppercase mb-4 text-[hsl(var(--primary))] animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          🙏 Dashashwamedh Ghat, Varanasi
        </p>

        <h1
          className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 text-white animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Experience{" "}
          <span className="gradient-text">Divine</span>
          <br />
          Ganga Aarti
          <br />
          <span className="italic font-normal text-4xl sm:text-5xl md:text-6xl text-[hsl(45_90%_90%)]">
            in Varanasi
          </span>
        </h1>

        <p
          className="font-inter text-lg sm:text-xl text-[hsl(45_60%_85%)] mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Connect with trusted Pandits for authentic rituals and sacred
          ceremonies on the banks of the holy Ganges.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.55s" }}
        >
          <button
            onClick={() => handleScroll("#booking")}
            className="px-8 py-4 rounded-full font-inter font-semibold text-white gradient-sunrise shadow-warm animate-pulse-glow hover:scale-105 transition-transform text-base"
          >
            🪔 Book Ganga Aarti
          </button>
          <button
            onClick={() => handleScroll("#pandits")}
            className="px-8 py-4 rounded-full font-inter font-semibold text-white border border-[hsl(var(--primary)/0.6)] bg-[hsl(0_0%_100%/0.08)] backdrop-blur-sm hover:bg-[hsl(var(--primary)/0.15)] hover:border-[hsl(var(--primary))] transition-all text-base"
          >
            🧘 Talk to a Pandit
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce opacity-60">
          <div className="w-6 h-10 border-2 border-[hsl(45_80%_75%/0.5)] rounded-full mx-auto flex items-start justify-center pt-2">
            <div className="w-1 h-2.5 bg-[hsl(var(--primary))] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
