import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule {
}
