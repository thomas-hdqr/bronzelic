import Image from "next/image";

function CollectionItem({ imageUrl, title, price }) {
  return (
    <div className="sm:hover:border hover:border-[#59552D] transition duration-400 ease-in sm:w-full   grid items-center justify-center gap-y-3.5 my-14 p-2">
      <div className="border-b border-[#59552D] py-4 w-96 h-96 relative">
        <Image src={imageUrl} alt="title" fill className="object-cover py-4" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="uppercase text-xs text-main text-left pb-2">{title}</p>
          <p className="uppercase text-xs text-main text-left pb-2">{price}$</p>
        </div>
        <div className="flex items-center gap-x-3">
          <button className="w-[21px] h-[21px] rounded-full relative duration-300 transition-colors border-black border flex items-center justify-center hover:border-opacity-20 border-opacity-0">
            <div className="w-[15px] h-[15px] rounded-full bg-[#ffe6aa]"></div>
          </button>
          <button className="w-[21px] h-[21px] rounded-full relative duration-300 transition-colors border-black border flex items-center justify-center hover:border-opacity-20 border-opacity-0">
            <div className="w-[15px] h-[15px] rounded-full bg-[#ebebeb]"></div>
          </button>
          <button className="w-[21px] h-[21px] rounded-full relative duration-300 transition-colors border-black border flex items-center justify-center hover:border-opacity-20 border-opacity-0">
            <div className="w-[15px] h-[15px] rounded-full bg-[#ffd2be]"></div>
          </button>
          <button className="w-[21px] h-[21px] rounded-full relative duration-300 transition-colors border-black border flex items-center justify-center hover:border-opacity-20 border-opacity-0">
            <div className="w-[15px] h-[15px] rounded-full bg-[#d2d2d2]"></div>
          </button>
        </div>
      </div>
      <div className="bg-[#59552D] uppercase text-center text-xs text-white py-5 px-10 transition duration-200 ease-in hover:bg-transparent hover:border-2 hover:bg-white hover:text-main hover:border-[#59552D] cursor-pointer">
        customize yours
      </div>
    </div>
  );
}

export default CollectionItem;
