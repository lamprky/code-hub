import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BugListComponent } from './bug-list.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormOptionsService } from '../services/form-options.service';
import { CoreModule } from '../../core/core.module';
import { KeyValueMapPipe } from '../pipes/key-value-map.pipe';
import { SharedModule } from '../../shared/shared.module';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';

const routes: Routes = [
  {path: 'bug-list', component: BugListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [BugListComponent, KeyValueMapPipe, AdvancedSearchComponent],
  providers: [DataService, FormOptionsService]
})
export class BugListModule { }
