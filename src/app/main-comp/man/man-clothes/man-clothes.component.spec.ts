import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManClothesComponent } from './man-clothes.component';

describe('ManClothesComponent', () => {
  let component: ManClothesComponent;
  let fixture: ComponentFixture<ManClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
