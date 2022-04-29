import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/pages/home/home.component";
import { NonAuthGuard } from './core/guards/non-auth.guard';
import { NotFoundPageComponent } from './features/pages/not-found-page/not-found-page.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'articles', loadChildren: () => import('./features/articles/article.module').then(m => m.ArticleModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [NonAuthGuard],
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
