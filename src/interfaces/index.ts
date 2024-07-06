export interface Token {
  token: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity: number;
  totalPrice: number;
}
interface Rating {
  rate: number;
  count: number;
}
export interface CartState {
  items: Product[];
}
