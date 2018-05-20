import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn
} from '@angular/forms';
import { SelectOption } from '../../models/selectOption.model';
import { Bug } from '../../models/bug';
import { DataService } from '../../services/data.service';
import { FormOptionsService } from '../../services/form-options.service';
import { BaseComponent } from '../guards/BaseComponent';

@Component({
  selector: 'br-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnChanges, OnInit {
  hasChanges: boolean;
  @Input() bug: Bug;
  @Output() submit = new EventEmitter<Bug>();
  @Output() formChanges = new EventEmitter<boolean>();

  prioritiesOptions: SelectOption[];
  reporterOptions: SelectOption[];
  statusOptions: SelectOption[];
  form: FormGroup;

  constructor(private formOptionsService: FormOptionsService) {
    this.prioritiesOptions = this.formOptionsService.getPrioritiesOptions();
    this.reporterOptions = this.formOptionsService.getReporterOptions();
    this.statusOptions = this.formOptionsService.getStatusOptions();

    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl('')
    });

    this.hasChanges = false;
  }

  ngOnInit(): void {
    this.form.controls.reporter.valueChanges.subscribe((value: number) => {
      if (value === 1) {
        this.form.controls.status.setValidators(Validators.required);
      } else {
        this.form.controls.status.clearValidators();
      }
      this.form.controls.status.updateValueAndValidity();
    });
  }

  ngOnChanges() {
    if (this.bug.title !== undefined) {
      this.form.controls.title.setValue(this.bug.title);
      this.form.controls.description.setValue(this.bug.description);
      this.form.controls.priority.setValue(this.bug.priority);
      this.form.controls.reporter.setValue(+this.bug.reporter);
      this.form.controls.status.setValue(this.bug.status);
      this.registerFormChanges();
    }
  }

  registerFormChanges() {
    this.form.valueChanges.subscribe(val => {
      if (!this.hasChanges) {
        this.hasChanges = !this.hasChanges;
        this.formChanges.emit();
      }
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

  isNew() {
    if (this.bug.title === undefined) {
      return true;
    } else {
      return false;
    }
  }

  canAddComment() {
    return (
      !this.isNew() && (+this.bug.reporter === 2 || +this.bug.reporter === 3)
    );
  }

  canSubmitForm(form: FormGroup) {
    return form.valid && (this.canAddComment() || !this.isUpdateNotQa());
  }

  getTitle() {
    if (this.isNew()) {
      return 'New';
    } else {
      return 'Edit';
    }
  }

  onSubmit() {
    Object.keys(this.form.value).map(key => {
      if (key === 'comment') {
        this.bug['comments'].push(this.form.value[key]);
      } else {
        this.bug[key] = this.form.value[key];
      }
    });

    this.submit.emit(this.bug);
  }
}
