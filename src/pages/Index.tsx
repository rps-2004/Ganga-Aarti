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
        <title>Book Ganga Aarti | Kashi Ganga Aarti Event — Varanasi</title>
        <meta name="description" content="Book authentic Ganga Aarti ceremonies in Varanasi with verified Pandits. Private & group bookings at Dashashwamedh Ghat." />
        <meta name="keywords" content="Ganga Aarti booking, Varanasi aarti booking, Pandit booking" />
        <link rel="canonical" href="https://divineaarti.com/" />
        <meta property="og:title" content="Book Ganga Aarti | Kashi Ganga Aarti Event" />
        <meta property="og:description" content="Book authentic Ganga Aarti ceremonies in Varanasi with verified Pandits." />
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
