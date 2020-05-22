import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerComponent } from './villager.component';

describe('VillagerComponent', () => {
  let component: VillagerComponent;
  let fixture: ComponentFixture<VillagerComponent>;

  beforeEach(async(() => {
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
