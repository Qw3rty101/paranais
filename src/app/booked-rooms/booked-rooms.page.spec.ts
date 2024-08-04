import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookedRoomsPage } from './booked-rooms.page';

describe('BookedRoomsPage', () => {
  let component: BookedRoomsPage;
  let fixture: ComponentFixture<BookedRoomsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
