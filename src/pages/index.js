import Header from "../../components/header.jsx";
import CarrouselMain from "../../components/carrouselmain.jsx";
import AboutUs from "../../components/aboutus.jsx";
import Story from "../../components/story.jsx";
import Featured from "../../components/featured.jsx";
import Reviews from "../../components/reviews.jsx";
import BookAppointment from "../../components/bookappointment.jsx";
import Instagram from "../../components/instagram.jsx";
import Subscribe from "../../components/subscribe.jsx";
import Footer from "../../components/footer.jsx";
import HeroSection from "../../components/heroSection.jsx";
import Marquee from "../../components/marquee.jsx";

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
