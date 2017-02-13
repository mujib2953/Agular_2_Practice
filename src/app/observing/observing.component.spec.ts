/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ObservingComponent } from './observing.component';

describe('ObservingComponent', () => {
  let component: ObservingComponent;
  let fixture: ComponentFixture<ObservingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
