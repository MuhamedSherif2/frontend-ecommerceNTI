import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environment/evironment';
import { IOrder, IOrderResponse } from '../../interfaces/order.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = environment.apiURl + 'order/';

  constructor(private _http: HttpClient) {}

  getOrders(): Observable<IOrderResponse> {
    return this._http.get<IOrderResponse>(this.apiUrl);
  }

  cancelOrder(id: string): Observable<any> {
    return this._http.put(this.apiUrl + `cancel/${id}`, {});
  }

  // user order

  getMyOrders() {
    return this._http.get(`${this.apiUrl}`);
  }

  cancelOrderForUser(id: string) {
    return this._http.put(`${this.apiUrl}/cancel/${id}`, {});
  }

  createOrder(orderData: any) {
    return this._http.post(`${this.apiUrl}`, orderData);
  }
}
