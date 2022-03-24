import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArticleService {

    constructor(
        private http: HttpClient
    ) { }

    loadAllArticles() {
        
    }

}
