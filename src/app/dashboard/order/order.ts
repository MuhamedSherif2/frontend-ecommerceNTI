import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../cors/services/order/orders-service';
import { IOrder } from '../../cors/interfaces/order.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [NgClass],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements OnInit {
  orders: IOrder[] = [];
  isLoading = true;
  errorMsg = '';

  constructor(private _orderService: OrderService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.isLoading = true;
    this._orderService.getOrders().subscribe({
      next: (res) => {
        this.orders = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMsg = err.error.message;
        this.isLoading = false;
      }
    });
  }

  cancelOrder(id: string) {
    if (confirm('Are you sure you want to cancel this order?')) {
      this._orderService.cancelOrder(id).subscribe({
        next: () => {
          alert('Order cancelled successfully');
          this.getAllOrders();
        },
        error: (err) => {
          alert(err.error.message);
        }
      });
    }
  }
}
