import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanShoeComponent } from './woman-shoe.component';

describe('WomanShoeComponent', () => {
  let component: WomanShoeComponent;
  let fixture: ComponentFixture<WomanShoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanShoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
