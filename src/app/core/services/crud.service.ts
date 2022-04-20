import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { Article } from '../../shared/models/article.model';
import { Observable } from 'rxjs';

const BASE_URL = environment.firebaseConfig.databaseURL;

@Injectable({ providedIn: 'root' })
export class CrudService {
  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  postArticle(article: any) {
    return this.http.post(`https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles.json`, article);
  }

  getAllArticles() {
    return this.http.get(`${BASE_URL}/articles/.json`);
  }

  getPostById(id: string): Observable<Article> {
    return this.http.get<Article>(`${BASE_URL}/articles/${id}/.json`);
  }

  getMyPosts() {
    return this.http.get(`${BASE_URL}/articles/.json`);
  }

  updateArticle(id: string, data: any) {
    return this.http.patch(`${BASE_URL}/articles/${id}/.json`, data);
  }

  deleteArticle(id: string) {
    return this.http.delete(`${BASE_URL}/articles/${id}/.json`);
  }
}
