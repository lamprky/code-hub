import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugListComponent } from './components/bug-list/bug-list.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BugListComponent
  ],
  declarations: [BugListComponent],
  providers: [DataService]
})
export class BugListModule { }
