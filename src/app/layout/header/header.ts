import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserServices } from '../../cors/services/userServices/user-services';
import { IUserRespose } from '../../cors/interfaces/user.interface';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private _userServices:UserServices){}
  isToggle = false
  user !: IUserRespose;

  openNav(){
    this.isToggle = !this.isToggle
  }

  ngOnInit(): void {
    this._userServices.getProfile().subscribe({
      next: res => {
        this.user = res.data
      },
      error:(err) => console.log(err)       
    })
  }

  logOut(){
    this._userServices.logOut()
  }
}
