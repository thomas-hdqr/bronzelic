import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

function CarrouselMain() {
  const [hovered, setHovered] = useState(null);

  const image1 =
    hovered === "ring1" ? "/square_bezel_engagement.webp" : "/engagement.webp";
  const image2 =
    hovered === "ring2" ? "/full_eternity_diamond_bands.webp" : "/diamond.webp";
  const image3 =
    hovered === "ring3" ? "/domed_solid_bands.webp" : "/solidband.webp";

  return (
    <div className="p-10">
      <div className="relative w-full uppercase text-main text-xs px-4 sm:px-0 text-center">
        <div className="sm:absolute left-0 top-0">
          <p className="sm:inline-block">custom made just for you</p>
        </div>
        <div className="w-full text-center sm:flex sm:justify-center mt-4 sm:mt-0">
          <p className="sm:inline-block">
            select a ring style to begin customizing
          </p>
        </div>
      </div>

      <div className="w-full sm:grid sm:grid-cols-3 gap-x-2.5 py-32">
        <Link href="/categorie">
          <div
            className="w-full relative sm:hover:border hover:border-[#59552D] transition duration-400 ease-in py-4"
            onMouseEnter={() => setHovered("ring1")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="w-full grid items-center justify-center gap-y-2.5 px-5">
              <div className="">
                <p className="uppercase text-xs text-main text-center pb-2">
                  engagement rings
                </p>
              </div>
              <div className="border-y border-[#59552D] py-4 w-96 h-96 relative">
                <Image
                  src={image1}
                  alt="engagement rings"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover py-4"
                />
              </div>
              <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
                get started
              </div>
            </div>
          </div>
        </Link>

        <Link href="/categorie">
          <div
            className="sm:w-full relative sm:hover:border hover:border-[#59552D] transition duration-400 ease-in py-4"
            onMouseEnter={() => setHovered("ring2")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="sm:w-full grid items-center justify-center gap-y-2.5 px-5">
              <div className="">
                <p className="uppercase text-xs text-main text-center pb-2">
                  diamond bands
                </p>
              </div>
              <div className="border-y border-[#59552D] py-4 w-96 h-96 relative">
                <Image
                  src={image2}
                  alt="engagement rings"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover py-4"
                />
              </div>
              <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
                get started
              </div>
            </div>
          </div>
        </Link>

        <Link href="/categorie">
          <div
            className="w-full relative sm:hover:border hover:border-[#59552D] transition duration-400 ease-in py-4"
            onMouseEnter={() => setHovered("ring3")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="w-full grid items-center justify-center gap-y-2.5 px-5">
              <div className="">
                <p className="uppercase text-xs text-main text-center pb-2">
                  solid bands
                </p>
              </div>
              <div className="border-y border-[#59552D] py-4 w-96 h-96 relative">
                <Image
                  src={image3}
                  alt="engagement rings"
                  layout="fill"
                  objectFit="cover"
                  className="object-cover py-4"
                />
              </div>
              <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
                get started
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CarrouselMain;
