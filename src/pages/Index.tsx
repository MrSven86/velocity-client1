import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResidentialSection from "@/components/ResidentialSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ResidentialSection />
      <ServicesSection />
      <ReviewsSection />
      <GallerySection />
      <AboutSection />
      <ServiceAreasSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
