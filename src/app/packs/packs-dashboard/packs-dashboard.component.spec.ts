import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksDashboardComponent } from './packs-dashboard.component';

describe('PacksDashboardComponent', () => {
  let component: PacksDashboardComponent;
  let fixture: ComponentFixture<PacksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacksDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
