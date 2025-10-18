import { IProduct } from './products.interface';

export interface ICartResponse {
  success: boolean;
  message: string;
  numOfCartItems: number;
  data: CartItem;
}

export interface CartItem {
  _id: string;
  cartOwner: string;
  products: {
    product: IProduct;
    quantity: number;
    _id: string;
  }[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}
