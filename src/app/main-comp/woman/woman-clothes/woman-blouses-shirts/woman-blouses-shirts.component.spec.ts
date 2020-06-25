import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanBlousesShirtsComponent } from './woman-blouses-shirts.component';

describe('WomanBlousesShirtsComponent', () => {
  let component: WomanBlousesShirtsComponent;
  let fixture: ComponentFixture<WomanBlousesShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanBlousesShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanBlousesShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
