import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManWatchComponent } from './man-watch.component';

describe('ManWatchComponent', () => {
  let component: ManWatchComponent;
  let fixture: ComponentFixture<ManWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
