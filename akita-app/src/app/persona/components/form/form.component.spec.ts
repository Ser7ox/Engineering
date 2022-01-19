import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let h4: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
                ReactiveFormsModule,
                HttpClientTestingModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h4 = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have setProfilo() function', () => {
    expect(component.setProfilo).toBeTruthy();
  });

  it('tag name should be equal to H4', () => {
    fixture.detectChanges();
    expect(h4.querySelector('h4').tagName).toContain('H4');
  });

});
