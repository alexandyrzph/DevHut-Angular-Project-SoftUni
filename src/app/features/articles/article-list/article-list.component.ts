import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../core/services/crud.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: any;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService.getAllArticles().subscribe((articles) => {
      let ids = Object.keys(articles);
      Object.values(articles).map((el, index) => {
        el.id = ids[index];
        // console.log(el);
      });
      this.articles = Object.values(articles);
    });
  }
}
