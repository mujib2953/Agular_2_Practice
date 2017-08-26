import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopeFooterComponent } from './develope-footer.component';

describe('DevelopeFooterComponent', () => {
  let component: DevelopeFooterComponent;
  let fixture: ComponentFixture<DevelopeFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopeFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
