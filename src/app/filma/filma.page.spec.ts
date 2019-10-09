import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmaPage } from './filma.page';

describe('FilmaPage', () => {
  let component: FilmaPage;
  let fixture: ComponentFixture<FilmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
