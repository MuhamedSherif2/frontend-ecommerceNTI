import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserServices } from '../../cors/services/userServices/user-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  constructor(private userServices:UserServices, private router:Router) { }

  toggelPassword = false

  signup: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl(''),
  })

  onSubmit() { 
    this.userServices.register(this.signup.value).subscribe(data => {
      alert(data.message)
      this.router.navigate(['login'])
    })
  }
  
  showPassword(){
    this.toggelPassword = !this.toggelPassword
  }
  
  loginPage(){
    this.router.navigate(['login'])
  }
}
