import { useEffect, useState } from "react";
import { Flame, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Book", href: "#booking" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(20_30%_10%/0.97)] backdrop-blur-md shadow-warm border-b border-[hsl(var(--primary)/0.2)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          aria-label="Divine Aarti home"
        >
          <span className="animate-flicker text-2xl">🪔</span>
          <span className="font-playfair text-xl font-bold text-[hsl(var(--cream))] group-hover:text-[hsl(var(--primary))] transition-colors">
            Divine Aarti
          </span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-inter font-medium text-[hsl(45_80%_88%)] hover:text-[hsl(var(--primary))] transition-colors duration-200 rounded-md hover:bg-[hsl(var(--primary)/0.1)]"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleNavClick("#booking")}
              className="ml-2 px-5 py-2 rounded-full text-sm font-inter font-semibold text-white gradient-sunrise animate-pulse-glow transition-transform hover:scale-105"
            >
              Book Now
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[hsl(var(--cream))] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[hsl(20_30%_10%/0.98)] backdrop-blur-md border-t border-[hsl(var(--primary)/0.2)] px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm font-inter font-medium text-[hsl(45_80%_88%)] hover:text-[hsl(var(--primary))] transition-colors rounded-md hover:bg-[hsl(var(--primary)/0.1)]"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
