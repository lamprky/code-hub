import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugFormComponent } from './bug-form.component';
import { CommentComponent } from './comment/comment.component';
import { FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormOptionsService } from '../../services/form-options.service';
import { Bug } from '../../models/bug';

fdescribe('BugFormComponent', () => {
  let component: BugFormComponent;
  let fixture: ComponentFixture<BugFormComponent>;
  let fixtureComment: ComponentFixture<CommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugFormComponent, CommentComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [FormOptionsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugFormComponent);
    fixtureComment = TestBed.createComponent(CommentComponent);

    component = fixture.componentInstance;
    component.bug = <Bug>{
      title: 'Bug 1',
      description: 'critical Bug',
      reporter: 1,
      priority: 2,
      status: '1'
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // a. Validate that the form is invalid if no data entered
  it('form invalid when empty', () => {
    component.buildForm();
    expect(component.form.valid).toBeFalsy();
  });

  // b. Validate that the form is valid by having the minimum required fields
  it('form valid for the minimum required fields', () => {
    component.buildForm();

    const titleControl = component.form.get('title');
    const descriptionControl = component.form.get('description');
    const priorityControl = component.form.get('priority');
    const reporterControl = component.form.get('reporter');

    component.form.controls.title.setValue('Bug 1');
    component.form.controls.description.setValue('This Bug');
    component.form.controls.priority.setValue(1);
    component.form.controls.reporter.setValue(2);

    expect(component.form.valid).toBeTruthy();
  });

  // c. Set the Reporter to “QA” and validate that the form is invalid
  it('form invalid when set the Reporter to “QA”', () => {
    component.buildForm();
    const titleControl = component.form.get('title');
    const descriptionControl = component.form.get('description');
    const priorityControl = component.form.get('priority');
    const reporterControl = component.form.get('reporter');

    fixture.detectChanges();
    component.form.controls.title.setValue('Bug 1');
    component.form.controls.description.setValue('This Bug');
    component.form.controls.priority.setValue(1);
    component.form.controls.reporter.setValue(1);
    expect(component.form.valid).toBeFalsy();
  });

  // d. Set the Reporter to “QA”, set any Status and validate that the form is valid
  it('form valid when Set the Reporter to “QA”, set any Status', () => {
    component.buildForm();
    const titleControl = component.form.get('title');
    const descriptionControl = component.form.get('description');
    const priorityControl = component.form.get('priority');
    const reporterControl = component.form.get('reporter');
    const statusControl = component.form.get('status');

    component.form.controls.title.setValue('Bug 1');
    component.form.controls.description.setValue('This Bug');
    component.form.controls.priority.setValue(1);
    component.form.controls.reporter.setValue(1);
    component.form.controls.status.setValue(2);

    expect(component.form.valid).toBeTruthy();
  });
});
