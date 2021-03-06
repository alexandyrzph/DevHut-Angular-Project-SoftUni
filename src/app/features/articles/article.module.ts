import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article.routing.module';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ArticlesComponent } from './articles.component';
import { ArticleListItemComponent } from './article-list-item/article-list-item.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ArticleEditComponent,
    ArticleListComponent,
    ArticleDetailsComponent,
    ProfileComponent,
    ArticlesComponent,
    ArticleListItemComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ArticleModule {
}
