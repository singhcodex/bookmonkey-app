import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    take(1),
    map(isAuthenticated => {
      if(isAuthenticated){
        return true;
      }else{
        window.alert('Not logged in!');
        return router.parseUrl('/home');
      }
    })
  )

  // if(authService.isAuthenticated){
  //   return true;
  // }else{
  //   window.alert('Not logged in!');
  //   return router.parseUrl('/home')
  // }

};
