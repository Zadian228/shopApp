import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanAccessoryComponent } from './woman-accessory.component';

describe('WomanAccessoryComponent', () => {
  let component: WomanAccessoryComponent;
  let fixture: ComponentFixture<WomanAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
