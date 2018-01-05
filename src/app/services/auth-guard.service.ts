import { Injectable }     from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot}    from '@angular/router';
import { AuthService}     from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const userLogin = this.authService.userLogIn;
    const sessionID = this.authService.sessionID;
    if ( localStorage.getItem(`user:${userLogin}`) === sessionID ) return true;

    this.authService.redirectUrl = url;

    console.log(url);

    this.router.navigate(['/login']);
    return false;
  }

}
