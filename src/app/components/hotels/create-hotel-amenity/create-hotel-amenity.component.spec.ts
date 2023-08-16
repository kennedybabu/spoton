import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelAmenityComponent } from './create-hotel-amenity.component';

describe('CreateHotelAmenityComponent', () => {
  let component: CreateHotelAmenityComponent;
  let fixture: ComponentFixture<CreateHotelAmenityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHotelAmenityComponent]
    });
    fixture = TestBed.createComponent(CreateHotelAmenityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
