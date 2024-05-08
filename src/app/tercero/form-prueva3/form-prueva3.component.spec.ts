import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrueva3Component } from './form-prueva3.component';

describe('FormPrueva3Component', () => {
  let component: FormPrueva3Component;
  let fixture: ComponentFixture<FormPrueva3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrueva3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPrueva3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
