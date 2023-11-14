import Header from "../../components/Header.jsx";
import Subscribe from "../../components/Subscribe.jsx";
import Footer from "../../components/Footer.jsx";
import Marquee from "../../components/Marquee.jsx";
import BookAppointment from "../../components/BookAppointment.jsx";

export default function Product() {
  return (
    <div>
        <Header/>
        <BookAppointment/>
        <Marquee/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

