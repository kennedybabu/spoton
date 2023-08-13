import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHotelImagesComponent } from './create-hotel-images.component';

describe('CreateHotelImagesComponent', () => {
  let component: CreateHotelImagesComponent;
  let fixture: ComponentFixture<CreateHotelImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHotelImagesComponent]
    });
    fixture = TestBed.createComponent(CreateHotelImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
