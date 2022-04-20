import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  error?: string | null;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    this.authService.login(email, password).subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['/articles/all']);
      }, errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    )

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

}
