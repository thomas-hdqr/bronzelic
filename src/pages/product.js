import Header from "../../components/Header.jsx";
import Subscribe from "../../components/Subscribe.jsx";
import Footer from "../../components/Footer.jsx";
import Marquee from "../../components/Marquee.jsx";
import BookAppointment from "../../components/BookAppointment.jsx";

export default function Product() {
  return (
    <div>
      <Header isSpecialPage={true}/>

      <div className="grid grid-cols-3 divide-x divide-[#59552D]">
  {/* Step 1 */}
  <div className="flex flex-col items-center justify-center py-4">
    <div className="w-8 h-8 rounded-full bg-[#FFE6AA] flex items-center justify-center">
      <span className="font-bold">1</span>
    </div>
    <p className="text-xs mt-2">Customize Yours</p>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col items-center justify-center py-4">
    <div className="w-8 h-8 rounded-full bg-[#EFEFEF] flex items-center justify-center">
      <span className="font-bold">2</span>
    </div>
    <p className="text-xs mt-2">Choose Your Diamond</p>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col items-center justify-center py-4">
    <div className="w-8 h-8 rounded-full bg-[#D2D2D2] flex items-center justify-center">
      <span className="font-bold">3</span>
    </div>
    <p className="text-xs mt-2">Confirm</p>
  </div>
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
