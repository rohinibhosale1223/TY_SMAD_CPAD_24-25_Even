export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  compareAtPrice: number | null;
  images: string[];
  category: string;
  tags: string[];
  sizes: string[];
  rating: number;
  reviewCount: number;
}