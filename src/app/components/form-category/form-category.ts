import { Component, EventEmitter, Output, } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Category } from '../../cors/services/category/category';

@Component({
  selector: 'app-add-category',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-category.html',
  styleUrl: './form-category.css'
})

export class FormCategory {
  constructor(private _categoryService: Category) { }
  @Output() formClosed = new EventEmitter<void>();

  toggleForm : boolean = false


  categoryFormGroup: FormGroup = new FormGroup({
    nameCategory: new FormControl('')
  })

  openFormCategory(){
    this.toggleForm = !this.toggleForm
  }

  onSubmit() {
    const formValue = this.categoryFormGroup.value
    this._categoryService.addCategory(formValue).subscribe({
      next: () => {
        alert('Category added successfully');
        this.formClosed.emit();
      },
      error: err => console.error(err)
    });
  }

  closeForm() {
    this.formClosed.emit();
  }

}
