import { AbstractControl, ValidatorFn } from "@angular/forms";

export const crossFieldValidator: ValidatorFn = (control: AbstractControl) => {
    const userName = control.get('userName')?.value;
    const password = control.get('password')?.value;
    if (userName.trim() + password.trim()) { 
        return userName != password ? null: { crossFieldValidator: true };
    } else {
        return null;
    }
}