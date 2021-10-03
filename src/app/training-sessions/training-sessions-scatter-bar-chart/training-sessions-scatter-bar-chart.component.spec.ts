import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionsScatterBarChartComponent } from './training-sessions-scatter-bar-chart.component';

describe('TrainingSessionsScatterBarChartComponent', () => {
  let component: TrainingSessionsScatterBarChartComponent;
  let fixture: ComponentFixture<TrainingSessionsScatterBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionsScatterBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionsScatterBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
