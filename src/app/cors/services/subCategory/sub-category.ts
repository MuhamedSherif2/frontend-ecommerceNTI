import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environment/evironment';
import { IResponse } from '../../interfaces/user.interface';
import { ISubCategory } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class SubCategory {
  constructor(private _http: HttpClient, private _router: Router) { }
  apiURl = environment.apiURl + 'subcategory/'

  getSubCategory(){
    return this._http.get<IResponse>(this.apiURl)
  }

  addSubCategory(subCategory : ISubCategory ){
    
  }

}
