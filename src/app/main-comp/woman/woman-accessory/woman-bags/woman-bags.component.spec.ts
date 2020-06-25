import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanBagsComponent } from './woman-bags.component';

describe('WomanBagsComponent', () => {
  let component: WomanBagsComponent;
  let fixture: ComponentFixture<WomanBagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanBagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanBagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
