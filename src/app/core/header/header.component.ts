import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isActive: boolean = false;

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }

  toggleNavbar() {
    this.isActive = !this.isActive;
  }

}
