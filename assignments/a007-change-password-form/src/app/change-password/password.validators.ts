import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static equalsOldPassword(control: AbstractControl) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          resolve({ notEqualsOldPassword : true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }

  static passwordsShouldMatch(control: AbstractControl) {
    let newPassword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');

    let match = newPassword.value === confirmPassword.value;

    if (!match) {
      return { passwordsShouldMatch: true };
    }

    return null;
  }
}
