import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const user = inject(UserService);
    const router = inject(Router);
    if (!user.isLogged()) {
        router.navigate(['']);
        return false;
    }
    return true;
};
