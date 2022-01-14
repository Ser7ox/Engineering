import { AbstractControl,ValidationErrors } from '@angular/forms';

export class CustomValidators {

  public static phoneAddress(control: AbstractControl): ValidationErrors | null {
    const phone = control.get('telefono').value;
    const address = control.get('indirizzo').value;
    return (phone && !address) || (!phone && address) ? { misMatch: true } : null;
  }
}
