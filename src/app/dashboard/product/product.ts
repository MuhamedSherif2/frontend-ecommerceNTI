import { Component } from '@angular/core';
import { IProduct } from '../../cors/interfaces/products.interface';
import { ProductServices } from '../../cors/services/product/product-services';
import { FormProduct } from "../../components/form-product/form-product";
import { environment } from '../../environment/evironment';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
  imports: [FormProduct]
})
export class Product {
  products: IProduct[] = [];
  isToggleForm = false;
  selectedProduct: IProduct | null = null;
  staticURL = environment.staticURL

  constructor(private productService: ProductServices) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res.data;
    });
  }

  openForm() {
    this.selectedProduct = null;
    this.isToggleForm = true;
  }

  update(product: IProduct) {
    this.selectedProduct = product;
    this.isToggleForm = true;
  }

  delete(slug : string){
    this.productService.deleteProduct(slug).subscribe({
      next: res => this.getAllProducts(),
      error: err => console.log(err),
    })
  }

  closeForm() {
    this.isToggleForm = false;
    this.selectedProduct = null;
    this.getAllProducts(); 
  }
}
