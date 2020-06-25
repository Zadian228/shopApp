import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManShirtsComponent } from './man-shirts.component';

describe('ManShirtsComponent', () => {
  let component: ManShirtsComponent;
  let fixture: ComponentFixture<ManShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
