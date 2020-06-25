import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanScarvesComponent } from './woman-scarves.component';

describe('WomanScarvesComponent', () => {
  let component: WomanScarvesComponent;
  let fixture: ComponentFixture<WomanScarvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WomanScarvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanScarvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
