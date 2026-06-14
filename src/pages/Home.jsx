import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import HeroSection from "../sections/HeroSection";
import StatsSection from "../sections/StatsSection";

import FloatingCall from "../components/common/FloatingCall";
import FloatingWhatsApp from "../components/common/FloatingWhatsApp.jsx";
import ScrollToTop from "../components/common/ScrollToTop";

import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import DoctorSection from "../sections/DoctorSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";
import StickyMobileBar from "../components/common/StickyMobileBar";
import FAQSection from "../sections/FAQSection";
import GallerySection from "../sections/GallerySection";

const Home = () => {
    return (
        <>
            <Navbar />

            <main className="pb-20 lg:pb-0">
                <HeroSection />
                <StatsSection />
                <AboutSection />
                <ServicesSection />
                <WhyChooseUsSection />
                <DoctorSection />
                <GallerySection />
                <TestimonialsSection />
                <ContactSection />
                <FAQSection />
            </main>

            <Footer />

            <FloatingCall />
            <FloatingWhatsApp />
            <ScrollToTop />

            <StickyMobileBar />
        </>
    );
};

export default Home;