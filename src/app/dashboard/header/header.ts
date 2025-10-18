import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserServices } from '../../cors/services/userServices/user-services';
import { Login } from "../../components/login/login";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor( private _userServices:UserServices, private _router:Router){}
  isToggle = false
  login = false
  openFormLogin = false

  openNav(){
    this.isToggle = !this.isToggle
  }

  logout(){
    this._userServices.logOut()
    this.login = true
  }

  openLogIn(){
    this._router.navigate(['/login'])
  }
}
