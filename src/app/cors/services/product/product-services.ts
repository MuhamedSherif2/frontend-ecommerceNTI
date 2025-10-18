import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environment/evironment';
import { IResponse } from '../../interfaces/user.interface';
import { IProduct, IProductRes, IProductsResponse } from '../../interfaces/products.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServices {
  constructor(private _http: HttpClient, private _router: Router) { }
  apiURL = environment.apiURl + 'products/'

  getAllProducts(): Observable<IProductsResponse> {
    return this._http.get<IProductsResponse>(this.apiURL)
  }

  addProduct(products: IProductsResponse) {
    return this._http.post<IResponse>(this.apiURL + 'add', products).pipe(
      tap(res => {
        console.log(res.data)
      })
    )
  }

  updateProduct(product: IProduct, slug: string) {
    return this._http.put<IResponse>(this.apiURL + `update/${slug}`, product)
  }

  deleteProduct(slug: string) {
    return this._http.delete(this.apiURL + `delete/${slug}`)
  }

  getProductBySlug(slug: string) {
    return this._http.get<IProductRes>(this.apiURL + `product/${slug}`)
  }

  // getRelatedProducts(id: string) {
  //   return this._http.get<IProductsResponse>(this.apiURL + '/related/' + id);
  // }
}
