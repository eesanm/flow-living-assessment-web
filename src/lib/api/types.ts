export interface Listing {
  _id: string;
  agent: string;
  title: string;
  description: string;
  status: string;
  organisation: string;
  listingType: string;
  listingSector: string;
  unit: {
    bedrooms: number;
    bathrooms: number;
    parking: number;
    price: number;
  };
  images: string[];
}
