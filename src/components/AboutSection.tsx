import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, FileText } from "lucide-react";

const stats = [
  { value: "500+", label: "Sacred Ceremonies" },
  { value: "50+", label: "Verified Pandits" },
  { value: "15+", label: "Years of Tradition" },
  { value: "20K+", label: "Devotees Served" },
];

export default function AboutSection() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-[hsl(var(--background))] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Our Story
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-16">
          Where Devotion Meets{" "}
          <span className="gradient-text">Divinity</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div ref={leftRef} className="section-reveal">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Sacred City of Varanasi
            </h3>
            <p className="font-inter text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
              Varanasi — one of the world's oldest living cities — stands as the spiritual heart of Hinduism. 
              Its ancient ghats, rising from the sacred Ganges, have witnessed millennia of prayer, ritual, 
              and divine connection. Every evening, as the sun dips below the horizon, the Ganga Aarti transforms 
              Assi Ghat into a sea of flame and devotion.
            </p>
            <p className="font-inter text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
              The <strong className="text-foreground">Ganga Aarti</strong> is not merely a ceremony — it is a living prayer. 
              Priests chant Vedic hymns, swing enormous brass lamps in rhythmic arcs, and invoke the blessings 
              of Mother Ganga for all those who gather on her banks. It is an experience that transcends religion 
              and touches the soul.
            </p>
            <p className="font-inter text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              At <strong className="text-foreground">Kashi Ganga Aarti Events</strong>, our mission is to connect sincere devotees 
              worldwide with authentic, verified Pandits who carry these sacred traditions with integrity and reverence — 
              making every ceremony deeply personal and spiritually fulfilling.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--primary)/0.15)] rounded-xl p-4 text-center"
                >
                  <p className="font-playfair text-2xl font-bold gradient-text">{s.value}</p>
                  <p className="font-inter text-xs text-[hsl(var(--muted-foreground))] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder column */}
          <div ref={rightRef} className="section-reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="relative">
              {/* Main image slot */}
              <div className="rounded-2xl overflow-hidden border-2 border-[hsl(var(--primary)/0.3)] shadow-warm aspect-[4/5]">
                <img
                  src="/ganga-aarti.jpeg"
                  alt="Ganga Aarti ceremony at Dashashwamedh Ghat, Varanasi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent card */}
              <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--background))] border border-[hsl(var(--primary)/0.3)] rounded-xl p-4 shadow-warm">
                <p className="font-playfair text-lg font-bold gradient-text">Est. 2009</p>
                <p className="font-inter text-xs text-[hsl(var(--muted-foreground))]">Serving with devotion</p>
              </div>
              {/* Top-right decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full gradient-sunrise opacity-20 blur-xl" />
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mt-20 pt-20 border-t border-[hsl(var(--primary)/0.1)]">
          <div className="max-w-4xl mx-auto">
            <div ref={useScrollReveal()} className="section-reveal text-center">
              <p className="font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
                Our Work
              </p>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                View Our <span className="gradient-text">Portfolio</span>
              </h3>
              <p className="font-inter text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto mb-8">
                Explore our comprehensive portfolio showcasing sacred ceremonies, verified Pandits and the sacred traditions we uphold. Download to learn more about our services and commitment to authenticity.
              </p>

              <a
                href="/portfolio.pdf"
                download="Kashi-Ganga-Aarti-Portfolio.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-semibold text-white gradient-sunrise glow-saffron hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                <FileText size={20} />
                <span>Download Portfolio</span>
                <Download size={20} />
              </a>

              <p className="font-inter text-xs text-[hsl(var(--muted-foreground))] mt-4">
                PDF • Comprehensive guide to our services and sacred traditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
