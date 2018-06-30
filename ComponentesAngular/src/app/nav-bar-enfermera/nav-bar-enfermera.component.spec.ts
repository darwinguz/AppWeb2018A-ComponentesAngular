import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarEnfermeraComponent } from './nav-bar-enfermera.component';

describe('NavBarEnfermeraComponent', () => {
  let component: NavBarEnfermeraComponent;
  let fixture: ComponentFixture<NavBarEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
