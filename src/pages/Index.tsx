import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <SectionTransition variant="cosmic-to-earth" />
      <Mission />
      <SectionTransition variant="earth-to-cosmic" />
      <About />
      <SectionTransition variant="cosmic-to-earth" />
      <Offerings />
      <SectionTransition variant="earth-to-cosmic" />
      <Testimonials />
      <SectionTransition variant="cosmic-to-earth" />
      <Blog />
      <SectionTransition variant="earth-to-cosmic" />
      <Newsletter />
      <SectionTransition variant="cosmic-to-dark-earth" />
      <Footer />
    </div>
  );
};

export default Index;
