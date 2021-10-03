import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterBarChartComponent } from './scatter-bar-chart.component';

describe('ScatterBarChartComponent', () => {
  let component: ScatterBarChartComponent;
  let fixture: ComponentFixture<ScatterBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
