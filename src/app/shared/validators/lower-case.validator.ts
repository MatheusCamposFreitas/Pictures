import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function lowerCaseValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
            return { lowerCase : true};
        }

        return null;
    }
}