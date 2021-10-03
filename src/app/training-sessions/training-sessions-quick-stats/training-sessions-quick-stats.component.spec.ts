import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionsQuickStatsComponent } from './training-sessions-quick-stats.component';

describe('TrainingSessionsQuickStatsComponent', () => {
  let component: TrainingSessionsQuickStatsComponent;
  let fixture: ComponentFixture<TrainingSessionsQuickStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionsQuickStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionsQuickStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
