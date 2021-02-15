import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VillagerComponent } from './villager.component';

describe('VillagerComponent', () => {
  let component: VillagerComponent;
  let fixture: ComponentFixture<VillagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
