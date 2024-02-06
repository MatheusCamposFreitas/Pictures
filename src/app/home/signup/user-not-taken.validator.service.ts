import { Injectable } from "@angular/core";
import { SingupService } from "./singup.service";
import { AbstractControl } from "@angular/forms";
import { debounceTime, first, map, switchMap } from "rxjs/operators";

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private singupService: SingupService) { }

    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control.valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.singupService.checkUserNameTaken(userName)))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(first());
        }
    }
}