import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackResultsPageComponent } from './pack-results-page.component';

describe('PackResultsPageComponent', () => {
  let component: PackResultsPageComponent;
  let fixture: ComponentFixture<PackResultsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackResultsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
