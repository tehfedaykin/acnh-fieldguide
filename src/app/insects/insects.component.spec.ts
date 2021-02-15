import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InsectsComponent } from './insects.component';

describe('InsectsComponent', () => {
  let component: InsectsComponent;
  let fixture: ComponentFixture<InsectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InsectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
