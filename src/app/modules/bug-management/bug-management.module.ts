import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { BugManagementComponent } from './bug-management.component';
import { BugFormComponent } from './bug-form/bug-form.component';
import { CommentComponent } from './bug-form/comment/comment.component';
import { UnfinishedChangesGuard } from './guards/UnfinishedChangesGuard';

const routes: Routes = [
  {path: 'bug', component: BugManagementComponent, canDeactivate: [UnfinishedChangesGuard]},
  {path: 'bug/:id', component: BugManagementComponent, canDeactivate: [UnfinishedChangesGuard]}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BugManagementComponent, BugFormComponent, CommentComponent
  ],
  exports: [
    BugManagementComponent, BugFormComponent, CommentComponent
  ],
  providers: [ UnfinishedChangesGuard ],
})
export class BugManagementModule { }
