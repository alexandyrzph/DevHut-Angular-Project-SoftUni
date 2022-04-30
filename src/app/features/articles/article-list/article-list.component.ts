import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../core/services/crud.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: Article[] | any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;

  constructor(private crudService: CrudService) {
  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.crudService.getAllArticles().subscribe((articles) => {
      let ids = Object.keys(articles);
      Object.values(articles).map((el, index) => {
        el.id = ids[index];
      });
      this.articles = Object.values(articles);
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getArticles();
  }

}
