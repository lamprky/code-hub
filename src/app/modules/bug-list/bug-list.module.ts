import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugListComponent } from './bug-list.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormOptionsService } from '../services/form-options.service';
import { CoreModule } from '../../core/core.module';

const routes: Routes = [
  {path: 'bug-list', component: BugListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [BugListComponent],
  providers: [DataService, FormOptionsService]
})
export class BugListModule { }
