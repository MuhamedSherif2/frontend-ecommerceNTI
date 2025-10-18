import { Component } from '@angular/core';
import {FormGroup, ReactiveFormsModule, FormControl} from '@angular/forms'
import { UserServices } from '../../cors/services/userServices/user-services';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private userServices:UserServices, private router:Router){}

  loginForm:FormGroup = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  toggelPassword = false

  OnSubmit(){
    if(this.loginForm.value === ''){
      alert('Invalid Email or Password')
    }else{
      this.userServices.login(this.loginForm.value).subscribe(data => {
        console.log(data);
      })
    }
  }
  
  navigation(){
    this.router.navigate(['signup'])
  }

  showPassword(){
    this.toggelPassword = !this.toggelPassword
  }
}
