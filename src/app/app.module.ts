import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugListModule } from './modules/bug-list.module';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './router';
import { AddBugComponent } from './modules/components/add-bug/add-bug.component';


@NgModule({
  declarations: [
    AppComponent,
    AddBugComponent
  ],
  imports: [
    BrowserModule,
    BugListModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
