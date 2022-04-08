import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({ providedIn: 'root' })
export class CrudService {

  constructor(private http: HttpClient,
              private db: AngularFireDatabase) {
  }

  postArticle(data: any) {
    return this.http.post(`https://devhub-angular-softuni-default-rtdb.firebaseio.com/articles.json`, { data });
  }


}
