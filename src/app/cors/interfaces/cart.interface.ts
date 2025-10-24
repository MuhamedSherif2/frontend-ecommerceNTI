import { IProduct } from './products.interface';

export interface ICartResponse {
  success: boolean;
  message: string;
  numOfCartItems: number;
  data: ICartItem[];
}

export interface ICartItem {
  _id: string;
  user?: string;
  products: {
    product: {
      _id: string;
      title: string;
      price: number;
      img: string;
      description: string;
    };
    quantity: number;
    _id: string;
  }[];
  createdAt?: string;
  updatedAt?: string;
}
