import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Helmet } from "react-helmet-async";

const rituals = [
  "Ganga Aarti (Private)",
  "Ganga Aarti (Group)",
  "Rudrabhishek",
  "Satyanarayan Katha",
  "Wedding Rituals",
  "Griha Pravesh",
  "Ritual Consultation",
];

export default function BookingSection() {
  const [date, setDate] = useState<Date>();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    rituals: [] as string[],
    message: "",
  });
  const sectionRef = useScrollReveal();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRitualToggle = (ritual: string) => {
    setForm((prev) => ({
      ...prev,
      rituals: prev.rituals.includes(ritual)
        ? prev.rituals.filter((r) => r !== ritual)
        : [...prev.rituals, ritual],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (form.rituals.length === 0) {
      alert("Please select at least one ritual");
      return;
    }
    
    const dateStr = date ? format(date, "PPP") : "Not specified";
    const ritualsStr = form.rituals.join(", ");
    const msg = encodeURIComponent(
      `🙏 *New Booking Request — Kashi Ganga Aarti Event*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Rituals:* ${ritualsStr}\n` +
      `*Date:* ${dateStr}\n` +
      `*Message:* ${form.message || "—"}`
    );
    // WhatsApp business number for booking inquiries
    window.open(`https://wa.me/919005071425?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full bg-[hsl(var(--background))] border border-[hsl(var(--primary)/0.3)] rounded-xl px-4 py-3 font-inter text-sm text-foreground placeholder:text-[hsl(var(--muted-foreground))] input-glow focus:border-[hsl(var(--primary))] outline-none transition-all";

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-[hsl(var(--muted)/0.2)] to-[hsl(var(--background))]">
      <Helmet>
        <title>Book Ganga Aarti — Kashi Ganga Aarti Event</title>
        <meta name="description" content="Reserve your Ganga Aarti ceremony in Varanasi. Private and group bookings with verified Pandits." />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Ganga Aarti Booking",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Kashi Ganga Aarti Event",
            "telephone": "+91-9005071425",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Gangotri Vihar Colony, Lane No. 7, Nagwa",
              "addressLocality": "Varanasi",
              "postalCode": "221005",
              "addressCountry": "IN"
            }
          }
        }`}</script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Reserve Your Ceremony
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
          Book a <span className="gradient-text">Sacred Ritual</span>
        </h2>
        <p className="text-center font-inter text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-12">
          Fill in the details below and we'll connect you with the perfect Pandit via WhatsApp.
        </p>

        <div
          ref={sectionRef}
          className="section-reveal bg-[hsl(var(--card))] border border-[hsl(var(--primary)/0.2)] rounded-3xl p-8 md:p-10 shadow-warm"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <legend className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                Select Rituals (You can choose multiple)
              </legend>
              <fieldset className="space-y-2.5" role="group">
                {rituals.map((ritual) => (
                  <div key={ritual} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`ritual-${ritual}`}
                      checked={form.rituals.includes(ritual)}
                      onChange={() => handleRitualToggle(ritual)}
                      className="w-4 h-4 rounded border-[hsl(var(--primary)/0.3)] bg-[hsl(var(--background))] cursor-pointer accent-[hsl(var(--primary))]"
                    />
                    <label
                      htmlFor={`ritual-${ritual}`}
                      className="ml-3 font-inter text-sm text-foreground cursor-pointer hover:text-[hsl(var(--primary))] transition-colors"
                    >
                      {ritual}
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>

              <div>
                <label className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        inputClass,
                        "flex items-center justify-between text-left",
                        !date && "text-[hsl(var(--muted-foreground))]"
                      )}
                    >
                      <span>{date ? format(date, "PPP") : "Pick a date"}</span>
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      disabled={(d) => d < new Date()}
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Message / Special Requests
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any specific requirements, occasion details, number of attendees…"
                value={form.message}
                onChange={handleChange}
                autoComplete="off"
                className={cn(inputClass, "resize-none")}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full font-inter font-bold text-white gradient-sunrise animate-pulse-glow hover:scale-[1.02] transition-transform text-base mt-2"
            >
              📱 Send Booking via WhatsApp
            </button>

            <p className="text-center font-inter text-xs text-[hsl(var(--muted-foreground))]">
              Clicking submit opens WhatsApp with your booking details pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
