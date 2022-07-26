import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isActive: boolean = false;
  windowWidth: Number = window.innerWidth;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  onLogout() {
    this.authService.logout();
  }

  toggleNavbar() {
    this.isActive = false;
  }

  toggleBurgerNavbar() {
    this.isActive = !this.isActive;
  }
}
