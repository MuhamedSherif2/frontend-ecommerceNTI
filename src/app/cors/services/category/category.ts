import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environment/evironment';
import { IResponse } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class Category {
  constructor(private _http: HttpClient, private _router: Router) { }
  apiURl = environment.apiURl + 'category/'

  getCategory(){
    return this._http.get<IResponse>(this.apiURl)
  }

  addCategory(name : string){
    return this._http.post(this.apiURl + '' , name)
  }
}
