import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPrueva2Component } from './form-prueva2.component';

describe('FormPrueva2Component', () => {
  let component: FormPrueva2Component;
  let fixture: ComponentFixture<FormPrueva2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPrueva2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormPrueva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
