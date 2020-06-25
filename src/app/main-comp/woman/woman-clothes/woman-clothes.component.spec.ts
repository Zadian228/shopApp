import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanClothesComponent } from './woman-clothes.component';

describe('WomanClothesComponent', () => {
  let component: WomanClothesComponent;
  let fixture: ComponentFixture<WomanClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
