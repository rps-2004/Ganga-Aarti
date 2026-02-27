import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
    ritual: "",
    message: "",
  });
  const sectionRef = useScrollReveal();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = date ? format(date, "PPP") : "Not specified";
    const msg = encodeURIComponent(
      `🙏 *New Booking Request — Divine Aarti*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `*Email:* ${form.email}\n` +
      `*Ritual:* ${form.ritual}\n` +
      `*Date:* ${dateStr}\n` +
      `*Message:* ${form.message || "—"}`
    );
    window.open(`https://wa.me/919999999999?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full bg-[hsl(var(--background))] border border-[hsl(var(--primary)/0.3)] rounded-xl px-4 py-3 font-inter text-sm text-foreground placeholder:text-[hsl(var(--muted-foreground))] input-glow focus:border-[hsl(var(--primary))] outline-none transition-all";

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-[hsl(var(--muted)/0.2)] to-[hsl(var(--background))]">
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
                <label className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                  Type of Ritual
                </label>
                <select
                  name="ritual"
                  required
                  value={form.ritual}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a ritual…</option>
                  {rituals.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
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
              <label className="block font-inter text-xs font-semibold text-foreground uppercase tracking-wider mb-1.5">
                Message / Special Requests
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Any specific requirements, occasion details, number of attendees…"
                value={form.message}
                onChange={handleChange}
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
