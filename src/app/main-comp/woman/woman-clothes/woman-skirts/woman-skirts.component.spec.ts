import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanSkirtsComponent } from './woman-skirts.component';

describe('WomanSkirtsComponent', () => {
  let component: WomanSkirtsComponent;
  let fixture: ComponentFixture<WomanSkirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanSkirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanSkirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
