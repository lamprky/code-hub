import { Component, OnInit } from '@angular/core';
import { SelectOption } from '../../models/selectOption.model';
import { DataService } from '../../services/data.service';
import { Bug } from '../../models/bug';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormOptionsService } from '../../services/form-options.service';

@Component({
  selector: 'br-add-bug-reactive',
  templateUrl: './add-bug-reactive.component.html',
  styleUrls: ['./add-bug-reactive.component.scss']
})
export class AddBugReactiveComponent implements OnInit {
  bug: Bug;
  prioritiesOptions: SelectOption[];
  reporterOptions: SelectOption[];
  statusOptions: SelectOption[];

  addNewForm: FormGroup;

  constructor(private dataService: DataService, private formOptionsService: FormOptionsService, private router: Router) {
    this.bug = <Bug>{};
    this.prioritiesOptions = this.formOptionsService.getPrioritiesOptions();
    this.reporterOptions = this.formOptionsService.getReporterOptions();
    this.statusOptions = this.formOptionsService.getStatusOptions();
  }

  ngOnInit() {
    this.addNewForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('')
    });

    this.addNewForm.controls.reporter.valueChanges.subscribe(
      (value: number) => {
        if (value === 1) {
          this.addNewForm.controls.status.setValidators(Validators.required);
        } else {
          this.addNewForm.controls.status.clearValidators();
        }

        this.addNewForm.controls.status.updateValueAndValidity();
      }
    );
  }

  onSubmit() {
    Object.keys(this.addNewForm.value).map(key => {
      this.bug[key] = this.addNewForm.value[key];
    });
    this.dataService.postBug(this.bug).subscribe(value => {
      this.router.navigate(['']);
    });
  }
}
