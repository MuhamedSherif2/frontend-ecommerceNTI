import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServices } from './cors/services/userServices/user-services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private _userServices:UserServices){}

  ngOnInit(): void {
    this._userServices.isLogedIn();
  }
}
