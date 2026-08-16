import Header from "./section/Header";
import HeroSection from "./section/HeroSection";
import AboutSection from "./section/AboutSection";
import FacilitiesSection from "./section/FacilitiesSection";
import LocationSection from "./section/Locationsection";
import GallerySection from "./section/GallerySection";
import MembershipSection from "./section/Membershipsection";
import FaqSection from "./section/Faqsection";
import CtaSection from "./section/Ctasection";
import Footer from "./section/Footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <LocationSection />
      <MembershipSection />
      <GallerySection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}