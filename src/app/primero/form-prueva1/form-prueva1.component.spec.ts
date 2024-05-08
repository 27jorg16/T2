import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrueva1Component } from './form-prueva1.component';

describe('FormPrueva1Component', () => {
  let component: FormPrueva1Component;
  let fixture: ComponentFixture<FormPrueva1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrueva1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPrueva1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
