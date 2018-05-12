import { Component, OnInit } from '@angular/core';
import { Bug } from '../../models/bug';
import { BugListComponent } from '../bug-list/bug-list.component';
import { SelectOption } from '../../models/selectOption.model';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { FormOptionsService } from '../../services/form-options.service';

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

  constructor(private dataService: DataService, private formOptionsService: FormOptionsService, private router: Router) {
    this.bug = <Bug>{};

    this.prioritiesOptions = this.formOptionsService.getPrioritiesOptions();
    this.reporterOptions = this.formOptionsService.getReporterOptions();
    this.statusOptions = this.formOptionsService.getStatusOptions();
  }

  ngOnInit() {
  }

  isStatusReq(): boolean {
    if (this.bug.reporter === '1') {
      return true;
    } else {
      return false;
    }
  }
  onSubmit() {
    this.dataService.postBug(this.bug).subscribe(value => {
      this.router.navigate(['']);
    });
  }
}
