import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManAccessoryComponent } from './man-accessory.component';

describe('ManAccessoryComponent', () => {
  let component: ManAccessoryComponent;
  let fixture: ComponentFixture<ManAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
