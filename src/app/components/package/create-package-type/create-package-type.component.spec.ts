import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackageTypeComponent } from './create-package-type.component';

describe('CreatePackageTypeComponent', () => {
  let component: CreatePackageTypeComponent;
  let fixture: ComponentFixture<CreatePackageTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePackageTypeComponent]
    });
    fixture = TestBed.createComponent(CreatePackageTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
