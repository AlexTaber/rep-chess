import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisesClockComponent } from './exercises-clock.component';

describe('ExercisesClockComponent', () => {
  let component: ExercisesClockComponent;
  let fixture: ComponentFixture<ExercisesClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisesClockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisesClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
