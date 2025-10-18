import { Component, OnInit } from '@angular/core';
import { ProductServices } from '../../cors/services/product/product-services';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../cors/interfaces/products.interface';
import { NgIf } from '@angular/common';
import { environment } from '../../environment/evironment';

@Component({
  selector: 'app-prodcut-details',
  imports: [NgIf],
  templateUrl: './prodcut-details.html',
  styleUrl: './prodcut-details.css'
})
export class ProdcutDetails implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductServices, private _router: Router) { }
  slug!: string | null;
  product!: IProduct;
  staticURL = environment.staticURL

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(res => {
      this.slug = res.get('slug');
      if (this.slug) {
        this._productService.getProductBySlug(this.slug).subscribe({
          next: res => {
            this.product = res.data
          },
          error: err => console.log(err.message)
        })
      }
      else {
        this._router.navigate(['products'])
      }
    })
  }
}
