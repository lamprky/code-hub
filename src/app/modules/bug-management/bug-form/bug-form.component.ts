import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectOption } from '../../models/selectOption.model';
import { Bug } from '../../models/bug';
import { DataService } from '../../services/data.service';
import { FormOptionsService } from '../../services/form-options.service';

@Component({
  selector: 'br-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnChanges {
  @Input() bug: Bug;
  @Output() submit = new EventEmitter();

  prioritiesOptions: SelectOption[];
  reporterOptions: SelectOption[];
  statusOptions: SelectOption[];

  form: FormGroup;

  constructor(private formOptionsService: FormOptionsService) {
    this.prioritiesOptions = this.formOptionsService.getPrioritiesOptions();
    this.reporterOptions = this.formOptionsService.getReporterOptions();
    this.statusOptions = this.formOptionsService.getStatusOptions();
  }

  ngOnChanges() {
    this.form = new FormGroup({
      title: new FormControl(this.bug.title, Validators.required),
      description: new FormControl(this.bug.description, Validators.required),
      priority: new FormControl(this.bug.priority, Validators.required),
      reporter: new FormControl((this.bug.reporter !== undefined) ? +this.bug.reporter : null, Validators.required),
      status: new FormControl(this.bug.status)
    });

    this.form.controls.reporter.valueChanges.subscribe((value: number) => {
      if (value === 1) {
        this.form.controls.status.setValidators(Validators.required);
      } else {
        this.form.controls.status.clearValidators();
      }
      this.form.controls.status.updateValueAndValidity();
    });
  }

  isUpdateNotQa() {
    if (this.bug.title === undefined) {
      return false;
    } else if (+this.bug.reporter === 1) {
      return false;
    } else {
      return true;
    }
  }

  onSubmit() {
    Object.keys(this.form.value).map(key => {
      this.bug[key] = this.form.value[key];
    });

    this.submit.emit(this.bug);
  }
}
