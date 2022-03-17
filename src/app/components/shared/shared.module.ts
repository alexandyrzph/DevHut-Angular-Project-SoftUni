import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouting } from 'src/app/app.routing.module';



@NgModule({
    declarations: [
        NavigationComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        AppRouting
    ],
    exports: [
        NavigationComponent,
        FooterComponent
    ]
})
export class SharedModule { }
