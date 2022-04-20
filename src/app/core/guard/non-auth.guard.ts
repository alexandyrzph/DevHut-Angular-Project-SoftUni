import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanLoad, Route, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NonAuthGuard implements CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canLoad(route: Route): boolean {
    const noUserLogged = !this.authService.isAuthenticated();
    if (noUserLogged) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
