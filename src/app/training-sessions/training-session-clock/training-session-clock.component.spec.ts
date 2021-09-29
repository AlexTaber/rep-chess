import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionClockComponent } from './training-session-clock.component';

describe('TrainingSessionClockComponent', () => {
  let component: TrainingSessionClockComponent;
  let fixture: ComponentFixture<TrainingSessionClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
