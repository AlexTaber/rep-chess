import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackResultsComponent } from './pack-results.component';

describe('PackResultsComponent', () => {
  let component: PackResultsComponent;
  let fixture: ComponentFixture<PackResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
