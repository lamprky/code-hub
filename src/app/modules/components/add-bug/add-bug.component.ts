import { Component, OnInit } from '@angular/core';
import { Bug } from '../../models/bug';
import { BugListComponent } from '../bug-list/bug-list.component';
import { SelectOption } from '../../models/selectOption.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'br-add-bug',
  templateUrl: './add-bug.component.html',
  styleUrls: ['./add-bug.component.scss']
})
export class AddBugComponent implements OnInit {
  bug: Bug;
  prioritiesOptions: SelectOption[];
  reporterOptions: SelectOption[];
  statusOptions: SelectOption[];

  constructor(private dataService: DataService, private router: Router) {
    this.bug = <Bug>{};
    this.prioritiesOptions = new Array<SelectOption>();
    this.reporterOptions = new Array<SelectOption>();
    this.statusOptions = new Array<SelectOption>();
  }

  ngOnInit() {
    this.prioritiesOptions.push({ value: 'Minor', key: 1 });
    this.prioritiesOptions.push({ value: 'Major', key: 2 });
    this.prioritiesOptions.push({ value: 'Critical', key: 3 });

    this.reporterOptions.push({ value: 'QA', key: 1 });
    this.reporterOptions.push({ value: 'PO', key: 2 });
    this.reporterOptions.push({ value: 'DEV', key: 3 });

    this.statusOptions.push({ value: 'Ready for test', key: 1 });
    this.statusOptions.push({ value: 'Done', key: 2 });
    this.statusOptions.push({ value: 'Rejected', key: 3 });
  }

  onSubmit() {
    this.dataService.postBug(this.bug).subscribe(value => {
      this.router.navigate(['']);
    });
  }
}
