import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionsSuccessesPerMinuteComponent } from './training-sessions-successes-per-minute.component';

describe('TrainingSessionsSuccessesPerMinuteComponent', () => {
  let component: TrainingSessionsSuccessesPerMinuteComponent;
  let fixture: ComponentFixture<TrainingSessionsSuccessesPerMinuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionsSuccessesPerMinuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionsSuccessesPerMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
