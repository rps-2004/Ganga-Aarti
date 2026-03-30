import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AddToPlanSection from "@/components/AddToPlanSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CancellationPolicySection from "@/components/CancellationPolicySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>Book Ganga Aarti in Varanasi | Verified Pandit Booking | Kashi Ganga Aarti Events</title>
        <meta name="description" content="Book authentic Ganga Aarti ceremonies in Varanasi with verified Pandits. Private & group bookings at Dashashwamedh Ghat. Rudrabhishek, Satyanarayan Katha, Wedding Rituals available. +91-9005071425" />
        <meta name="keywords" content="Ganga Aarti booking Varanasi, book Pandit Varanasi, Ganga Aarti ceremony, Rudrabhishek, Hindu rituals, Dashashwamedh Ghat aarti, Varanasi tours, sacred ceremonies" />
  <link rel="canonical" href="https://kashigangaartievents.com" />
        <meta property="og:title" content="Book Ganga Aarti in Varanasi | Verified Pandits" />
        <meta property="og:description" content="Authentic Ganga Aarti, Rudrabhishek, and Hindu ritual bookings in Varanasi with verified Pandits." />
        <meta property="og:image" content="/ganga-aarti.jpeg" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AddToPlanSection />
      <BookingSection />
      {/* <TestimonialsSection /> */}
      <GallerySection />
      <FAQSection />
      <CancellationPolicySection />
      <ContactSection />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
};

export default Index;
