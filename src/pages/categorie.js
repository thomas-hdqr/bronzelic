import Header from "../../components/Header.jsx";
import Subscribe from "../../components/Subscribe.jsx";
import Footer from "../../components/Footer.jsx";
import Marquee from "../../components/Marquee.jsx";
import CollectionItem from "../../components/CollectionItem";

export default function Categorie() {


  const items = [
    { imageUrl: '/full_eternity_diamond_bands.webp', title: 'Ring 1', price: '500' },
  ];

  return (
    <div>
      <Header />
      <div
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ backgroundImage: `url(/collection_banner.jpeg)` }}
      >
        <p className="text-[180px]">test</p>
        <h1>sdfvsfvesf</h1>
      </div>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Wedding Rings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <CollectionItem key={index} {...item} />
        ))}
      </div>
    </div>
      <Marquee />
      <Subscribe />
      <Footer />
    </div>
  );
}
