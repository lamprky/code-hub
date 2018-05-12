import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BugListModule } from './modules/bug-list/bug-list.module';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './router';
import { CoreModule } from './core/core.module';
import { AddBugFormsModule } from './modules/add-bug-forms/add-bug-forms.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BugListModule,
    AddBugFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
