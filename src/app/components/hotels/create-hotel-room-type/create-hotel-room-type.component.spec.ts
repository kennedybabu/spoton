import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelRoomTypeComponent } from './create-hotel-room-type.component';

describe('CreateHotelRoomTypeComponent', () => {
  let component: CreateHotelRoomTypeComponent;
  let fixture: ComponentFixture<CreateHotelRoomTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHotelRoomTypeComponent]
    });
    fixture = TestBed.createComponent(CreateHotelRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
