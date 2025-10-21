import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductServices } from '../../cors/services/product/product-services';
import { IProduct } from '../../cors/interfaces/products.interface';
import { Category } from '../../cors/services/category/category';
import { SubCategory } from '../../cors/services/subCategory/sub-category';
import { ICategoriesResponse, ISubCategoriesResponse } from '../../cors/interfaces/category.interface';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-product.html',
  styleUrls: ['./form-product.css']
})
export class FormProduct implements OnChanges {
  constructor(private productService: ProductServices, private _categoryServices: Category, private _subCategoryServices: SubCategory) {}

  category !: ICategoriesResponse
  subCategory !: ISubCategoriesResponse

  @Input() productData: IProduct | null = null;
  @Output() formClosed = new EventEmitter<void>();

  addproduct: FormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
    subcategory: new FormControl(''),
    slug: new FormControl(''),
    img: new FormControl('')
  });


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['productData'] && this.productData) {
      this.addproduct.patchValue(this.productData);
    }
  }

  onSubmit() {
    const formValue = this.addproduct.value;

    if (this.productData) {
      this.productService.updateProduct(this.productData, this.productData.slug).subscribe({
        next: () => {
          alert('Product updated successfully');
          this.formClosed.emit();
        },
        error: err => console.error(err)
      });
    } else {
      this.productService.addProduct(formValue).subscribe({
        next: () => {
          alert('Product added successfully');
          this.formClosed.emit();
        },
        error: err => console.error(err)
      });
    }
  }

  closeForm() {
    this.formClosed.emit();
  }

  // showCategory(){
  //   this.category = this._categoryServices.getCategory()
  // }

  // showSubCategory(){
  //   this.subCategory = this._subCategoryServices.getSubCategory()
  // }
}
