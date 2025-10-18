import { Component, OnInit, signal } from '@angular/core';
import { UserServices } from '../../cors/services/userServices/user-services';
import { IUserRespose, IUsersRes } from '../../cors/interfaces/user.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [NgClass],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  constructor(private _userServices: UserServices) { }
  users = signal<IUserRespose[]>([])

  ngOnInit(): void {
    this._userServices.getAllUsers()?.subscribe({
      next: res => {
        this.users.set(res.data);
        console.log(this.users());
      },
      error: err => console.log(err)
    })
  }
}
