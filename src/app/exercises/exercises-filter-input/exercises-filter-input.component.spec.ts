import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesFilterInputComponent } from './exercises-filter-input.component';

describe('ExercisesFilterInputComponent', () => {
  let component: ExercisesFilterInputComponent;
  let fixture: ComponentFixture<ExercisesFilterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesFilterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesFilterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
