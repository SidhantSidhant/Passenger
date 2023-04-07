import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersDashBordComponent } from './passengers-dash-bord.component';

describe('PassengersDashBordComponent', () => {
  let component: PassengersDashBordComponent;
  let fixture: ComponentFixture<PassengersDashBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersDashBordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengersDashBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
