import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "What types of aarti services do you provide?",
    answer: "We offer complete aarti experiences including Shankhnad, Agarbatti, Dhoop Aarti, Jhal Aarti, Nag Aarti, Phool Aarti, and concluding blessings with mantras.",
  },
  {
    question: "Do you provide all the required materials for the aarti?",
    answer: "Yes, we arrange all essential items required for the rituals. However, specific customization requests can also be accommodated.",
  },
  {
    question: "Can the aarti be customized as per our preferences?",
    answer: "Absolutely. We can tailor the sequence, rituals, and presentation based on your requirements and event type.",
  },
  {
    question: "How early should we book your services?",
    answer: "We recommend booking at least 2–3 weeks in advance to ensure availability, especially during peak seasons.",
  },
  {
    question: "Do you travel for events outside the city?",
    answer: "Yes, we do travel for outstation events. Additional travel and accommodation charges may apply.",
  },
  {
    question: "How long does a typical aarti session last?",
    answer: "The duration usually ranges from 30 to 60 minutes depending on the rituals included.",
  },
  {
    question: "What is the booking process?",
    answer: "Booking is confirmed after an initial discussion and payment of a token advance.",
  },
  {
    question: "Is the advance payment refundable?",
    answer: "Refundability depends on the timing of cancellation. Please refer to our cancellation policy below.",
  },
  {
    question: "Do you handle last-minute bookings?",
    answer: "We try our best, but availability cannot be guaranteed for last-minute requests.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useScrollReveal();

  return (
    <section id="faq" className="py-24 bg-[hsl(var(--background))]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Questions & Answers
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-center font-inter text-[hsl(var(--muted-foreground))] mb-16">
          Find answers to common questions about our services, ceremonies, and booking process.
        </p>

        <div ref={sectionRef} className="section-reveal space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-[hsl(var(--primary)/0.2)] rounded-xl overflow-hidden card-hover transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between bg-[hsl(var(--card))] hover:bg-[hsl(var(--card)/0.8)] transition-colors text-left"
              >
                <h3 className="font-playfair text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-[hsl(var(--primary))] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-6 py-4 bg-[hsl(var(--muted)/0.3)] border-t border-[hsl(var(--primary)/0.1)]">
                  <p className="font-inter text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
