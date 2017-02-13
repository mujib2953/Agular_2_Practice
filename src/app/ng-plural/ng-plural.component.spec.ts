/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgPluralComponent } from './ng-plural.component';

describe('NgPluralComponent', () => {
  let component: NgPluralComponent;
  let fixture: ComponentFixture<NgPluralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPluralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPluralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
