import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpongebobPage } from './spongebob.page';

describe('SpongebobPage', () => {
  let component: SpongebobPage;
  let fixture: ComponentFixture<SpongebobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpongebobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpongebobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
