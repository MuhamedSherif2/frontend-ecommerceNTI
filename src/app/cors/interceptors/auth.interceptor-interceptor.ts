import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserServices } from '../services/userServices/user-services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const _auth= inject(UserServices);
  const token= _auth.getToken();
  if(token){
    const cloned = req.clone({
      setHeaders:{
          Authorization:`Bearer ${token}`
        }
    });
    return next(cloned);
  }
  return next(req);
};
