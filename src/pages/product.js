import Header from "../../components/Header.jsx";
import Subscribe from "../../components/Subscribe.jsx";
import Footer from "../../components/Footer.jsx";
import Marquee from "../../components/Marquee.jsx";
import BookAppointment from "../../components/BookAppointment.jsx";

export default function Product() {
  return (
    <div>
      <Header isSpecialPage={true}/>

      <div className="pt-32 h-screen grid sm:grid-cols-3">
        <div className="bg-blue-100 border border-[#59552D]">
          <div className="rounded-full ">
            <p>1</p>
          </div>
            <p>Customize yours</p>
        </div>
        <div className="bg-yellow-100"></div>
        <div className="bg-green-100"></div>
      </div>
      <div className="w-40 h-40 rounded-full  
                inline-flex items-center justify-center  
                bg-white text-gray-700 text-xl font-bold">test</div>
      <BookAppointment />
      <Marquee />
      <Subscribe />
      <Footer />
    </div>
  );
}
