import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanPantsComponent } from './woman-pants.component';

describe('WomanPantsComponent', () => {
  let component: WomanPantsComponent;
  let fixture: ComponentFixture<WomanPantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanPantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
