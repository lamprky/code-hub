import { BugListComponent } from './modules/components/bug-list/bug-list.component';
import { Routes } from '@angular/router';
import { AddBugComponent } from './modules/components/add-bug/add-bug.component';

export const routes: Routes = [
  {path: '' , component: BugListComponent, pathMatch: 'full'},
  {path: 'addbug' , component: AddBugComponent}
];
