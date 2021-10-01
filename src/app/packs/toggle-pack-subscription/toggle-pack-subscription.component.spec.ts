import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglePackSubscriptionComponent } from './toggle-pack-subscription.component';

describe('TogglePackSubscriptionComponent', () => {
  let component: TogglePackSubscriptionComponent;
  let fixture: ComponentFixture<TogglePackSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglePackSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogglePackSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
