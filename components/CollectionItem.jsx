import Image from 'next/image';
import Link from 'next/link';

function CollectionItem({ imageUrl, title, price }) {
  return (
    <div className="flex flex-col items-center p-4">
      <Image src={imageUrl} alt={title} className="w-full h-64 object-cover mb-2" />
      <h3 className="text-xl mb-2">{title}</h3>
      <span className="text-gray-500">${price}</span>
    </div>
  );
}

export default CollectionItem;