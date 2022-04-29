import { Component, Input } from '@angular/core';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-article-list-item',
  templateUrl: './article-list-item.component.html',
  styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent {

  @Input() article!: Article;

}
