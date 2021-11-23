import { AbstractControl, ValidationErrors } from '@angular/forms';

export function filtronumeri(control: AbstractControl): ValidationErrors | null {
  const regexp = new RegExp(/^[A-Za-z]+$/);

  const test = regexp.test(control.value);

  if (test != true) {
    return { gte: true };
  }

  return null;
}