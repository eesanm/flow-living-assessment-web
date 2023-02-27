import { Listing } from "@/lib/api/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [listingsData, setListingsData] = useState<Array<Listing>>([]);

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

  return <></>;
}
