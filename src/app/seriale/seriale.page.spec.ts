import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialePage } from './seriale.page';

describe('SerialePage', () => {
  let component: SerialePage;
  let fixture: ComponentFixture<SerialePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerialePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
