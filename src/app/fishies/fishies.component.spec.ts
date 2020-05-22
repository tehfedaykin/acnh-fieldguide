import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishiesComponent } from './fishies.component';

describe('FishiesComponent', () => {
  let component: FishiesComponent;
  let fixture: ComponentFixture<FishiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
