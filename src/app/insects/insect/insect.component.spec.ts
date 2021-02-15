import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InsectComponent } from './insect.component';

describe('InsectComponent', () => {
  let component: InsectComponent;
  let fixture: ComponentFixture<InsectComponent>;

  beforeEach(waitForAsync(() => {
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
