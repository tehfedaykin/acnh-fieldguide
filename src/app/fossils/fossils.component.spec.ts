import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilsComponent } from './fossils.component';

describe('FossilsComponent', () => {
  let component: FossilsComponent;
  let fixture: ComponentFixture<FossilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FossilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
