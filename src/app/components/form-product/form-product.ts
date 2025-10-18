import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductServices } from '../../cors/services/product/product-services';
import { IProduct } from '../../cors/interfaces/products.interface';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-product.html',
  styleUrls: ['./form-product.css']
})
export class FormProduct implements OnInit, OnChanges {
  constructor(private productService: ProductServices) {}

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

  
  ngOnInit(): void {}

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
          alert('✅ Product updated successfully');
          this.formClosed.emit();
        },
        error: err => console.error(err)
      });
    } else {
      this.productService.addProduct(formValue).subscribe({
        next: () => {
          alert('✅ Product added successfully');
          this.formClosed.emit();
        },
        error: err => console.error(err)
      });
    }
  }

  closeForm() {
    this.formClosed.emit();
  }
}
