import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './system-access/system-access-services/auth.service'
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  _userAllowed: boolean;

  constructor(private _auth: AuthService,
    private _router: Router,
    private _securityService: SecurityService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this._auth.loggedIn()
    if (currentUser) {
      return true
      /* this._securityService.getUserGroupFeatures()
        .subscribe(
          res => {
            res.forEach(element => {
              if (element.component == route.component.toString().split(' ')[1].split(' ')[0]) {
                this._userAllowed = true
              }
            });
            
            if(this._userAllowed){
              return true
            }else{
              this._router.navigate(['./login'])
              sessionStorage.clear()
              return false
            }            
          },
          err => {
            console.log(err)
            sessionStorage.clear()
            this._router.navigate(['./login'])
            return false
          }
        )


      console.log(route.component.toString().split(' ')[1].split(' ')[0])

      return true */
    } else {
      sessionStorage.clear()
      this._router.navigate(['./login'])
      return false
    }
  }


}
