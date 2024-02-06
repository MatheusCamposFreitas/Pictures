import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { NewUser } from './new-user';
import { SingupService } from './singup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private singupService: SingupService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      userName: ['', [lowerCaseValidator(), Validators.required, Validators.minLength(2), Validators.maxLength(30)], this.userNotTakenValidatorService.checkUserNameTaken()],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]],
    });
  }

  signUp() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.singupService.signup(newUser)
      .subscribe(() => this.router.navigate(['']),
        err => console.log('error'));
  }
}
