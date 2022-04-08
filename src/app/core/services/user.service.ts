import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserInfo(): any {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData') as string);
    if (!userData) {
      return;
    }
    const user = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
    const idToken = user.token;
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${environment.firebaseAPI_KEY}`, { idToken });
  }

  updateUserInfo() {

  }

}
