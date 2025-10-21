import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cors/services/cart/cart-service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  constructor(private _cartServices: CartService){}

  ngOnInit(): void {
    this._cartServices.getLoggedUserCart().subscribe({
      next: res => console.log(res.data)
      
    })
  }
}
