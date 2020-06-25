import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManTiesComponent } from './man-ties.component';

describe('ManTiesComponent', () => {
  let component: ManTiesComponent;
  let fixture: ComponentFixture<ManTiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManTiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManTiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
