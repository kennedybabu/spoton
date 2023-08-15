import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageTileComponent } from './package-tile.component';

describe('PackageTileComponent', () => {
  let component: PackageTileComponent;
  let fixture: ComponentFixture<PackageTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageTileComponent]
    });
    fixture = TestBed.createComponent(PackageTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
