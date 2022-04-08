import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article.routing.module';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MyArticlesComponent } from './my-articles/my-articles.component';
import { ArticlesComponent } from './articles.component';


@NgModule({
  declarations: [
    ArticleEditComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    MyArticlesComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ArticleModule {
}
