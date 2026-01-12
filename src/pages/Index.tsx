import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <Mission />
      <About />
      <Offerings />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
