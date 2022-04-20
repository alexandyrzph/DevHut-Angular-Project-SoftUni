import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/core/services/crud.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-my-articles',
  templateUrl: './my-articles.component.html',
  styleUrls: ['./my-articles.component.css'],
})
export class MyArticlesComponent implements OnInit {
  articles: Article[] = [];
  uid!: string | null;
  respData: any;
  email!: string | null;

  constructor(private crudService: CrudService) {
  }

  ngOnInit(): void {
    this.crudService.getAllArticles().subscribe(data => {
      this.respData = data;
      for (const el in this.respData) {
        this.respData[el].id = el;
      }
      this.articles = Object.values(data);
      console.log(this.articles)
      this.uid = JSON.parse(localStorage.getItem('userData') as string).id;
      console.log(this.uid)
      this.email = JSON.parse(localStorage.getItem('userData') as string).email;
    });
  }
}
