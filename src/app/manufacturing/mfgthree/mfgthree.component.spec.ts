import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfgthreeComponent } from './mfgthree.component';

describe('MfgthreeComponent', () => {
  let component: MfgthreeComponent;
  let fixture: ComponentFixture<MfgthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfgthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfgthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
