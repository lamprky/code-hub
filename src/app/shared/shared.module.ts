import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [PaginationComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    PaginationComponent
  ]
})
export class SharedModule { }
