import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle, MapPin, Calendar, Users, Heart } from "lucide-react";

const planFeatures = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Choose from multiple time slots and easily adjust your ceremony date and time.",
  },
  {
    icon: Users,
    title: "Group Options",
    description: "Add family and friends to your ceremony booking. Include them in updates and confirmations.",
  },
  {
    icon: Heart,
    title: "Personalization",
    description: "Customize your ceremony intentions, mantras, and special requests for a truly personal experience.",
  },
  {
    icon: MapPin,
    title: "Location Options",
    description: "Choose from Dashashwamedh Ghat or other sacred locations in Varanasi for your ceremony.",
  },
];

export default function AddToPlanSection() {
  const sectionRef = useScrollReveal();

  const handleAddToPlan = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="add-to-plan" className="py-24 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="section-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
                Plan Your Experience
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
                Add Ganga Aarti to Your <span className="gradient-text">Varanasi Plan</span>
              </h2>
              <p className="font-inter text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
                Create a personalized itinerary for your spiritual journey. Choose your ceremony, select your preferred time, invite loved ones, and make your Varanasi pilgrimage truly unforgettable.
              </p>

              <div className="space-y-4 mb-8">
                {planFeatures.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full gradient-sunrise flex items-center justify-center flex-shrink-0 mt-1 glow-saffron">
                        <Icon size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-playfair text-lg font-semibold text-foreground mb-1">
                          {feature.title}
                        </h3>
                        <p className="font-inter text-sm text-[hsl(var(--muted-foreground))]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleAddToPlan}
                className="px-8 py-3 rounded-full font-inter font-semibold text-white gradient-sunrise glow-saffron hover:scale-105 transition-transform duration-300"
              >
                Add to My Plan
              </button>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[hsl(var(--primary)/0.3)] shadow-warm aspect-square md:aspect-square bg-gradient-to-br from-[hsl(25_60%_15%)] to-[hsl(350_40%_15%)]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-3 sm:mb-4 md:mb-6">📋</div>
                  <p className="font-playfair text-xl sm:text-2xl md:text-2xl font-bold text-white text-center mb-2 sm:mb-3 md:mb-4">
                    Your Spiritual Journey
                  </p>
                  <p className="font-inter text-xs sm:text-sm md:text-base text-center text-[hsl(45_60%_80%)] mb-4 sm:mb-6 md:mb-8 line-clamp-3">
                    Plan every detail of your Varanasi pilgrimage with our intelligent booking system.
                  </p>
                  <div className="space-y-2 sm:space-y-3 w-full max-w-xs">
                    {["Select Ceremony", "Choose Date & Time", "Invite Participants", "Confirm Booking"].map((step, i) => (
                      <div key={i} className="flex items-center gap-2 sm:gap-3">
                        <CheckCircle size={16} className="sm:w-5 sm:h-5 md:w-5 md:h-5 text-[hsl(var(--primary))] flex-shrink-0" />
                        <span className="font-inter text-xs sm:text-sm text-white truncate">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full gradient-sunrise opacity-20 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-[hsl(350_50%_20%)] opacity-10 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
