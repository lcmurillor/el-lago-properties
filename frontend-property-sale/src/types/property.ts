type Category = {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
    createdAt: string;
  };
  
 export  type ImageType = {
    url: string;
    alt?: string;
  };
  
  export type PropertyType = {
    id: number;
    documentId: string;
    propertyName: string;
    slug: string;
    description: string;
    price: number;
    location: string;
    isFeatured: boolean;
    images: ImageType[];
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: Category;
  };
  