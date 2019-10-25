import {FormControl} from '@angular/forms';

export class CustomValidators {
  static forbiddenName(control: FormControl): { [s: string]: boolean } {
    if ('Test' === control.value) {
      return {'invalidProjectName': true};
    }
    return null;
  }
}
