import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsectComponent } from './insect.component';

describe('InsectComponent', () => {
  let component: InsectComponent;
  let fixture: ComponentFixture<InsectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
