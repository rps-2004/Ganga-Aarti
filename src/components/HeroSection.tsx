import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PHOTO_ANIMATIONS = [
  { image: "/ganga_1.jpeg", startDelay: "0s" },
  { image: "/ganga_2.jpeg", startDelay: "6s" },
  { image: "/ganga_3.jpeg", startDelay: "12s" },
  { image: "/ganga_4.jpeg", startDelay: "18s" },
];

export default function HeroSection() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? PHOTO_ANIMATIONS.length - 1 : prev - 1));
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prev) => (prev === PHOTO_ANIMATIONS.length - 1 ? 0 : prev + 1));
    setAutoPlay(false);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background — placeholder slot for Ganga Aarti photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom right, hsl(20 30% 5%), hsl(25 60% 12%), hsl(350 40% 12%))`,
        }}
        aria-hidden="true"
      >
        {/* Placeholder label */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <span className="text-white text-6xl font-playfair tracking-widest rotate-[-30deg] select-none">
            [ Ganga Aarti Photo ]
          </span>
        </div>
        {/* Warm overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Sunrise color wash */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(25_60%_20%/0.5)] via-transparent to-[hsl(350_50%_20%/0.4)]" />
      </div>

      {/* Full-area photo carousel with manual controls */}
      <style>{`
        @keyframes photoFadeInOut {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
      
      {/* Single photo display */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          backgroundImage: `url('${PHOTO_ANIMATIONS[currentPhotoIndex].image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px) brightness(0.6)",
        }}
        aria-hidden="true"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
      
      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 hover:scale-110"
        aria-label="Previous photo"
      >
        <ChevronLeft size={16} className="sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 p-1.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 hover:scale-110"
        aria-label="Next photo"
      >
        <ChevronRight size={16} className="sm:w-6 sm:h-6" />
      </button>
      
      {/* Photo indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {PHOTO_ANIMATIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentPhotoIndex(i);
              setAutoPlay(false);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentPhotoIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Sanskrit Shlok — positioned at top after navbar */}
        <p
          className="font-playfair text-lg sm:text-xl md:text-2xl font-bold italic text-[hsl(45_90%_90%)] animate-fade-in-up leading-relaxed"
          style={{ animationDelay: "0.05s", lineHeight: "1.8" }}
        >
          "देवि! सुरेश्वरि! भगवति! गंगे!<br className="block mb-3" />
          त्रिभुवनतारिणि तरलतरंगे।<br className="block mb-3" />
          शंकरमौलिविहारिणि विमले<br className="block mb-3" />
          मम मतिरास्तां तव पदकमले।"
        </p>
        

        {/* Spacer for main content */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <p
          className="font-inter text-sm font-medium tracking-[0.3em] uppercase mb-4 text-[hsl(var(--primary))] animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          🙏 Assi Ghat, Varanasi
        </p>

        <h1
          className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Sacred {" "}
          <span className="gradient-text">Ganga Aarti</span>
          <br />
          Verified Pandits
          <br />
        </h1>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up mt-8"
          style={{ animationDelay: "0.55s" }}
        >
          <button
            onClick={() => handleScroll("#booking")}
            className="px-8 py-4 rounded-full font-inter font-semibold text-white gradient-sunrise shadow-warm animate-pulse-glow hover:scale-105 transition-transform text-base"
          >
            🪔 Book Ganga Aarti
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
