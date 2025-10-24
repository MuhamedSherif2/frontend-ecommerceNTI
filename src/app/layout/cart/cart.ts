import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cors/services/cart/cart-service';
import { ICartItem } from '../../cors/interfaces/cart.interface';
import { environment } from '../../environment/evironment';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  constructor(private _cartServices: CartService) {}
  
  productCart: ICartItem[] = [];
  imgURL = environment.staticURL

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this._cartServices.getLoggedUserCart().subscribe({
      next: (res) => {
        console.log(res.data);
        this.productCart = res.data;
      },
      error: (err) => console.log(err),
    });
  }

  removeFromCart(cartId: string, productId: string) {
    this._cartServices.clearFromCart(cartId, productId).subscribe({
      next: (res) => {
        console.log("Deleted:", res);
        this.getCart();
      },
      error: (err) => console.error(err)
    });
  }
  
}
