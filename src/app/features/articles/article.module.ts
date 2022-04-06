import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article.routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule {
}
