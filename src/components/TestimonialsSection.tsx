import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    stars: 5,
    quote:
      "The Ganga Aarti ceremony arranged by Divine Aarti was the most spiritually moving experience of my life. Pandit Rajeshwar's chanting sent chills down my spine. Every detail was perfect.",
    name: "Ananya Verma",
    city: "Mumbai",
    emoji: "🙏",
  },
  {
    stars: 5,
    quote:
      "We booked Rudrabhishek for my husband's birthday. Pandit Krishnanand performed it with such devotion and explained every step. Our family felt truly blessed.",
    name: "Priya Nair",
    city: "Bengaluru",
  },
  {
    stars: 5,
    quote:
      "Our wedding rituals were conducted beautifully at the Ghat. The team was professional, the ambience was divine, and our guests were mesmerized. Highly recommended!",
    name: "Arjun & Meera Kapoor",
    city: "Delhi",
  },
  {
    stars: 5,
    quote:
      "I traveled from the UK specifically for Ganga Aarti and the team made it seamlessly easy. The private ceremony was intimate and deeply moving. Will come again.",
    name: "Kavitha Rajan",
    city: "London, UK",
  },
  {
    stars: 5,
    quote:
      "Griha Pravesh puja done with full Vedic rituals for our new home. Pandit Shivdayal made the entire process smooth. Our home feels blessed.",
    name: "Rohit Sharma",
    city: "Varanasi",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 justify-center mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[hsl(var(--secondary))] text-xl">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useScrollReveal();
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer.current);
  }, []);

  const go = (dir: 1 | -1) => {
    clearInterval(timer.current);
    setCurrent((c) => (c + dir + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--muted)/0.3)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Devotee Voices
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-16">
          What <span className="gradient-text">Devotees</span> Say
        </h2>

        <div ref={sectionRef} className="section-reveal relative">
          {/* Card */}
          <div className="bg-[hsl(var(--card))] border border-[hsl(var(--primary)/0.2)] rounded-3xl p-10 text-center shadow-warm min-h-[280px] flex flex-col items-center justify-center transition-all duration-500">
            <Stars count={t.stars} />
            <p className="font-playfair italic text-xl text-foreground leading-relaxed mb-6 max-w-2xl">
              "{t.quote}"
            </p>
            <p className="font-inter font-semibold text-foreground">{t.name}</p>
            <p className="font-inter text-sm text-[hsl(var(--muted-foreground))]">{t.city}</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-[hsl(var(--primary)/0.3)] flex items-center justify-center text-[hsl(var(--primary))] hover:gradient-sunrise hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { clearInterval(timer.current); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "gradient-sunrise w-6"
                      : "bg-[hsl(var(--primary)/0.25)]"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-[hsl(var(--primary)/0.3)] flex items-center justify-center text-[hsl(var(--primary))] hover:gradient-sunrise hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
