import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    const repass = form.value.repass;
    this.isLoading = true;
    if (password != repass) {
      this.error = 'Password\'s don\'t match!';
      this.isLoading = false;
      return;
    }

    this.authService.signUp(email, password).subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(['/articles']);
      }, errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    )
  }

  onHandleError() {
    this.error = null;
  }

}
