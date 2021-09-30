import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackAccuracyChartComponent } from './pack-accuracy-chart.component';

describe('PackAccuracyChartComponent', () => {
  let component: PackAccuracyChartComponent;
  let fixture: ComponentFixture<PackAccuracyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackAccuracyChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackAccuracyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
