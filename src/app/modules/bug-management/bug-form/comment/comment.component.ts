import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectOption } from '../../../models/selectOption.model';
import { FormOptionsService } from '../../../services/form-options.service';

@Component({
  selector: 'br-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;

  commentFormGroup: FormGroup;
  reporterOptions: SelectOption[];

  constructor(private formOptionsService: FormOptionsService) {
    this.reporterOptions = this.formOptionsService.getReporterOptions().filter((report) => report.key !== 1);
   }

  ngOnInit() {
    this.commentFormGroup = new FormGroup({
      reporter: new FormControl(null, Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.parentFormGroup.addControl('comment', this.commentFormGroup);
  }

}
