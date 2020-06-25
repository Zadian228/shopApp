import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSneakersComponent } from './man-sneakers.component';

describe('ManSneakersComponent', () => {
  let component: ManSneakersComponent;
  let fixture: ComponentFixture<ManSneakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManSneakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManSneakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
