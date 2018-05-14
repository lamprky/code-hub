import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BugManagementComponent } from './bug-management.component';
import { BugFormComponent } from './bug-form/bug-form.component';

const routes: Routes = [
  {path: 'bug', component: BugManagementComponent},
  {path: 'bug/:id', component: BugManagementComponent},

];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BugManagementComponent, BugFormComponent
  ],
  exports: [
    BugManagementComponent, BugFormComponent
  ]
})
export class BugManagementModule { }
