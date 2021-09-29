import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionResultsComponent } from './training-session-results.component';

describe('TrainingSessionResultsComponent', () => {
  let component: TrainingSessionResultsComponent;
  let fixture: ComponentFixture<TrainingSessionResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
