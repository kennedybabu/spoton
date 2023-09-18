import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDestPackagesComponent } from './create-dest-packages.component';

describe('CreateDestPackagesComponent', () => {
  let component: CreateDestPackagesComponent;
  let fixture: ComponentFixture<CreateDestPackagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDestPackagesComponent]
    });
    fixture = TestBed.createComponent(CreateDestPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
