import { Injectable } from '@angular/core';
import { AuthService } from '../../auth/auth-service/auth.service';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NonAuthGuard implements CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canLoad(route: Route): boolean {
    const noUserLogged = this.authService.userSubject == null;
    if (noUserLogged) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }
}
