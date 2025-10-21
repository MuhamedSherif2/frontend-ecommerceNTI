import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environment/evironment';
import { IResponse, ISubCategoriesResponse } from '../../interfaces/category.interface';
import { ISubCategory } from '../../interfaces/category.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategory {
  constructor(private _http: HttpClient, private _router: Router) { }
  apiURl = environment.apiURl + 'subcategory/'

  getSubCategory(){
    return this._http.get(this.apiURl)
  }

  addSubCategory(subCategory : ISubCategory ){
    return this._http.post<ISubCategory>(this.apiURl + 'add', subCategory )
  }

  updateSubCategory(id : string, subCategory : ISubCategory ){
    return this._http.put<ISubCategory>(this.apiURl + `update/${id}`, subCategory)
  }

  deleteSubCategory(id : string ){
    return this._http.delete(this.apiURl + `delete/${id}`)
  }

}
