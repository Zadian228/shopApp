import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManPantsComponent } from './man-pants.component';

describe('ManPantsComponent', () => {
  let component: ManPantsComponent;
  let fixture: ComponentFixture<ManPantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManPantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
