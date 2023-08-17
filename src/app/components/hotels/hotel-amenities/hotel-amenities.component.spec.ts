import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAmenitiesComponent } from './hotel-amenities.component';

describe('HotelAmenitiesComponent', () => {
  let component: HotelAmenitiesComponent;
  let fixture: ComponentFixture<HotelAmenitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelAmenitiesComponent]
    });
    fixture = TestBed.createComponent(HotelAmenitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
