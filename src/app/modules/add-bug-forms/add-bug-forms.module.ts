import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBugReactiveComponent } from './add-bug-reactive/add-bug-reactive.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AddBugTemplateComponent } from './add-bug-template/add-bug-template.component';

const routes: Routes = [
  {path: 'addBugTemplate', component: AddBugTemplateComponent},
  {path: 'addBugReactive', component: AddBugReactiveComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AddBugTemplateComponent,
    AddBugReactiveComponent
  ],
  exports: [
    AddBugTemplateComponent,
    AddBugReactiveComponent
  ]
})
export class AddBugFormsModule { }
