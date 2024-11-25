export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  availabilityStatus: string;
  warrantyInformation: string;
  images: string[];
}
export interface CartItem extends Product {
  quantity: number;
}
