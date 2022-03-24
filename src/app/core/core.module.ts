import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ArticleService } from './article.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';


@NgModule({
    declarations: [
        NavigationComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule
    ],
    exports: [
        NavigationComponent,
        FooterComponent
    ],
    providers: [
        ArticleService,
        UserService
    ]
})
export class CoreModule { }
