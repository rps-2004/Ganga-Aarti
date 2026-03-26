import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AlertCircle, Clock, RefreshCw, DollarSign } from "lucide-react";

const policies = [
  {
    icon: Clock,
    title: "Cancellation 20–30 days before the event",
    description: "Full refund (100%) of the advance amount will be provided.",
  },
  {
    icon: RefreshCw,
    title: "Cancellation 10–20 days before",
    description: "50% of the advance amount will be refunded.",
  },
  {
    icon: DollarSign,
    title: "Cancellation within 10 days",
    description: "No refund of the advance amount will be provided.",
  },
  {
    icon: AlertCircle,
    title: "Refund Processing",
    description: "All eligible refunds will be processed within 2–3 working days.",
  },
];

export default function CancellationPolicySection() {
  const sectionRef = useScrollReveal();

  return (
    <section id="cancellation-policy" className="py-24 bg-gradient-to-b from-[hsl(var(--muted)/0.2)] to-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Policies & Terms
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
          Cancellation <span className="gradient-text">Policy</span>
        </h2>
        <p className="text-center font-inter text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-16">
          Clear and transparent cancellation and rescheduling policies designed for your convenience.
        </p>

        <div ref={sectionRef} className="section-reveal grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((policy, i) => {
            const Icon = policy.icon;
            return (
              <div
                key={policy.title}
                className="card-hover bg-[hsl(var(--card))] border border-[hsl(var(--primary)/0.18)] rounded-2xl p-8 flex flex-col group"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-sunrise flex items-center justify-center mb-4 glow-saffron group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                  {policy.title}
                </h3>

                <p className="font-inter text-sm text-[hsl(var(--muted-foreground))] leading-relaxed flex-1">
                  {policy.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional terms */}
        <div className="mt-16 bg-[hsl(var(--card))] border border-[hsl(var(--primary)/0.18)] rounded-2xl p-8">
          <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
            Cancellation & Refund Policy
          </h3>
          <div className="space-y-4 font-inter text-[hsl(var(--muted-foreground))] text-sm leading-relaxed">
            <p className="text-foreground font-semibold mb-4">We understand that plans may change. Our cancellation policy is designed to be fair to both parties:</p>
            <p>
              <span className="text-foreground font-semibold">Cancellation 20–30 days before the event:</span><br />
              Full refund (100%) of the advance amount will be provided.
            </p>
            <p>
              <span className="text-foreground font-semibold">Cancellation more than 10 days before the event (but less than 20 days):</span><br />
              50% of the advance amount will be refunded.
            </p>
            <p>
              <span className="text-foreground font-semibold">Cancellation within 10 days of the event:</span><br />
              No refund of the advance amount will be provided.
            </p>
            <p className="pt-4 border-t border-[hsl(var(--primary)/0.1)]">
              <span className="text-foreground font-semibold">Refund Processing:</span><br />
              All eligible refunds will be processed within 2–3 working days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
