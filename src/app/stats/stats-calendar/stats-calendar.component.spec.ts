import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsCalendarComponent } from './stats-calendar.component';

describe('StatsCalendarComponent', () => {
  let component: StatsCalendarComponent;
  let fixture: ComponentFixture<StatsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
