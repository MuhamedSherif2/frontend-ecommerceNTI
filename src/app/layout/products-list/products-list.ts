import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../cors/services/product/product-services';
import { IProduct } from '../../cors/interfaces/products.interface';
import { environment } from '../../environment/evironment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList implements OnInit {
  constructor(private _productServices: ProductServices, private _router:Router) { }

  products: IProduct[] = [];
  staticURL = environment.staticURL

  ngOnInit(): void {
    this._productServices.getAllProducts().subscribe({
      next: res => this.products = res.data,
      error: err => console.log(err)
    })
  }

  showProductDetails(slug : string){
    this._router.navigate([`products/${slug}`])
  }
}
