import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderedFoodPage } from './ordered-food.page';

describe('OrderedFoodPage', () => {
  let component: OrderedFoodPage;
  let fixture: ComponentFixture<OrderedFoodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedFoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
