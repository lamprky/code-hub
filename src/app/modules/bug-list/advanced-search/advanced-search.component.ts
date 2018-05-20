import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SearchCriteria } from '../../models/searchCriteria';
import { FormOptionsService } from '../../services/form-options.service';
import { SelectOption } from '../../models/selectOption.model';

@Component({
  selector: 'br-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  @Output() searchClicked = new EventEmitter<SearchCriteria>();
  statusOptions: SelectOption[];
  reporterOptions: SelectOption[];
  prioritiesOptions: SelectOption[];

  form: FormGroup;

  constructor(private formOptionsService: FormOptionsService) {
    this.prioritiesOptions = this.formOptionsService.getPrioritiesOptions();
    this.reporterOptions = this.formOptionsService.getReporterOptions();
    this.statusOptions = this.formOptionsService.getStatusOptions();
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(''),
      priority: new FormControl(''),
      reporter: new FormControl(''),
      status: new FormControl('')
    });
  }

  disableSearch() : boolean{
    return false;
  }

  search(){
    const searchCriteria = <SearchCriteria>{};
    Object.keys(this.form.value).map( key =>{
      if(this.form.value[key]){
        searchCriteria[key] = this.form.value[key];
      }
    });

    this.searchClicked.emit(searchCriteria);
  }
}
