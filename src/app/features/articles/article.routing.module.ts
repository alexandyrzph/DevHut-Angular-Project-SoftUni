import { RouterModule, Routes } from "@angular/router";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
    {
        path: 'articles',
        component: ArticleComponent
    }
];

export const ArticleRoutingModule = RouterModule.forChild(routes);