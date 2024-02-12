import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const user = inject(UserService);
  const router = inject(Router);
  if (user.isLogged()) {
    router.navigate(['user', user.getUserName()]);
  }
  return true;
};
