import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailoneComponent } from './retailone.component';

describe('RetailoneComponent', () => {
  let component: RetailoneComponent;
  let fixture: ComponentFixture<RetailoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
