import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBugTemplateComponent } from './add-bug-template.component';

describe('AddBugTemplateComponent', () => {
  let component: AddBugTemplateComponent;
  let fixture: ComponentFixture<AddBugTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBugTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBugTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
