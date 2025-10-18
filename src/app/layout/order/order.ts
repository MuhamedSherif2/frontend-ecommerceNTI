import { Component } from '@angular/core';
import { OrderService } from '../../cors/services/order/orders-service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [NgIf],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order {
  orders: any[] = [];

  constructor(private _orderService: OrderService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this._orderService.getMyOrders().subscribe({
      next: (res: any) => this.orders = res.data,
      error: err => console.log(err)
    });
  }

  cancelOrder(id: string) {
    this._orderService.cancelOrder(id).subscribe({
      next: () => this.loadOrders(),
      error: err => console.log(err)
    });
  }
}
