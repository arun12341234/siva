import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailtwoComponent } from './retailtwo.component';

describe('RetailtwoComponent', () => {
  let component: RetailtwoComponent;
  let fixture: ComponentFixture<RetailtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
