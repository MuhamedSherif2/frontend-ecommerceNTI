import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { UserServices } from '../../services/userServices/user-services';

export const userGuard: CanMatchFn = (route, segments) => {
  const _auth = inject(UserServices);
  const _router = inject(Router);
  if (_auth.isLoggedInWithRole('user')) {
    return true;
  }
  else {
    _router.navigate(['/login'])
    return false;
  }
};
