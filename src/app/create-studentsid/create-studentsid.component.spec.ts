import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentsidComponent } from './create-studentsid.component';

describe('CreateStudentsidComponent', () => {
  let component: CreateStudentsidComponent;
  let fixture: ComponentFixture<CreateStudentsidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentsidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
