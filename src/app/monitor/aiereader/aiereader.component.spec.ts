import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiereaderComponent } from './aiereader.component';

describe('AiereaderComponent', () => {
  let component: AiereaderComponent;
  let fixture: ComponentFixture<AiereaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiereaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiereaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
