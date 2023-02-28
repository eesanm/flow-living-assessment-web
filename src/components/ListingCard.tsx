import Image from "next/image";
import { useState } from "react";

export interface ListingCardProps {
  imageUrl: string;
  price: string;
  title: string;
  description: string;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  imageUrl,
  price,
  title,
  description,
}) => {
  const [imageSrc, setImageSrc] = useState(imageUrl);

  return (
    <div className="flex flex-col w-full shadow-md rounded-2xl bg-white p-3">
      <div className="w-full relative h-48 rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          fill
          style={{ objectFit: "cover" }}
          alt=""
          onError={(e) => {
            setImageSrc("/images/fallbackImage.png");
          }}
        />

        <div className=" top-2 right-2 absolute p-1 rounded-md bg-orange-500 text-white font-semibold">
          {price}
        </div>
      </div>
      <div className="h-16 flex flex-col justify-center">
        <div className="text-lg font-bold text-gray-600 whitespace-nowrap truncate">
          {title}
        </div>
        <div className="text-sm font-light text-gray-400 h-5 truncate overflow-hidden">
          {description}
        </div>
      </div>
    </div>
  );
};
