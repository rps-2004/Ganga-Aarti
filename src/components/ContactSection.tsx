import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Phone, Mail } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Gangotri Vihar Colony, Lane No. 7", "Nagwa, near Ravidas Park", "Aasighat, Varanasi 221005"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91-9005071425", "Mon – Sun: 6 AM – 9 PM", "Hindi & English"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["kashi.gangaarti510@gmail.com", "We reply within 2 hours", ""],
  },
];

export default function ContactSection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[hsl(var(--muted)/0.2)] to-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Get in Touch
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
          Contact <span className="gradient-text">Us</span>
        </h2>
        <p className="text-center font-inter text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-16">
          Reach out to us for bookings, inquiries, or to simply learn more about our services.
        </p>

        <div ref={sectionRef} className="section-reveal">
          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="card-hover bg-[hsl(var(--card))] border border-[hsl(var(--primary)/0.18)] rounded-2xl p-6 text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full gradient-sunrise flex items-center justify-center mb-4 glow-saffron">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
                    {card.title}
                  </h3>
                  {card.lines.map((line, i) => (
                    <p key={i} className="font-inter text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Google Map embed */}
          <div className="rounded-2xl overflow-hidden border border-[hsl(var(--primary)/0.2)] shadow-warm" style={{ height: 380 }}>
            <iframe
              title="Assi Ghat, Varanasi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1457573048086!2d83.0053!3d25.3109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2e36dc3e576b%3A0x7bd2c4e98fb15de5!2sDashashwamedh%20Ghat!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
