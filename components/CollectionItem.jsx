import Image from "next/image";
import Link from "next/link";

function CollectionItem({ imageUrl, title, price }) {
  return (
    <div className="sm:hover:border hover:border-[#59552D] transition duration-400 ease-in sm:w-full   grid items-center justify-center gap-y-3.5 py-14 px-5">
      <div className="border-b border-[#59552D] py-4 w-96 h-96 relative">
        <Image src={imageUrl} alt="title" fill className="object-cover py-4" />
      </div>
      <div className="">
        <p className="uppercase text-xs text-main text-center pb-2">{title}</p>
      </div>
      <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
        customize yours
      </div>
    </div>
  );
}

export default CollectionItem;
