import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackSecondsPerSuccessChartComponent } from './pack-seconds-per-success-chart.component';

describe('PackSecondsPerSuccessChartComponent', () => {
  let component: PackSecondsPerSuccessChartComponent;
  let fixture: ComponentFixture<PackSecondsPerSuccessChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackSecondsPerSuccessChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackSecondsPerSuccessChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
