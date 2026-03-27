import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: "🪔",
    image: "/ganga_aarti.jpeg",
    title: "Ganga Aarti",
    subtitle: "Divine Fire Ceremony",
    description: "Witness the divine evening fire ceremony on the sacred banks of the Ganges with dedicated priests performing Vedic rituals.",
  },
  {
    icon: "💍",
    image: "/wedding.jpeg",
    title: "Wedding Aarti",
    subtitle: "Vedic Marriage Blessings",
    description: "Complete Vedic wedding ceremonies including Saptapadi, Kanyadaan, and all sacred Hindu marriage rites with divine blessings.",
  },
  {
    icon: "🔱",
    image: "/rudra_abhishek.jpeg",
    title: "Rudrabhishek",
    subtitle: "Sacred Shiva Puja",
    description: "A powerful Shiva abhishekam with chanting of Shri Rudram, abhishek with milk, honey, and holy water.",
  },
  {
    icon: "📿",
    image: "/satyanarayana_katha.jpeg",
    title: "Satyanarayan Katha",
    subtitle: "Divine Blessings",
    description: "A complete Vishnu puja and katha for prosperity, health, and divine blessings for families and communities.",
  },
  {
    icon: "🏠",
    image: "/grih_pravesh.jpeg",
    title: "Griha Pravesh",
    subtitle: "New Home Blessing",
    description: "Traditional housewarming puja to purify and bless your new home, inviting positive energies and divine protection.",
  },
  {
    icon: "🧘",
    image: "/ritual_consultation.jpeg",
    title: "Ritual Consultation",
    subtitle: "Personalized Guidance",
    description: "One-on-one consultation with experienced Pandits for personalized puja recommendations and spiritual guidance.",
  },
];

export default function ServicesSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[hsl(var(--muted)/0.3)] to-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Sacred Offerings
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="gradient-text">Services</span>
        </h2>
        <p className="text-center font-inter text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-16">
          Authentic ceremonies performed by verified Pandits, tailored to your spiritual needs.
        </p>

        <div
          ref={sectionRef}
          className="section-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className="card-hover bg-[hsl(var(--card))] border border-[hsl(var(--primary)/0.18)] rounded-2xl p-6 flex flex-col group overflow-hidden"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              {/* Image or Icon */}
              {service.image ? (
                <div className="w-full h-56 rounded-xl mb-4 overflow-hidden bg-[hsl(var(--muted)/0.5)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl gradient-sunrise flex items-center justify-center text-2xl mb-4 glow-saffron group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              )}

              {/* Title */}
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-0.5">
                {service.title}
              </h3>
              <p className="font-inter text-xs font-medium tracking-wide text-[hsl(var(--primary))] uppercase mb-3">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="font-inter text-sm text-[hsl(var(--muted-foreground))] leading-relaxed flex-1 mb-4">
                {service.description}
              </p>

              {/* CTA */}
              <a
                href="#booking"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-2.5 rounded-full text-center font-inter font-semibold text-sm text-white gradient-sunrise glow-saffron opacity-90 hover:opacity-100 transition-opacity"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
