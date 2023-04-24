import Header from '../../components/Header.jsx';
import CarrouselMain from '../../components/CarrouselMain.jsx';
import AboutUs from '../../components/aboutUs.jsx';
import Story from '../../components/story.jsx';
import Featured from '../../components/featured.jsx';
import Reviews from '../../components/reviews.jsx';
import BookAppointment from '../../components/bookAppointment.jsx';
import Instagram from '../../components/instagram.jsx';
import Subscribe from '../../components/subscribe.jsx';
import Footer from '../../components/footer.jsx';




export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <CarrouselMain/>
        <AboutUs/>
        <Story/>
        <Featured/>
        <Reviews/>
        <BookAppointment/>
        <Instagram/>
        <Subscribe/>
        <Footer/>
      </main>
    </div>
  )
}
