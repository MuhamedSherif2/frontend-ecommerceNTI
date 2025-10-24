import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICartItem, ICartResponse } from '../../interfaces/cart.interface';
import { environment } from '../../../environment/evironment';


@Injectable({ providedIn: 'root' })
export class CartService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiURl + 'cart/';

  numberOfCartItems = signal(0);

  getLoggedUserCart() {
    return this.http.get<ICartResponse>(this.baseUrl);
  }

  clearFromCart(cartId: string, productId: string) {
    return this.http.delete<ICartResponse>(`${this.baseUrl}delete/${cartId}/${productId}`);
  }

  addProductToCart(productId: string, quantity: number = 1) {
    return this.http.post<ICartResponse>(`${this.baseUrl}add`, {
      productId,
      quantity,
    });
  }
}