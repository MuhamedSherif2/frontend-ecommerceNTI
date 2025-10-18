// import { HttpInterceptorFn } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { Router } from '@angular/router';
// import { catchError, throwError } from 'rxjs';
// import { UserServices } from '../services/userServices/user-services';

// export const errorHandelerInterceptor: HttpInterceptorFn = (req, next) => {
//   const _router = inject(Router);
//   const _auth = inject(UserServices);
//   return next(req).pipe(
//     catchError(error =>{
// console.log(error);

//       if(error.status === 401){
// _auth.logout();
// _router.navigate(['/login'])
//       }
//       else if(error.status === 403){
//         //you are not admin 
//         _router.navigate(['/unauthorized']);
//       }
//       else if(error.status === 404){
//         _router.navigate(['/notfound']);
//       }
//       else{
//         _router.navigate(['/error']);
//       }
// return throwError(()=> error)


//     })
//   );
// };
