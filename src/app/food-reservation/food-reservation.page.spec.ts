import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodReservationPage } from './food-reservation.page';

describe('FoodReservationPage', () => {
  let component: FoodReservationPage;
  let fixture: ComponentFixture<FoodReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
