import { Component, OnInit } from '@angular/core';
import { UserServices } from '../../cors/services/userServices/user-services';
import { IUserRespose } from '../../cors/interfaces/user.interface';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.html',
  styleUrl: './account.css'
})
export class Account implements OnInit {
  constructor(private _userServices:UserServices){}
  user !: IUserRespose;

  ngOnInit(): void {
    this._userServices.getProfile().subscribe({
      next: res => {
        this.user = res.data
      },
      error:(err) => console.log(err)       
    })
  }
}
