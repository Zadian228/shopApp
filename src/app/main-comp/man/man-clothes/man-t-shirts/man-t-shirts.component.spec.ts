import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManTShirtsComponent } from './man-t-shirts.component';

describe('ManTShirtsComponent', () => {
  let component: ManTShirtsComponent;
  let fixture: ComponentFixture<ManTShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManTShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManTShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
