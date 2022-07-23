import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { PageContentComponent } from '../layout/page-content/page-content.component';



@NgModule({
  declarations: [SpinnerComponent,PageContentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    RouterModule,
    SpinnerComponent,
    PageContentComponent
  ]
})
export class SharedModule { }
