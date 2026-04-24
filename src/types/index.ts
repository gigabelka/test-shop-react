export type Lang = 'ru' | 'en';

export type CategoryId =
  | 'classic'
  | 'fruit'
  | 'premium'
  | 'vegan'
  | 'kids'
  | 'sorbet'
  | 'cake'
  | 'seasonal';

export interface LocalizedText {
  ru: string;
  en: string;
}

export interface Product {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  price: number;
  category: CategoryId;
  image: string;
  premium?: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  title: LocalizedText;
  body: LocalizedText;
  image?: string;
}

export interface Certificate {
  id: string;
  title: LocalizedText;
  image: string;
  year: number;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  items: { productId: string; qty: number }[];
}

export type Tier = 'bronze' | 'silver' | 'gold';

export interface User {
  name: string;
  email: string;
  phone: string;
  tier: Tier;
  points: number;
  referralCode: string;
  referralsCount: number;
  orders: Order[];
}

export interface CartItem {
  productId: string;
  qty: number;
}

export type SortKey = 'default' | 'price-asc' | 'price-desc' | 'title-az' | 'premium-first';

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  productId?: string;
  text: LocalizedText;
}
