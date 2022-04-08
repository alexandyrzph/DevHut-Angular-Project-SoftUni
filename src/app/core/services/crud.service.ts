import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';

@Injectable({ providedIn: 'root' })
export class CrudService {

  constructor(private http: HttpClient) {
  }

  postArticle(article: any) {
    return this.http.post(`https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles.json`, article );
  }

  getAllArticles() {
    return this.http.get(`https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles.json`);
  }

}
