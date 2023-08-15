import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomTileComponent } from './hotel-room-tile.component';

describe('HotelRoomTileComponent', () => {
  let component: HotelRoomTileComponent;
  let fixture: ComponentFixture<HotelRoomTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelRoomTileComponent]
    });
    fixture = TestBed.createComponent(HotelRoomTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
