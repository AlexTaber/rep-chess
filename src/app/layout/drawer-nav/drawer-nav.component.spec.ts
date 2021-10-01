import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerNavComponent } from './drawer-nav.component';

describe('DrawerNavComponent', () => {
  let component: DrawerNavComponent;
  let fixture: ComponentFixture<DrawerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
