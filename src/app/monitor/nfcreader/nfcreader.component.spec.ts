import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcreaderComponent } from './nfcreader.component';

describe('NfcreaderComponent', () => {
  let component: NfcreaderComponent;
  let fixture: ComponentFixture<NfcreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfcreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
