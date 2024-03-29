
import Header from "../../components/header.js";
import Subscribe from "../../components/subscribe.js";
import Footer from "../../components/footer.js";
import Marquee from "../../components/marquee.js";
import CollectionItem from "../../components/collectionitem.js";

export default function Categorie() {
  const items = [
    {
      imageUrl: "/Domed_Solitaire_Round_Std_1.5mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Domed-Solitaire_02.jpg",
      title: "the domed solitaire",
      price: "799",
      sizes: "100vh",
    },
    {
      imageUrl: "/Square_Solitaire_Oval_Std_1.5mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Square-Solitaire_04.jpg",
      title: "the square solitaire",
      price: "799",
      sizes: "100vh",
    },
    {
      imageUrl: "/Triangle_Solitaire_Radiant_Std_1.5mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Triangle-Solitaire_01.jpg",
      title: "the triangle solitaire",
      price: "799",
      sizes: "100vh",
    },
    {
      imageUrl: "/Three_Stone_Round_Round_Std_YG_Mirror_2.0ct.jpg",
      hoverImageUrl: "/Three-Stone_Round_01.jpg",
      title: "the round 3-stone",
      price: "1,799",
      sizes: "100vh",
    },
    {
      imageUrl: "/Three_Stone_Oval_Oval_Std_YG_Mirror_2.0ct.jpg",
      hoverImageUrl: "/Three-Stone_Oval_01.jpg",
      title: "the oval 3-stone",
      price: "1,799",
      sizes: "100vh",
    },
    {
      imageUrl: "/Three_Stone_Emerald_Emerald_Std_YG_Mirror_2.0ct.jpg",
      hoverImageUrl: "/Three-Stone_Emerald_01.jpg",
      title: "the emerald 3-stone",
      price: "1,799",
      sizes: "100vh",
    },
    {
      imageUrl: "/Eternity_Solitaire_Pear_Std_1.5mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Eternity-Solitaire_01.jpg",
      title: "the eternity solitaire",
      price: "1,099",
      sizes: "100vh",
    },
    {
      imageUrl: "/Floating_Solitaire_Asscher_Std_1.75mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Floating-Solitaire_02.jpg",
      title: "the floating solitaire",
      price: "1,099",
      sizes: "100vh",
    },
    {
      imageUrl: "/Domed_Bezel_Solitaire_Round_Std_1.5mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Domed-Bezel-Solitaire_01.jpg",
      title: "the domed bezel solitaire",
      price: "899",
      sizes: "100vh",
    },
    {
      imageUrl: "/Square_Bezel_Solitaire_Emerald_Std_1.5mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Square-Bezel-Solitaire_01.jpg",
      title: "the square bezel solitaire",
      price: "899",
      sizes: "100vh",
    },
    {
      imageUrl:
        "/Triangle_Bezel_Solitaire_Cushion_Std_1.5mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Triangle-Bezel-Solitaire_01.jpg",
      title: "the triangle bezel solitaire",
      price: "899",
      sizes: "100vh",
    },
    {
      imageUrl:
        "/Channel_Eternity_Bezel_Solitaire_Oval_Std_2mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Channel-Eternity-Bezel-Solitaire_01.jpg",
      title: "the channel eternity bezel solitaire",
      price: "1,199",
      sizes: "100vh",
    },
    {
      imageUrl: "/Center_Half_Bezel_Emerald_Std_2mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Center-Half-Bezel_01.jpg",
      title: "the center half bezel",
      price: "1,049",
      sizes: "100vh",
    },
    {
      imageUrl: "/Horizon_Half_Bezel_Pear_Std_3mm_YG_Mirror_1.5ct.jpg",
      hoverImageUrl: "/Horizon-Half-Bezel_01.jpg",
      title: "the horizon half bezel",
      price: "1,099",
      sizes: "100vh",
    },
    {
      imageUrl: "/Deco_Signet_4.5mm_YG_Mirror.jpg",
      hoverImageUrl: "/Deco-Signet_01.jpg",
      title: "the deco signet",
      price: "1,499",
      sizes: "100vh",
    },
  ];

  return (
    <div>
      <Header />

      <div
        className="relative h-[477px] bg-cover bg-center flex items-end justify-center"
        style={{ backgroundImage: `url(/collection_banner.jpeg)` }}
      >
        <h1 className="absolute inset-0 flex flex-col content-center items-center justify-center uppercase text-5xl text-white">
          Shop all rings
        </h1>
      </div>

      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
