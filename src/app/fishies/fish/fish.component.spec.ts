import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FishComponent } from './fish.component';

describe('FishComponent', () => {
  let component: FishComponent;
  let fixture: ComponentFixture<FishComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
