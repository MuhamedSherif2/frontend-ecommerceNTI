import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environment/evironment';
import { IResponse, ILogin, ISignup, ITokenDecode, IUsersRes, IUserRes } from '../../interfaces/user.interface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class UserServices {
  constructor(private _http: HttpClient, private _router: Router) { }
  apiUrl = environment.apiURl + 'user/'
  private TokenKey = 'token'
  private authName = new BehaviorSubject<string | null>(null);

  isLogedIn() {
    const token = this.getToken();

    if (token) {
      if (this.isInvalidToken(token)) {
        this.authName.next(this.decodedToken(token).name)
      } else {
        this.authName.next(null)
        this.logOut()
      }
    } else {
      this.authName.next(null)
    }
  }

  getAllUsers(): Observable<IUsersRes> | null {
    return this._http.get<IUsersRes>(this.apiUrl)
  }

  register(signup: ISignup) {
    return this._http.post<IResponse>(this.apiUrl + 'register', signup).pipe(
      tap(res => {
        const Messageuser = res.message
        if (Messageuser === 'Created User Successfully') {
          this._router.navigate(['login'])
        } else {
          alert('Check Your Data')
        }
      })
    )
  }

  login(login: ILogin) {
    return this._http.post<IResponse>(this.apiUrl + 'login', login).pipe(
      tap((res) => {
        this.storeToken(res.data);

        this.authName.next(this.decodedToken(res.data).name);

        if (this.decodedToken(res.data).role === 'admin') {
          this._router.navigate(['admin']);
        }
        else {
          this._router.navigate(['/']);
        }
      })
    )
  }

  logOut() {
    localStorage.removeItem(this.TokenKey);
    this.authName.next(null)
    this.isLogedIn()
  }

  getProfile() : Observable <IUserRes>{
    return this._http.get<IUserRes>(this.apiUrl + 'profile')
  }

  getToken(): string | null {
    return localStorage.getItem(this.TokenKey)
  }

  private isInvalidToken(token: string) {
    try {
      const decode = this.decodedToken(token);
      const expiryDate = decode.exp * 1000;
      return Date.now() < expiryDate;
    }
    catch (err) {
      return false;
    }
  }

  private storeToken(token: string) {
    localStorage.setItem(this.TokenKey, token)
  }

  private decodedToken(token: string) {
    const decode = jwtDecode<ITokenDecode>(token);
    return decode;
  }

  isLoggedInWithRole(role: string) {
    const token = this.getToken();
    if (token) {
      if (this.isInvalidToken(token)) {
        const decodeRole = this.decodedToken(token).role;
        if (role === decodeRole) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}
