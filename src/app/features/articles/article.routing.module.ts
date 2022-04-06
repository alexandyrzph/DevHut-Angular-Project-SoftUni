import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AuthGuard } from '../../core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'create',
        component: ArticleCreateComponent
      },
      {
        path: 'edit/:id',
        component: ArticleEditComponent,
      },
      {
        path: ':id',
        component: ArticleDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}
