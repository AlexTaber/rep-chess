import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainExercisesComponent } from './train-exercises.component';

describe('TrainExercisesComponent', () => {
  let component: TrainExercisesComponent;
  let fixture: ComponentFixture<TrainExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainExercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
