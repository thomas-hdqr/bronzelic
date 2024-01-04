import Header from "../../components/Header.jsx";
import CarrouselMain from "../../components/CarrouselMain.jsx";
import AboutUs from "../../components/AboutUs.jsx";
import Story from "../../components/Story.jsx";
import Featured from "../../components/Featured.jsx";
import Reviews from "../../components/Reviews.jsx";
import BookAppointment from "../../components/BookAppointment.jsx";
import Instagram from "../../components/Instagram.jsx";
import Subscribe from "../../components/Subscribe.jsx";
import Footer from "../../components/Footer.jsx";
import HeroSection from "../../components/HeroSection.jsx";
import Marquee from "../../components/Marquee.jsx";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <CarrouselMain />
      <AboutUs />
      <Story />
      <Featured />
      <Reviews />
      <BookAppointment />
      <Instagram />
      <Marquee />
      <Subscribe />
      <Footer />
    </div>
  );
}
