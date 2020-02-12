import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfgoneComponent } from './mfgone.component';

describe('MfgoneComponent', () => {
  let component: MfgoneComponent;
  let fixture: ComponentFixture<MfgoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfgoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfgoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
