import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBugReactiveComponent } from './add-bug-reactive.component';

describe('AddBugReactiveComponent', () => {
  let component: AddBugReactiveComponent;
  let fixture: ComponentFixture<AddBugReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBugReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBugReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
