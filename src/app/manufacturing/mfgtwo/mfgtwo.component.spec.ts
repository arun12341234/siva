import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfgtwoComponent } from './mfgtwo.component';

describe('MfgtwoComponent', () => {
  let component: MfgtwoComponent;
  let fixture: ComponentFixture<MfgtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfgtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfgtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
