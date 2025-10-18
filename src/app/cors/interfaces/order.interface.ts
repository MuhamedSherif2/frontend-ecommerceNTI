export interface IOrderProduct {
  product: string;
  quantity: number;
}

export interface IOrder {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  products: IOrderProduct[];
  totalPrice: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
}

export interface IOrderResponse {
  message: string;
  data: IOrder[];
}
