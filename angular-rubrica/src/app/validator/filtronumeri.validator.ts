import { AbstractControl, ValidationErrors } from '@angular/forms';

export function filtronumeri(control: AbstractControl): ValidationErrors | null {
  const regexp = new RegExp(/^[A-Za-z]+$/);
  if (!control || !control.value ) {
      return null;
   }
  const test = regexp.test(control.value);
    
  if ( !test  ) {
    return { filtronumeri: true };
  }

  return null;
}