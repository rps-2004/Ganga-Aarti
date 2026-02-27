import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const galleryItems = [
  { src: "/evening-aarti.jpeg", caption: "Evening Aarti" },
  { src: "/gallery-1.jpeg", caption: "Ganga Aarti" },
  { src: "/gallery-2.jpeg", caption: "Ganga Aarti" },
  { src: "/gallery-3.jpeg", caption: "Ganga Aarti" },
  { src: "/gallery-4.jpeg", caption: "Ganga Aarti" },
  { src: "/gallery-5.jpeg", caption: "Ganga Aarti" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useScrollReveal();

  const lightboxGo = (dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-[hsl(var(--background))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-inter text-sm font-semibold tracking-[0.3em] uppercase text-[hsl(var(--primary))] mb-3">
          Sacred Moments
        </p>
        <h2 className="text-center font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our <span className="gradient-text">Gallery</span>
        </h2>
        <p className="text-center font-inter text-[hsl(var(--muted-foreground))] max-w-xl mx-auto mb-10">
          Glimpses of divine Ganga Aarti ceremonies and sacred moments.
        </p>

        {/* Grid */}
        <div ref={sectionRef} className="section-reveal grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="card-hover relative overflow-hidden rounded-2xl border border-[hsl(var(--primary)/0.15)] aspect-square group"
              aria-label={`Open ${item.caption}`}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-playfair text-white font-semibold text-sm">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); lightboxGo(-1); }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="w-full max-w-2xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].caption}
              className="w-full h-auto object-contain max-h-[80vh] rounded-2xl"
            />
            <p className="font-playfair text-xl text-white font-semibold text-center mt-4">{galleryItems[lightbox].caption}</p>
          </div>

          <button
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={(e) => { e.stopPropagation(); lightboxGo(1); }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
}
