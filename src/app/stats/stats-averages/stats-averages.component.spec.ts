import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAveragesComponent } from './stats-averages.component';

describe('StatsAveragesComponent', () => {
  let component: StatsAveragesComponent;
  let fixture: ComponentFixture<StatsAveragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsAveragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsAveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
