import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmployeeManagementComponent } from './form-employee-management.component';

describe('FormEmployeeManagementComponent', () => {
  let component: FormEmployeeManagementComponent;
  let fixture: ComponentFixture<FormEmployeeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEmployeeManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEmployeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
