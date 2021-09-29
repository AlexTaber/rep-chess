import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionExerciseComponent } from './training-session-exercise.component';

describe('TrainingSessionExerciseComponent', () => {
  let component: TrainingSessionExerciseComponent;
  let fixture: ComponentFixture<TrainingSessionExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
