export interface PropertyData {
  id: number;
  coverPhoto?: ImageSourceType;
  price: number;
  rentFrequency: string;
  rooms: number;
  baths: number;
  area: number;
  agency: AgencyType;
  isVerified: boolean;
  externalID: string;
}

type ImageSourceType = {
  url?: string;
  src?: string;
};

type AgencyType = {
  logo: {
    url: string;
  };
};

export interface PropertyInterface {
  hits: PropertyData[];
}

export interface PropertyProps {
  property: PropertyData;
}

export interface PropertiesInterface {
  properties: PropertyData[];
}

export interface SaleRentProps {
  propertiesForRent: PropertyData[];
  propertiesForSale: PropertyData[];
}

export interface BannerInterface {
  purpose: string;
  imageUrl?: string;
  title: string;
  description: string;
  linkName: string;
  buttonText: string;
  height?: string;
}

type AmenityType = {
  text: string;
  externalGroupID: number;
  amenities: AmenityInnerType[];
};

type AmenityInnerType = {
  externalID: number;
  text: string;
};

export interface PropertyDetailsInterface {
  propertyDetails: {
    price: number;
    rentFrequency: string;
    rooms: number;
    title: string;
    baths: number;
    area: number;
    agency: AgencyType;
    isVerified: boolean;
    description: string;
    type: any;
    purpose: string;
    furnishingStatus: string;
    amenities: AmenityType[];
    coverPhoto: ImageSourceType;
  };
}

export interface ParamsInterface {
  params: {
    id: number;
  };
}

export interface SearchInterface {
  query: {
    purpose: string;
    rentFrequency: string;
    minPrice: string;
    maxPrice: string;
    roomsMin: string;
    bathsMin: string;
    areaMax: string;
    locationExternalIDs: string;
    categoryExternalID: string;
  };
}
