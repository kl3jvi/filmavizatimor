import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomPage } from './tom.page';

describe('TomPage', () => {
  let component: TomPage;
  let fixture: ComponentFixture<TomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
