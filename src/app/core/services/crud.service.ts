import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CrudService {
  constructor(private http: HttpClient) {}

  postArticle(article: any) {
    return this.http.post(
      `https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles.json`,
      article
    );
  }

  getAllArticles() {
    return this.http.get(
      `https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles.json`
    );
  }

  
  getPostById(id: string) {
    return this.http.get(
      `https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles/${id}.json`
    );
  }

  getMyPosts() {
    return this.http.get(
      `https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles.json?`
    );
  }
}
