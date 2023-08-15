import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAmenityTileComponent } from './hotel-amenity-tile.component';

describe('HotelAmenityTileComponent', () => {
  let component: HotelAmenityTileComponent;
  let fixture: ComponentFixture<HotelAmenityTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelAmenityTileComponent]
    });
    fixture = TestBed.createComponent(HotelAmenityTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
