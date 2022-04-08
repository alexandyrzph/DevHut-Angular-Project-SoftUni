import { Component, OnInit } from '@angular/core';
import { Article } from '../../../core/models/article.model';
import { CrudService } from '../../../core/services/crud.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-articles-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: any;

  constructor(private crudService: CrudService,
              private db: AngularFireDatabase,
              ) {

  }

  ngOnInit(): void {
    // this.crudService.getAllArticles().subscribe((articles: Article[]) => {
    //   console.log(articles)
    // });
    console.log(this.articles)
  }

}
