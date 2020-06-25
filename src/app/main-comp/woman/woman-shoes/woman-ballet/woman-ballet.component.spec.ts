import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanBalletComponent } from './woman-ballet.component';

describe('WomanBalletComponent', () => {
  let component: WomanBalletComponent;
  let fixture: ComponentFixture<WomanBalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanBalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanBalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
