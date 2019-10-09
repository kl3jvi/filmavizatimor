import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanteraPage } from './pantera.page';

describe('PanteraPage', () => {
  let component: PanteraPage;
  let fixture: ComponentFixture<PanteraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanteraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
