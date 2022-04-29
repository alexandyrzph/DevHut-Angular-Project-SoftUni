import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticlesComponent } from './articles.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'all',
        component: ArticleListComponent,
      },
      {
        path: 'create',
        component: ArticleEditComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: ':id',
        component: ArticleDetailsComponent,
      },
      {
        path: ':id/edit',
        component: ArticleEditComponent,
      },
      {
        path: '',
        redirectTo: 'all'
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {
}
