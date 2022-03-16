import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing.module';
import { LandingModule } from './components/landing/landing.module';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        LandingModule,
        AppRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
