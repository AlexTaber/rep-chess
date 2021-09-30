import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSessionResultsPageComponent } from './training-session-results-page.component';

describe('TrainingSessionResultsPageComponent', () => {
  let component: TrainingSessionResultsPageComponent;
  let fixture: ComponentFixture<TrainingSessionResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSessionResultsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSessionResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
