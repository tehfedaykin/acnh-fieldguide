import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VillagersComponent } from './villagers.component';

describe('VillagersComponent', () => {
  let component: VillagersComponent;
  let fixture: ComponentFixture<VillagersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
