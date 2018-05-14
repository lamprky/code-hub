import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugManagementComponent } from './bug-management.component';

describe('BugManagementComponent', () => {
  let component: BugManagementComponent;
  let fixture: ComponentFixture<BugManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
