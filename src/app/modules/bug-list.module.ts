import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugListComponent } from './components/bug-list/bug-list.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddBugReactiveComponent } from './components/add-bug-reactive/add-bug-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormOptionsService } from './services/form-options.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    BugListComponent
  ],
  declarations: [BugListComponent, AddBugReactiveComponent],
  providers: [DataService, FormOptionsService]
})
export class BugListModule { }
