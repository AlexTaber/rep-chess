import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAccuracyComponent } from './stats-accuracy.component';

describe('StatsAccuracyComponent', () => {
  let component: StatsAccuracyComponent;
  let fixture: ComponentFixture<StatsAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsAccuracyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
