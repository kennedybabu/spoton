import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePackageOptionComponent } from './create-package-option.component';

describe('CreatePackageOptionComponent', () => {
  let component: CreatePackageOptionComponent;
  let fixture: ComponentFixture<CreatePackageOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePackageOptionComponent]
    });
    fixture = TestBed.createComponent(CreatePackageOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
