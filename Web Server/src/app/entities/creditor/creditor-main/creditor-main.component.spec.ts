import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorComponent } from './creditor-main.component';

describe('CreditorComponent', () => {
  let component: CreditorComponent;
  let fixture: ComponentFixture<CreditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
