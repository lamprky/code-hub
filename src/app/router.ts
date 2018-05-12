import { BugListComponent } from './modules/bug-list/bug-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '' , redirectTo:'bug-list', pathMatch: 'full'}
];
