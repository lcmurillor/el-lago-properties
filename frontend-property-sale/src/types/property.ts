export type PropertyType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  images: Image[];
};

export type Image = {
  id: number;
  name: string;
  url: string;
  alt?: string;
};

export type Agent = {
  id: number;
  name: string;
  email: string;
  number: number;
  slug: string;
};

export type Property = {
  agent: Agent;
  bathrooms: number;
  bedrooms: number;
  property_type: PropertyType;
  description: string;
  id: number;
  images: Image[];
  is_available: boolean;
  is_featured: boolean;
  location: string;
  map_location_url: string;
  price: number;
  size: number;
  slug: string;
  title: string;
};
