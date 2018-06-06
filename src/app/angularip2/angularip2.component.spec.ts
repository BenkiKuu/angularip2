import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angularip2Component } from './angularip2.component';

describe('Angularip2Component', () => {
  let component: Angularip2Component;
  let fixture: ComponentFixture<Angularip2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angularip2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angularip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
