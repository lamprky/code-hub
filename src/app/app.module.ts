import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BugListModule } from './modules/bug-list/bug-list.module';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './router';
import { CoreModule } from './core/core.module';
import { AddBugFormsModule } from './modules/add-bug-forms/add-bug-forms.module';
import { BugManagementComponent } from './modules/bug-management/bug-management.component';
import { BugFormComponent } from './modules/bug-management/bug-form/bug-form.component';
import { BugManagementModule } from './modules/bug-management/bug-management.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BugListModule,
    AddBugFormsModule,
    BugManagementModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
