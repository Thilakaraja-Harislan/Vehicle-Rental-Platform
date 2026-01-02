import { FeaturedSection } from "../components/FeaturedSection";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero/> 
      <FeaturedSection/>
      <Banner />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}