import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackCycleCompleteComponent } from './pack-cycle-complete.component';

describe('PackCycleCompleteComponent', () => {
  let component: PackCycleCompleteComponent;
  let fixture: ComponentFixture<PackCycleCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackCycleCompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackCycleCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
