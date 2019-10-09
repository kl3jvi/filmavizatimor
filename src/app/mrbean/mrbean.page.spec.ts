import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrbeanPage } from './mrbean.page';

describe('MrbeanPage', () => {
  let component: MrbeanPage;
  let fixture: ComponentFixture<MrbeanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrbeanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrbeanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
