import { ListingCard, ListingCardProps } from "@/components/ListingCard";
import { Listing } from "@/lib/api/types";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [listingsData, setListingsData] = useState<Array<Listing>>([]);

  // fetch the data when component mounts
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<Listing[]>(
        "http://ec2-3-238-69-97.compute-1.amazonaws.com:3000/listings",
        {
          method: "GET",
          headers: {
            "X-API-KEY": "1ab2c3d4e5f61ab2c3d4e5f6",
            "Content-Type": "application/json",
          },
        }
      );
      setListingsData(response.data);
    }
    fetchData();
  }, []);

  // remap the listing card props every time the fetched data changes
  const listingCardProps: ListingCardProps[] = useMemo(() => {
    return listingsData.map((listing) => {
      return {
        price: listing.unit.price.toLocaleString("en-US", {
          style: "currency",
          currency: "ZAR",
          minimumFractionDigits: 0,
        }),
        title: listing.title,
        description: listing.description,
        imageUrl: listing.images[0],
      };
    });
  }, [listingsData]);

  return (
    <div className="bg-stone-100 overflow-y-scroll w-full h-full flex justify-center py-10 px-5 sm:px-10">
      <div className="w-full max-w-5xl">
        <div className="text-lg font-medium text-gray-500">
          Showing all results
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          {listingCardProps.map((listing, index) => {
            return <ListingCard key={index} {...listing} />;
          })}
        </div>
      </div>
    </div>
  );
}
