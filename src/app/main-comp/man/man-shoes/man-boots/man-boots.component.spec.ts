import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManBootsComponent } from './man-boots.component';

describe('ManBootsComponent', () => {
  let component: ManBootsComponent;
  let fixture: ComponentFixture<ManBootsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManBootsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManBootsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
