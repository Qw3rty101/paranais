import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodPaymentPage } from './food-payment.page';

describe('FoodPaymentPage', () => {
  let component: FoodPaymentPage;
  let fixture: ComponentFixture<FoodPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
