import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../core/services/crud.service';
import { Article } from '../../../shared/models/article.model';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-articles-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        query('.fadeinAnim', [
          style({ opacity: 0, transform: 'translateX(-20px)' }),
          stagger('400ms', [
            animate('500ms 0.5s ease-in-out',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true }),
      ])
    ])
  ]
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
