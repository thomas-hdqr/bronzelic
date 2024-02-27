import Header from "../../components/header.js";
import CarrouselMain from "../../components/carrouselmain.js";
import AboutUs from "../../components/aboutus.js";
import Story from "../../components/story.js";
import Featured from "../../components/featured.js";
import Reviews from "../../components/reviews.js";
import BookAppointment from "../../components/bookappointment.js";
import Instagram from "../../components/instagram.js";
import Subscribe from "../../components/subscribe.js";
import Footer from "../../components/footer.js";
import HeroSection from "../../components/heroSection.js";
import Marquee from "../../components/marquee.js";

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
