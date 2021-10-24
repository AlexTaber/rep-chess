import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSuccessesPerMinuteComponent } from './stats-successes-per-minute.component';

describe('StatusSuccessesPerMinuteComponent', () => {
  let component: StatusSuccessesPerMinuteComponent;
  let fixture: ComponentFixture<StatusSuccessesPerMinuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusSuccessesPerMinuteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSuccessesPerMinuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
