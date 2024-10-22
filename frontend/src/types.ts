export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };


  
  
export type Industry = {
    _id: string;
    user: string;
    industryName: string;
    city: string;
    country: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    imageUrl: string;
    lastUpdated: string;
  };

  export type IndustrySearchResponse = {
    data: Industry[];
    pagination: {
      total: number;
      page: number;
      pages: number;
    };
  };

  