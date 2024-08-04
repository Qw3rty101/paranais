import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReservationPage } from './reservation.page';

describe('BerandaPage', () => {
  let component: ReservationPage;
  let fixture: ComponentFixture<ReservationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title set', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ion-title').textContent).toContain('Hotel Reservation');
  });
  // Add more tests as needed
});
